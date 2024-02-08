import { configureStore } from '@reduxjs/toolkit';
import { loginApi } from 'modules/LoginForm/api';
import { RegistrationApi } from 'modules/RegistrationForm/api';
import { userDetailsReducer } from 'modules/UserDetails';
import { userDetailsApi } from 'modules/UserDetails/api';
import { usersReducer } from 'modules/UsersList';
import { usersApi } from 'modules/UsersList/api';
import { userReducer } from './userSlice';

export const store = configureStore({
  reducer: {
    [loginApi.reducerPath]: loginApi.reducer,
    [RegistrationApi.reducerPath]: RegistrationApi.reducer,
    [usersApi.reducerPath]: usersApi.reducer,
    [userDetailsApi.reducerPath]: userDetailsApi.reducer,
    user: userReducer,
    users: usersReducer,
    userDetails: userDetailsReducer
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware()
      .concat(loginApi.middleware)
      .concat(RegistrationApi.middleware)
      .concat(usersApi.middleware)
      .concat(userDetailsApi.middleware)
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
