import { LoginForm } from 'modules/LoginForm';
import styles from './SignInPage.module.css';

const SignInPage = () => {
  return (
    <main className={styles.signin}>
      <LoginForm />
    </main>
  );
};

export default SignInPage;
