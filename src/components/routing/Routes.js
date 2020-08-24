import React from "react";
import { Route, Switch } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import UserRegister from "../auth/UserRegister";
import User from "../user/User";

export const Routes = () => {
    return(
        <section>
            <Switch>
                <Route exact path="/user-register" component={UserRegister}/>
                <PrivateRoute exact path="/user" component={User}></PrivateRoute>
            </Switch>
        </section>
    );
};