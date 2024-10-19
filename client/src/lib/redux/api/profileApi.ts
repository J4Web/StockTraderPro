import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const profileApi = createApi({
  reducerPath: 'profileApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${"https://stocktraderpro.onrender.com/"}/api`,
  }),
  tagTypes: ['auth'],
  endpoints: (builder) => ({
    userProfile: builder.query({
      query: () => `user`,
    }),

    logout: builder.mutation({
      query: () => ({
        url: `/logout`,
        method: 'POST',
        credentials: 'include',
      }),
    }),
  }),
});

export const { useUserProfileQuery, useLogoutMutation } = profileApi;
