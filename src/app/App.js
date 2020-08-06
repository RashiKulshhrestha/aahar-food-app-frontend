import React from 'react';
import HomePage from '../auth/Home'
import { Switch } from 'react-router-dom';
import PublicRoute from '../utils/PublicRoute';
import Login from '../auth/Login';
import Signup from '../auth/Signup';
import OwnerSignup from '../auth/OwnerSignup';
import Userlogin from '../user/User-login';

function App() {
  return (
    <div className="App">
      <Switch >
        <PublicRoute path="/" component={HomePage}exact></PublicRoute>
        <PublicRoute path="/login" component={Login}exact></PublicRoute>
        <PublicRoute path="/signup" component={Signup}exact></PublicRoute>
        <PublicRoute path="/user-login" component={Userlogin}exact></PublicRoute>
        <PublicRoute path="/partner-with-us" component={OwnerSignup}exact></PublicRoute>
      </Switch>
      
    </div>
  );
}

export default App;
