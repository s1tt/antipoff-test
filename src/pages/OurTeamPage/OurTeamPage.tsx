import Header from 'components/Header/Header';
import { UsersList } from 'modules/UsersList';
import styles from './OurTeamPage.module.css';

const OurTeamPage = () => {
  return (
    <>
      <Header>
        <div className={styles.headerWrapper}>
          <h1 className={styles.headerTitle}>Наша команда</h1>
          <p className={styles.headerSubtitle}>
            Это опытные специалисты, хорошо разбирающиеся во всех задачах,
            которые ложатся на их плечи, и умеющие находить выход из любых, даже
            самых сложных ситуаций.
          </p>
        </div>
      </Header>
      <main className={styles.main}>
        <UsersList />
      </main>
    </>
  );
};

export default OurTeamPage;
