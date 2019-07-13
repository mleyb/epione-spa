import React from "react";
import { Route, Switch } from "react-router";

const Routes: React.FC = () => (
  <Switch>
    <Route exact path="/" render={() => <div>Home</div>} />
    <Route render={() => <div>404</div>} />
  </Switch>
);

export default Routes;
