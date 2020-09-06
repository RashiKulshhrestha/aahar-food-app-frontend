import React from "react";
import { Route, Switch } from "react-router-dom";
import PrivateRouteOwner from "./PrivateRouteOwner";
import PrivateRouteUser from "./PrivateRouteUser";
import UserRegister from "../auth/UserRegister";
import User from "../user/User";
import OwnerRegister from "../auth/OwnerRegister";
import Owner from "../owner/Owner";
import UserLogin from "../auth/UserLogin";
import OwnerLogin from "../auth/OwnerLogin";
import Order from "../order/Order";

export const Routes = () => {
    return(
        <section>
            <Switch>
                <Route exact path="/user-register" component={UserRegister}></Route>
                <PrivateRouteUser exact path="/user" component={User}></PrivateRouteUser>
                <PrivateRouteUser exact path="/order/:id" component={Order}></PrivateRouteUser>
                <Route exact path="/partner-with-us" component={OwnerRegister}></Route>
                <PrivateRouteOwner exact path="/owner/:id" component={Owner}></PrivateRouteOwner>
                <Route exact path="/user-login" component={UserLogin}></Route>
                <Route exact path="/owner-login" component={OwnerLogin}></Route>
            </Switch>
        </section>
    );
};