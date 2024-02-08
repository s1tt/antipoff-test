import { useAppSelector } from 'hooks/useAppSelector';
import { Navigate, Outlet } from 'react-router-dom';

const PrivateRoutes = () => {
  const { token } = useAppSelector(store => store.user);

  return token ? <Outlet /> : <Navigate to={'/signin'} />;
};

export default PrivateRoutes;
