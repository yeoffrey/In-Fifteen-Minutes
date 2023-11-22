import type { Endpoint, PlacesApi } from "../types";

export async function places(search: string): Promise<boolean> {
  const endpoint: Endpoint =
    "https://places.googleapis.com/v1/places:searchText";

  const body: PlacesApi = {
    textQuery: search,
    maxResultCount: 5,
  };

  try {
    const response = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Goog-Api-Key": import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
        "X-Goog-FieldMask": "places.displayName,places.formattedAddress",
      },
      body: JSON.stringify(body),
    });

    console.log(await response.json());

    if (response.ok) {
      return true;
    }

    console.log(`Places non-200: ${JSON.stringify(response)}`);

    return false;
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error("Error fetching data:", error.message);
    }

    throw error; // Re-throw the error to propagate it further if needed
  }
}
