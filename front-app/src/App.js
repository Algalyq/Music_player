import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import useToken from './auth/useToken';
import Login from './auth/Login';
function App() {
  
  const { token, setToken } = useToken();

 

  return (
    <div className="wrapper">
      <h1>Application</h1>
      <BrowserRouter>
        <Switch>
          <Route path="/login">
            <Login setToken={setToken}/>
          </Route>
          <Route path='/'>
          <main/>
          </Route>

        </Switch>
      </BrowserRouter>
    </div>
  );
}
export default App;