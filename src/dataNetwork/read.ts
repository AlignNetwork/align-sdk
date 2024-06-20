import { alignEnvironment } from "../lib";

export async function getPins(
  env: "development" | "production" = "production"
): Promise<any> {
  let url = `${alignEnvironment(env).ipfs}/getpins`;
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
  let url = `${alignEnvironment(env).ipfs}/ipfs/${cid}`;
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
  let url = `${alignEnvironment(env).ipfs}/arraybuffer/${cid}`;
  const res = await fetch(`${url}`, {
    method: "GET",
  });
  const result = await res.arrayBuffer();
  console.log("cid:", result);
  const arrayBuffer = new Uint8Array(result).buffer;
  const base64String = arrayBufferToBase64(arrayBuffer);
  return base64String;
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
  let url = `${alignEnvironment(env).ipfs}/storage`;
  const res = await fetch(`${url}`, {
    method: "GET",
  });
  const result = res.text();
  return result;
}
