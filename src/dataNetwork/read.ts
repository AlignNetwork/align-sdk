import { alignEnvironment } from "../lib";

export async function getPins(
  env: "development" | "production" = "development"
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
  env: "development" | "production" = "development"
): Promise<any> {
  let url = `${alignEnvironment(env).ipfs}/ipfs/${cid}`;
  const res = await fetch(`${url}`, {
    method: "GET",
  });
  const result = await res.json();
  return result;
}
