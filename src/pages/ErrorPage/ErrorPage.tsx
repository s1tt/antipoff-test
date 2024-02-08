import Button from 'ui/Button/Button';
import styles from './ErrorPage.module.css';

const PageError = () => {
  const reloadPage = () => {
    location.reload();
  };
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>Oops!</h1>
      <h2 className={styles.text}>Произошла непредвиденная ошибка</h2>
      <Button onClick={reloadPage} className={styles.errorBtn}>
        Обновить страницу
      </Button>
    </main>
  );
};

export default PageError;
