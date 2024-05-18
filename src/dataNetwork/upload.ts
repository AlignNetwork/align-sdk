import { alignUrls } from "../lib";

export class UploadError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "UploadError";
  }
}

const dataNetworkUrl = alignUrls.ipfs;

type UploadResponse = {
  result: string;
  cid: string;
  data: { [key: string]: string } | string;
  error: boolean;
};

export async function upload(data: {
  [key: string]: string;
}): Promise<{ error: boolean; cid: string; result?: string; data?: any }> {
  const res = await fetch(`${dataNetworkUrl}/upload`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  let result = (await res.json()) as UploadResponse;
  if (result.error) {
    throw new UploadError(result.result);
  }
  return {
    error: result.error,
    result: result.result,
    data: result.data,
    cid: result.cid,
  };
}
