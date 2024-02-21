export interface Airport {
  code: string;
  name: string;
  city: string;
  country: string;
  // ... any other fields that your API provides
}

export interface AirportResponse {
  data: Airport[];
}
