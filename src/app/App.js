import React, { Fragment } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "../components/auth/Home";

import { Provider } from "react-redux";
import store from "../store";
import setAuthUserToken from "../util/setAuthUserToken";
import { Routes } from "../components/routing/Routes";

if (localStorage.token) {
  setAuthUserToken(localStorage.token);
}
const App = () => {
  
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Fragment>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route component={Routes} />
          </Switch>
        </Fragment>
      </BrowserRouter>
    </Provider>
  );
};


export default App;
