import { SerializedError } from '@reduxjs/toolkit';
import { FetchBaseQueryError } from '@reduxjs/toolkit/query';
import { useEffect, useState } from 'react';
import styles from './FetchingError.module.css';

interface FetchingErrorProps {
  error: FetchBaseQueryError | SerializedError | undefined;
}

const FetchingError = ({ error }: FetchingErrorProps) => {
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    if (error) {
      if ('message' in error) {
        setErrorMessage(error.message || 'Неизвестная ошибка');
      } else if ('error' in error) {
        setErrorMessage(error.error);
      } else {
        setErrorMessage('Неизвестная ошибка');
      }
    }
  }, [error]);

  return (
    <section className={styles.content}>
      <h2 className={styles.title}>Ошибка при загрузке данных!</h2>
      <p className={styles.text}>{errorMessage}</p>
    </section>
  );
};

export default FetchingError;
