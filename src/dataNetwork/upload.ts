import { getAlignEnvironment } from "../lib/alignEnvironment";

export class UploadError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "UploadError";
  }
}

type UploadResponse = {
  result: string;
  cid: string;
  data: { [key: string]: string } | string;
  error: boolean;
};

export async function uploadJson(
  data: {
    [key: string]: any;
  },
  env: "development" | "production" = "production"
): Promise<{ error: boolean; cid: string; result?: string; data?: any }> {
  const dataToUpload = { ...data };
  const { ipfs } = getAlignEnvironment(env);
  let url = ipfs + "/upload";

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

export async function uploadFile(
  fileName: string,
  fileBuffer: Uint8Array,
  file: File,
  env: "development" | "production" = "production"
): Promise<{ error: boolean; cid: string; result?: string; data?: any }> {
  const fileSizeInBytes = file.size;
  const fileSizeInKilobytes = fileSizeInBytes / 1024;
  const fileSizeInMegabytes = fileSizeInKilobytes / 1024;
  if (fileSizeInMegabytes > 10) {
    return {
      error: true,
      result: "File size is too large",
      cid: "",
      data: "",
    };
  }
  const { ipfs } = getAlignEnvironment(env);
  let url = ipfs + "/upload";
  const res = await fetch(`${url}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/octet-stream",
      "File-Name": fileName,
    },
    body: fileBuffer,
  });
  let result = (await res.json()) as UploadResponse;
  return {
    error: result.error,
    result: result.result,
    data: result.data,
    cid: result.cid,
  };
}
