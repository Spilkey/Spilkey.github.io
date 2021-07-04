import React from "react";

import { Switch, Route } from "react-router-dom";

import App from "../views/App";
import Home from "../views/Home";

function Routes() {
  return (
    <Switch>
      <Route path="/redux-test">
        <App />
      </Route>
      <Route path="/about">about</Route>
      <Route path="/">
        <Home />
      </Route>
    </Switch>
  );
}

export default Routes;
