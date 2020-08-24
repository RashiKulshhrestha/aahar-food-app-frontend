import React, { Fragment, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../components/auth/Home";

import { Provider } from "react-redux";
import store from "../store";

import { loadUser } from "../actions/auth";
import setAuthToken from "../utils/setAuthToken";
import { Routes } from "../components/routing/Routes";

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);
  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route component={Routes} />
          </Switch>
        </Fragment>
      </Router>
    </Provider>
  );
};


export default App;
