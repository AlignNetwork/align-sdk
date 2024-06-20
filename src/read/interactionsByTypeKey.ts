import { alignEnvironment } from "../lib";

export async function interactionsByTypeKeyPage(
  typeKey: string,
  pageParam: number,
  env: "development" | "production" = "production"
): Promise<any> {
  const url = `${
    alignEnvironment(env).indexer
  }/itypekeypage/${typeKey}/${pageParam}`;

  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    // Assuming the API returns the data array directly
    const data = await response.json();
    return {
      //@ts-ignore
      data: data.data,
      //@ts-ignore
      nextPage: data.nextPage,
    };
  } catch (error) {
    console.error("Fetching align id failed:", error);
    throw error;
  }
}
