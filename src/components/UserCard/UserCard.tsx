import LikeIcon from 'assets/likeIcon.svg?react';
import UnlikeIcon from 'assets/unlikeIcon.svg?react';
import { useLikeUser } from 'hooks/useLikeUser';
import { MouseEvent, useState } from 'react';
import { Link } from 'react-router-dom';
import { IUser } from 'types';
import Skeleton from 'ui/Skeleton/Skeleton';
import styles from './UserCard.module.css';

interface UserCardProps {
  user: IUser;
}

const UserCard = ({ user }: UserCardProps) => {
  const { isLikedUser, likeUserHandler, unlikeUserHandler } = useLikeUser(user);
  const [isImageOnCardLoad, setIsImageOnCardLoad] = useState(false);

  const toggleLikeUser = (e: MouseEvent<HTMLButtonElement>) => {
    if (isLikedUser) {
      unlikeUserHandler(e);
    } else {
      likeUserHandler(e);
    }
  };

  return (
    <article className={styles.card}>
      <Link className={styles.cardLink} to={`users/${user.id}`}>
        <div className={styles.imgWrapper}>
          {!isImageOnCardLoad && (
            <Skeleton width='124px' height='124px' radius='50%' />
          )}
          <img
            onLoad={() => setIsImageOnCardLoad(true)}
            style={{ display: isImageOnCardLoad ? 'block' : 'none' }}
            className={styles.img}
            src={user.avatar}
            alt={`${user.first_name} ${user.last_name}`}
          />
        </div>
        <p
          className={styles.userFullName}
        >{`${user.first_name} ${user.last_name}`}</p>
        <button
          className={styles.likeBtn}
          type='button'
          onClick={toggleLikeUser}
        >
          {isLikedUser ? <UnlikeIcon /> : <LikeIcon />}
        </button>
      </Link>
    </article>
  );
};

export default UserCard;
