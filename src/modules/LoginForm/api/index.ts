import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
interface LoginSuccess {
  token: string;
}

export const loginApi = createApi({
  reducerPath: 'login/api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://reqres.in/api/'
  }),
  endpoints: builder => ({
    loginUser: builder.mutation<
      LoginSuccess,
      { email: string; password: string }
    >({
      query: body => {
        return {
          url: 'login',
          method: 'post',
          body
        };
      }
    })
  })
});

export const { useLoginUserMutation } = loginApi;
