import MobileBackIcon from 'assets/mobileBackIcon.svg?react';
import MobileLogOutIcon from 'assets/mobileLogoutIcon.svg?react';
import { useAppDispatch } from 'hooks/useAppDispatch';
import { useResize } from 'hooks/useResize';
import { ReactNode } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { unsetUser } from 'store/userSlice';
import Button from 'ui/Button/Button';
import styles from './Header.module.css';

interface HeaderProps {
  children: ReactNode;
}

const Header = ({ children }: HeaderProps) => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const dispatch = useAppDispatch();
  const { isMobile } = useResize();

  const logoutHandler = () => {
    dispatch(unsetUser());
    navigate('/signin');
  };

  const backHandler = () => {
    navigate(-1);
  };

  return (
    <header className={styles.header}>
      <div className={styles.headerWrapper}>
        {children}
        {pathname !== '/' && (
          <Button
            onClick={backHandler}
            className={`${styles.headerBtn} ${
              isMobile ? styles.mobileBackBtn : styles.backBtn
            }`}
            type='button'
          >
            {isMobile ? <MobileBackIcon /> : 'Назад'}
          </Button>
        )}

        <Button
          onClick={logoutHandler}
          className={`${styles.headerBtn} ${
            isMobile ? styles.mobileLogoutBtn : styles.logoutBtn
          }`}
          type='button'
        >
          {isMobile ? <MobileLogOutIcon /> : 'Выход'}
        </Button>
      </div>
    </header>
  );
};

export default Header;
