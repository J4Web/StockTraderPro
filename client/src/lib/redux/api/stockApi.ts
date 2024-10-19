import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const stockApi = createApi({
  reducerPath: 'stockApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${"https://stocktraderpro.onrender.com"}/api`,
  }),
  tagTypes: ['stocks', 'history'],
  endpoints: (builder) => ({
    // get stock data
    getStockData: builder.query({
      query: ({ market, symbol }) => ({
        url: `/intraday/${symbol}`,
        method: 'GET',
      }),
      providesTags: ['stocks'],
    }),
    // get stock data
    getOnSelecteStockData: builder.query({
      query: ({ symbol, day }) => ({
        url: `/historical/${symbol}/${day}`,
        method: 'GET',
      }),
      providesTags: ['history'],
    }),
  }),
});

export const { useGetStockDataQuery, useLazyGetOnSelecteStockDataQuery } =
  stockApi;
