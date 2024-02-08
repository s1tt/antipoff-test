import ArrowIco from 'assets/arrow.svg?react';
import FetchingError from 'components/FetchingError/FetchingError';
import UserCard from 'components/UserCard/UserCard';
import UserCardSkeleton from 'components/UserCardSkeleton/UserCardSkeleton';
import { useAppSelector } from 'hooks/useAppSelector';
import { useResize } from 'hooks/useResize';
import { useGetUsersQuery, useLazyGetUsersQuery } from 'modules/UsersList/api';
import Button from 'ui/Button/Button';
import styles from './UsersList.module.css';

const UsersList = () => {
  const { elementsOnScreen, elementsOnRow } = useResize();
  const { users, maxPages, currentPage } = useAppSelector(state => state.users);
  const [getUsers, { isFetching, isError, error }] = useLazyGetUsersQuery();
  const { isFetching: isMoreUsersFetching } = useGetUsersQuery({
    page: currentPage,
    elementsOnScreen
  });

  const fetchMoreUsers = () => {
    getUsers({ page: currentPage + 1, elementsOnScreen });
  };

  if (isError) {
    return <FetchingError error={error} />;
  }
  console.log(users.length < currentPage * elementsOnScreen);
  return (
    <section className={styles.content}>
      <div className={styles.cards}>
        {users && users.map(user => <UserCard key={user.id} user={user} />)}

        {(isFetching || isMoreUsersFetching) &&
          Array(elementsOnRow)
            .fill(null)
            .map((_, index) => <UserCardSkeleton key={index} />)}
      </div>

      {currentPage < maxPages && !isFetching && (
        <Button
          className={styles.paginationBtn}
          type='button'
          onClick={fetchMoreUsers}
        >
          Показать еще
          <ArrowIco />
        </Button>
      )}
    </section>
  );
};

export default UsersList;
