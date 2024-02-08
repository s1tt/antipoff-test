import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IUser } from 'types';
import { usersApi } from '../api';

interface UsersListState {
  users: IUser[];
  maxPages: number;
  currentPage: number;
  likedUsers: IUser[];
}

const initialState: UsersListState = {
  users: [],
  maxPages: 0,
  currentPage: 1,
  likedUsers: JSON.parse(localStorage.getItem('likedUsers') || '[]')
};

const usersListSlice = createSlice({
  name: 'usersList',
  initialState,
  reducers: {
    likeUser(state, action: PayloadAction<IUser>) {
      state.likedUsers.push(action.payload);
      localStorage.setItem('likedUsers', JSON.stringify(state.likedUsers));
    },
    unlikeUser(state, action: PayloadAction<IUser>) {
      state.likedUsers = state.likedUsers.filter(
        likedUser => likedUser.id !== action.payload.id
      );
      localStorage.setItem('likedUsers', JSON.stringify(state.likedUsers));
    }
  },
  extraReducers: builder => {
    builder.addMatcher(
      usersApi.endpoints.getUsers.matchFulfilled,
      (state, action) => {
        state.users = [
          ...state.users,
          ...action.payload.data.filter(newUser => {
            return !state.users.some(
              existingUser => existingUser.id === newUser.id
            );
          })
        ];
        state.maxPages = action.payload.total_pages;
        state.currentPage = action.payload.page;
      }
    );
  }
});

export const { likeUser, unlikeUser } = usersListSlice.actions;
export const usersReducer = usersListSlice.reducer;
