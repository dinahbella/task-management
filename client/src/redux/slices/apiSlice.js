import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query";
const API_URL = "http://localhost:5000/api";

const baseQuery = fetchBaseQuery({
  baseUrl: API_URL,
});

export const apiSlice = createApi({
  baseQuery,
  tagTypes: [],
  endpoints: (builder) => ({}),
});
