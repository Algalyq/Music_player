import React, { useState } from 'react';
import './App.css';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import Dashboard from '../src/components/Dashboard'
import Login from './auth/Login';
import Preferences from '../src/components/Preferences'
import useToken from '../src/auth/useToken';
import Logout from '../src/auth/Logout';



function App() {
  
  const { token, setToken } = useToken();
  if(!token){
    return (
      <div className="wrapper">
        <h1>Application log in</h1>
        <BrowserRouter>
          <Switch>
            <Route path="/login">
              <Login setToken={setToken} />
            </Route>
  
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
  else if(token){
    return (
      <div className="wrapper">
        <h1>Application log out</h1>
    
            <Route path="/logout">
              <Logout setToken={setToken} />
            </Route>
  
      
      </div>
    );
  }

} 

export default App;