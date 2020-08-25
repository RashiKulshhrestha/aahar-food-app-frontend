import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../components/auth/Home";

import { Provider } from "react-redux";
import store from "../store";


import { Routes } from "../components/routing/Routes";

const App = () => {
  
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
