import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IUser } from 'types';
import { userDetailsApi } from '../api';

interface UserDetailsState {
  info: IUser | null;
}

const initialState: UserDetailsState = {
  info: null
};

export const userDetailsSlice = createSlice({
  name: 'userDetails',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addMatcher(
      userDetailsApi.endpoints.getUserDetails.matchFulfilled,
      (state, action: PayloadAction<IUser>) => {
        state.info = action.payload;
      }
    );
  }
});
export const userDetailsReducer = userDetailsSlice.reducer;
