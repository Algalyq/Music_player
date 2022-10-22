import React, { useState,Component, useNavigate} from 'react';
import { Redirect } from 'react-router-dom';
import Main from '../Main';


class LogIn extends Component {

  state = {
    credentials: {username: '', password: ''},
    logged_in: localStorage.getItem('token') ? true : false,
  
  }

  login = event => {
    fetch('http://127.0.0.1:8000/token-auth/', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(this.state.credentials)
    })
    .then( data => data.json())
    .then(
      data => {
        this.props.userLogin(data.token);
        console.log(this.state.credentials.username)
        this.props.history.push("/")
      }
    )

    .catch( error => console.error(error))
  }

  register = event => {
    fetch('http://127.0.0.1:8000/api/auth/register', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(this.state.credentials)
    })
    .then( data => data.json())
    .then(
      data => {
        console.log(data.token);
      }
    )
    .catch( error => console.error(error))
  }

  logout = event => {
    fetch('http://127.0.0.1:8000/api/auth/logout', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(this.state.credentials)
    })
    .then( data => data.json())
    .then(
      data => {
        console.log(data.token);
        console.log(this.state.credentials.username)
    
      }
    )
    .catch( error => console.error(error))
  }
  inputChanged = event => {
    const cred = this.state.credentials;
    cred[event.target.name] = event.target.value;
    this.setState({credentials: cred});
  }

  render() {
    return (
      <div>
  
        <div>
        <h1>Login user form</h1>
      
      <label>
        Username:
        <input type="text" name="username"
         value={this.state.credentials.username}
         onChange={this.inputChanged}/>
      </label>
      <br/>
      <label>
        Password:
        <input type="password" name="password"
         value={this.state.credentials.password}
         onChange={this.inputChanged} />

      </label>
 
      <br/>
      <button onClick={this.login}>Login</button>


      <button onClick={this.register} >Register</button>
      <button onClick={this.logout}>Logout</button>
           

              </div>
        </div>
      
    );
  }
}

export default LogIn;