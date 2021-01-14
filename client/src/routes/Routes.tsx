import React, { FC } from 'react';
import { Switch, Route, RouteProps } from 'react-router-dom';

interface RoutesVM {
  routes: RouteProps[];
}

const Routes: FC<RoutesVM> = ({ routes }: RoutesVM) => {
  return (
    <Switch>
      {routes.map(route => (
        <Route {...route} />
      ))}
    </Switch>
  );
}

export default Routes;
