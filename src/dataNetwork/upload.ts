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

export async function upload(
  data: {
    [key: string]: any;
  },
  local?: boolean
): Promise<{ error: boolean; cid: string; result?: string; data?: any }> {
  const dataToUpload = { ...data };
  let url = `${dataNetworkUrl}/upload`;
  if (local) url = `http://localhost:3001/upload`;

  const res = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(dataToUpload),
  });
  let result = (await res.json()) as UploadResponse;
  if (result.error) {
    console.log(result);
    throw new UploadError(result.result);
  }
  return {
    error: result.error,
    result: result.result,
    data: result.data,
    cid: result.cid,
  };
}
