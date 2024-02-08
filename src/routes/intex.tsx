import NotFoundPage from 'pages/NotFoundPage/NotFoundPage';
import OurTeamPage from 'pages/OurTeamPage/OurTeamPage';
import UserDetailsPage from 'pages/UserDetailsPage/UserDetailsPage';
import SignInPage from 'pages/auth/SignInPage/SignInPage';
import SignUpPage from 'pages/auth/SignUpPage/SignUpPage';
import { Route, Routes } from 'react-router-dom';
import PrivateRoute from './PrivateRoutes';
import PublicRoutes from './PublicRoutes';

const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<PrivateRoute />}>
        <Route element={<OurTeamPage />} path='/' />
        <Route element={<UserDetailsPage />} path='/users/:id' />
      </Route>
      <Route element={<PublicRoutes />}>
        <Route element={<SignInPage />} path='/signin' />
        <Route element={<SignUpPage />} path='/signup' />
      </Route>
      <Route element={<NotFoundPage />} path='*' />
    </Routes>
  );
};

export default AppRoutes;
