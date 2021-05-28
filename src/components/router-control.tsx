import React from 'react';
import { Switch, Route } from 'react-router-dom';
import routes from 'tools/routes';

const RouterControl = () => (
  <Switch>
    {routes.map(({ exact, hashPath, component, key }) => (
      <Route key={key} exact={exact} path={hashPath} component={component} />
    ))}
  </Switch>
);

export default RouterControl;
