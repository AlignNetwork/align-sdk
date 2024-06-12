import { alignEnvironment } from "../lib";

export async function getId(
  address: `0x${string}`,
  env: "development" | "production" = "development"
): Promise<any> {
  let url = `${alignEnvironment(env).indexer}/id/${address}`;

  try {
    const response = await fetch(url, {
      method: "GET",
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    // Assuming the API returns the data array directly
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Fetching align id failed:", error);
    throw error; // Re-throw the error if you want calling code to handle it
  }
}
