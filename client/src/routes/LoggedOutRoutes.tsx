import { FC } from 'react';
import { RouteProps } from 'react-router-dom';
import Routes from './Routes';
import Login from 'pages/public/Login';

const loggedOutRoutes: RouteProps[] = [
  { path: '/login', exact: true, render: () => <Login /> }
];

export const LoggedOutRoutes: FC = () => {
  return (
    <Routes routes={loggedOutRoutes} />
  );
}
