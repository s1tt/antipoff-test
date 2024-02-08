import { useAppSelector } from 'hooks/useAppSelector';
import { Navigate, Outlet } from 'react-router-dom';

const PublicRoutes = () => {
  const { token } = useAppSelector(store => store.user);

  return !token ? <Outlet /> : <Navigate to={'/'} />;
};

export default PublicRoutes;
