import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Dashboard from '../pages/Dashboard';
import Repository from '../pages/Repository';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/github-explorer" exact component={Dashboard} />
    <Route path="/github-explorer/repository/:repository+" exact component={Repository} />
  </Switch>
);

export default Routes;