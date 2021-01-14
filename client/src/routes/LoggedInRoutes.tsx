import { FC } from 'react';
import { RouteProps } from 'react-router-dom';
import Routes from './Routes';
import Home from 'pages/private/Home';

const loggedInRoutes: RouteProps[] = [
  { path: '/', exact: true, render: () => <Home /> }
];

export const LoggedInRoutes: FC = () => {
  return (
    <Routes routes={loggedInRoutes} />
  );
}
