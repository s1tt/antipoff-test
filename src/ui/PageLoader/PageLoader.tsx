import Loader from 'ui/Loader/Loader';
import Portal from 'ui/Portal/Portal';
import styles from './PageLoader.module.css';

const PageLoader = () => {
  return (
    <Portal>
      <div className={styles.pageLoader}>
        <Loader />
      </div>
    </Portal>
  );
};

export default PageLoader;
