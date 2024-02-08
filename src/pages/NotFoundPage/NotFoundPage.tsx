import { Link } from 'react-router-dom';
import styles from './NotFoundPage.module.css';

const NotFoundPage = () => {
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>Oops!</h1>
      <h2 className={styles.subtitle}>404 - СТРАНИЦА НЕ НАЙДЕНА</h2>
      <p className={styles.text}>
        Страница, которую вы ищите, возможно, удалена или не существует
      </p>
      <Link className={styles.link} to={'/'}>
        На главную
      </Link>
    </main>
  );
};

export default NotFoundPage;
