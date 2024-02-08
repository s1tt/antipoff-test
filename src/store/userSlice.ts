import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

interface UserState {
  token: string;
}

const initialState: UserState = {
  token: localStorage.getItem('token') || ''
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<string>) => {
      state.token = action.payload;
      localStorage.setItem('token', action.payload);
    },
    unsetUser: state => {
      state.token = '';
      localStorage.removeItem('token');
    }
  }
});

export const { setUser, unsetUser } = userSlice.actions;
export const userReducer = userSlice.reducer;
