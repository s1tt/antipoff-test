import { likeUser, unlikeUser } from 'modules/UsersList/store/userListSlice';
import { MouseEvent, useEffect, useState } from 'react';
import { IUser } from 'types';
import { useAppDispatch } from './useAppDispatch';
import { useAppSelector } from './useAppSelector';

export const useLikeUser = (user: IUser | undefined) => {
  const dispatch = useAppDispatch();
  const { likedUsers } = useAppSelector(state => state.users);
  const [isLikedUser, setIsLikedUser] = useState(false);

  useEffect(() => {
    if (user) {
      setIsLikedUser(!!likedUsers.find(likerUser => likerUser.id === user.id));
    }
  }, [likedUsers, user]);

  const likeUserHandler = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (user) {
      dispatch(likeUser(user));
      setIsLikedUser(true);
    }
  };

  const unlikeUserHandler = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (user) {
      dispatch(unlikeUser(user));
      setIsLikedUser(false);
    }
  };

  return {
    likeUserHandler,
    unlikeUserHandler,
    isLikedUser
  };
};
