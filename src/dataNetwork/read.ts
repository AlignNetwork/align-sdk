import { getAlignEnvironment } from "../lib/alignEnvironment";

export async function getPins(
  env: "development" | "production" = "production"
): Promise<any> {
  const { ipfs } = getAlignEnvironment(env);
  let url = `${ipfs}/getpins`;
  const res = await fetch(`${url}`, {
    method: "POST",
  });
  const result = await res.json();
  return result;
}

export async function getContent(
  cid: string,
  env: "development" | "production" = "production"
): Promise<any> {
  const { ipfs } = getAlignEnvironment(env);
  let url = `${ipfs}/ipfs/${cid}`;
  const res = await fetch(`${url}`, {
    method: "GET",
  });
  const result = await res.json();
  return result;
}

export async function getArrayBuffer(
  cid: string,
  env: "development" | "production" = "production"
): Promise<any> {
  const { ipfs } = getAlignEnvironment(env);
  let url = `${ipfs}/arraybuffer/${cid}`;
  const res = await fetch(`${url}`, {
    method: "GET",
  });
  const result = (await res.json()) as
    | {
        buffer: {
          data: ArrayBuffer;
          type: string;
        };
        filetype: string;
      }
    | { [key: string]: any };
  if (result.buffer.data !== undefined) {
    console.log("cid:", result);
    const arrayBuffer = new Uint8Array(result.buffer.data).buffer;
    const fileType = result.filetype;
    const base64String = arrayBufferToBase64(arrayBuffer);
    return { result: base64String, fileType };
  } else {
    return { result, fileType: null };
  }
}

function arrayBufferToBase64(buffer: ArrayBuffer) {
  let binary = "";
  const bytes = new Uint8Array(buffer);
  const len = bytes.byteLength;
  for (let i = 0; i < len; i++) {
    binary += String.fromCharCode(bytes[i]);
  }
  return btoa(binary);
}

export async function getStorage(
  env: "development" | "production" = "production"
): Promise<any> {
  const { ipfs } = getAlignEnvironment(env);
  let url = `${ipfs}/storage`;
  const res = await fetch(`${url}`, {
    method: "GET",
  });
  const result = res.text();
  return result;
}
