import { CreateApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const API_URL = "http://localhost:5000/api";

const baseQuery = fetchBaseQuery({
  baseUrl: API_URL,
});

export const apiSlice = CreateApi({
  baseQuery,
  tagTypes: [],
  endpoints: (builder) => ({}),
});
