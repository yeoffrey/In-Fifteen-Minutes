export type Endpoint = "https://places.googleapis.com/v1/places:searchText";

export type PlacesApi = {
  textQuery: string;
  // Add other parameters as needed
  // For example:
  maxResultCount: number;
  // locationBias: {
  //   circle: {
  //     center: { latitude: -33.8688, longitude: 151.2093 }, // Example coordinates for Sydney, Australia
  //     radius: 5000, // Example radius in meters
  //   },
  // },
};
