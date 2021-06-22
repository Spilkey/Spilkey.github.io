import React from 'react';

import { Switch, Route} from "react-router-dom";

import App from "../views/App";

function Routes() {
  return (
    <Switch>
      <Route path="/redux-test">
        <App />
      </Route>
      <Route path="/about">about</Route>
      <Route path="/">home</Route>
    </Switch>
  );
}

export default Routes;