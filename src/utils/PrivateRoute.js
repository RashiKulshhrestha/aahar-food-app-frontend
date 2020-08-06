import React from 'react';
import {Route,Redirect} from 'react-router-dom';

const PrivateRoute = ({component:Component, auth, ...rest}) =>(
    <Route
        {...rest}
        render={
        
            (<Redirect to ="/login"/>
            )
        }
    />
);
export default PrivateRoute;
