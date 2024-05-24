import { alignUrls } from "../lib";

const apiUrl = alignUrls.indexer;

export async function interactionsByToAlignIdAndITypeKey(
  alignId: string,
  iTypeKey: string
): Promise<any> {
  const url = `${apiUrl}/interactionbyto/${alignId}/${iTypeKey}`;

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
      data: data,
    };
  } catch (error) {
    console.error("Fetching align id failed:", error);
    throw error; // Re-throw the error if you want calling code to handle it
  }
}
