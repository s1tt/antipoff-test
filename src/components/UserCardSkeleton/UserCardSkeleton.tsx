import Skeleton from 'ui/Skeleton/Skeleton';
import styles from './UserCardSkeleton.module.css';

const UserCardSkeleton = () => {
  return (
    <article className={styles.card}>
      <div className={styles.cardLink}>
        {/* <div className={styles.imgWrapper}>
          <img className={styles.img} src={''} alt={''} />
        </div> */}
        <Skeleton width='124px' height='124px' radius='50%' />
        <Skeleton width='100%' height='23px' radius='0' />
        {/* <p className={styles.userFullName}></p> */}
        <Skeleton
          className={styles.likeBtn}
          width='30px'
          height='28px'
          radius='4px'
        />
      </div>
    </article>
  );
};

export default UserCardSkeleton;
