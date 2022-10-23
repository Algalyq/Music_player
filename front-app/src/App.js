import React, { useState } from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Dashboard from '../src/components/Dashboard'
import Login from './auth/Login';
import Preferences from '../src/components/Preferences'
import useToken from '../src/auth/useToken';
import Logout from '../src/auth/Logout';



function App() {
  
  const { token, setToken } = useToken();
 
  if(!token){
    return <Login setToken={setToken} />
  }
  else if(token){
    return <Logout setToken={setToken} />
  }
  return (
    <div className="wrapper">
      <h1>Application</h1>
      <BrowserRouter>
        <Switch>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
         
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;