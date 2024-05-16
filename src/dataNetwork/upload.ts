"use server";

const dataNetworkUrl = "http://localhost:4200";

export async function upload(data: {
  [key: string]: string;
}): Promise<{ result: string; data: string }> {
  console.log("server side action");
  console.log(data);
  const res = await fetch(`${dataNetworkUrl}/upload`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  let result: any = await res.json();
  if (result.error) {
    return { result: "error", data: result.result };
  }
  console.log(result);
  return result;
}
