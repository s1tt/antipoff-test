import FetchingError from 'components/FetchingError/FetchingError';
import Header from 'components/Header/Header';
import { useAppSelector } from 'hooks/useAppSelector';
import { UserDetails } from 'modules/UserDetails';
import { useGetUserDetailsQuery } from 'modules/UserDetails/api';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import Skeleton from 'ui/Skeleton/Skeleton';
import styles from './UserDetailsPage.module.css';

const UserDetailsPage = () => {
  const { id } = useParams();
  const [isImageOnCardLoad, setIsImageOnCardLoad] = useState(false);
  const { isError, error } = useGetUserDetailsQuery({
    id: Number(id)
  });
  const { info: user } = useAppSelector(state => state.userDetails);

  if (isError) {
    return <FetchingError error={error} />;
  }

  return (
    <>
      <Header>
        <div className={styles.headerWrapper}>
          <div className={styles.avatarWrapper}>
            {!isImageOnCardLoad && (
              <Skeleton width='100%' height='100%' radius='50%' />
            )}
            <img
              onLoad={() => setIsImageOnCardLoad(true)}
              className={styles.avatar}
              style={{ display: isImageOnCardLoad ? 'block' : 'none' }}
              src={user?.avatar}
              alt={`${user?.first_name} ${user?.last_name}`}
            />
          </div>
          <div className={styles.userInfo}>
            <h1 className={styles.userFullName}>
              {user?.first_name} {user?.last_name}
            </h1>
            <p className={styles.userPosition}>Партнер</p>
          </div>
        </div>
      </Header>
      <main className={styles.main}>
        <UserDetails user={user} />
      </main>
    </>
  );
};

export default UserDetailsPage;
