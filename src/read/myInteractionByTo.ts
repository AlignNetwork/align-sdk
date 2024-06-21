import { getAlignEnvironment } from "../lib/alignEnvironment";

export async function myInteractionByTo(
  alignId: string,
  env: "development" | "production" = "production"
): Promise<any> {
  const { indexer } = getAlignEnvironment(env);
  const url = `${indexer}/myinteractionbyto/${alignId}`;

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
