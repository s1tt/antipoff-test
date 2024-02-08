import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IUser } from 'types';
interface usersResponse {
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
  data: IUser[];
  support: {
    url: string;
    text: string;
  };
}

export const usersApi = createApi({
  reducerPath: 'users/api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://reqres.in/api/'
  }),
  tagTypes: ['UserList'],
  endpoints: builder => ({
    getUsers: builder.query<
      usersResponse,
      { page: number; elementsOnScreen: number }
    >({
      query: ({ page, elementsOnScreen }) => {
        return {
          url: 'users',
          params: {
            per_page: elementsOnScreen,
            page
          }
        };
      },
      providesTags: ['UserList']
    })
  })
});

export const { useLazyGetUsersQuery, useGetUsersQuery } = usersApi;
