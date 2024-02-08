import { RegistrationForm } from '../../../modules/RegistrationForm';
import styles from './SignUpPage.module.css';

const SignUpPage = () => {
  return (
    <main className={styles.signup}>
      <RegistrationForm />
    </main>
  );
};

export default SignUpPage;
