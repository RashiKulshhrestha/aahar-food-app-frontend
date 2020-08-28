import React from "react";
import { Route, Switch } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import UserRegister from "../auth/UserRegister";
import User from "../user/User";
import OwnerRegister from "../auth/OwnerRegister";
import Owner from "../owner/Owner";
import UserLogin from "../auth/UserLogin";
import OwnerLogin from "../auth/OwnerLogin";

export const Routes = () => {
    return(
        <section>
            <Switch>
                <Route exact path="/user-register" component={UserRegister}></Route>
                <PrivateRoute exact path="/user" component={User}></PrivateRoute>
                <Route exact path="/partner-with-us" component={OwnerRegister}></Route>
                <PrivateRoute exact path="/owner" component={Owner}></PrivateRoute>
                <Route exact path="/user-login" component={UserLogin}></Route>
                <Route exact path="/owner-login" component={OwnerLogin}></Route>
            </Switch>
        </section>
    );
};