import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IUser } from 'types';

interface UserDetailsResponse {
  data: IUser;
}

export const userDetailsApi = createApi({
  reducerPath: 'userDetails/api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://reqres.in/api/'
  }),
  endpoints: builder => ({
    getUserDetails: builder.query<IUser, { id: number }>({
      query: ({ id }) => ({
        url: `/users/${id}`
      }),
      transformResponse: (data: UserDetailsResponse) => data.data
    })
  })
});

export const { useGetUserDetailsQuery } = userDetailsApi;
