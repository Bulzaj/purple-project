import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

const Router = (props) => {
  return (
    <BrowserRouter>
      <Switch>
        {props.routes.map((route) => (
          <Route key={route.path} path={route.path} exact>
            {route.page}
          </Route>
        ))}
      </Switch>
    </BrowserRouter>
  );
};
export default Router;
