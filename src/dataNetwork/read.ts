import { alignUrls } from "../lib";

const dataNetworkUrl = alignUrls.ipfs;

export async function getPins(): Promise<any> {
  const res = await fetch(`${dataNetworkUrl}/getpins`, {
    method: "POST",
  });
  const result = await res.json();
  console.log(result);
  return result;
}

export async function getContent(cid: string): Promise<any> {
  const res = await fetch(`${dataNetworkUrl}/ipfs/${cid}`, {
    method: "GET",
  });
  const result = await res.json();
  console.log(result);
  return result;
}
