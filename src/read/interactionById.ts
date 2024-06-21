import { getAlignEnvironment } from "../lib/alignEnvironment";

export async function interactionsByToAlignIdAndITypeKey(
  alignId: string,
  iTypeKey: string,
  env: "development" | "production" = "production"
): Promise<any> {
  const { indexer } = getAlignEnvironment(env);
  const url = `${indexer}/interactionbyto/${alignId}/${iTypeKey}`;

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
    throw error; // Re-throw the error if you want calling code to handle it
  }
}
