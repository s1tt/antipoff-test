import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
interface RegistrationSuccess {
  id: 'string';
  token: 'string';
}

export const RegistrationApi = createApi({
  reducerPath: 'registration/api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://reqres.in/api/'
  }),
  endpoints: builder => ({
    registrationUser: builder.mutation<
      RegistrationSuccess,
      { username?: string; email: string; password: string }
    >({
      query: body => {
        return {
          url: 'register',
          method: 'post',
          body
        };
      }
    })
  })
});

export const { useRegistrationUserMutation } = RegistrationApi;
