const dataNetworkUrl = "http://localhost:4200";

export async function getPins(): Promise<any> {
  const res = await fetch(`${dataNetworkUrl}/pins`, {
    method: "POST",
  });
  const result = await res.json();
  console.log(result);
  return result;
}

export async function getContent(cid: string): Promise<any> {
  const res = await fetch(`${dataNetworkUrl}/ipfs/${cid}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      cid: cid,
    }),
  });
  const result = await res.json();
  console.log(result);
  return result;
}
