import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { store } from "./app/store";
import { Provider, useSelector } from "react-redux";
import * as serviceWorker from "./serviceWorker";

import Nav from "./components/Nav";
import Routes from "./components/Routes";

import { HashRouter } from "react-router-dom";

import { selectStyle } from "./redux/style/styleSlice";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <HashRouter>
        <Main />
      </HashRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

function Main() {
  const theme = useSelector(selectStyle);
  return (
    <div>
      <div class="bg-image"></div>
      <div className={theme + " top"}>
        <Nav />
        <main>
          <Routes />
        </main>
      </div>
    </div>
  );
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
