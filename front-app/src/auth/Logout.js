import React, { useState } from 'react';
import PropTypes from 'prop-types';


async function logoutUser(credentials) {
    return fetch('http://localhost:8000/api/auth/logout', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(credentials)
    })
      .then(data => data.json())
      .then(
        console.log(credentials.username))
   }

   
export default function Login({ setToken }) {
    
    const [username, setUserName] = useState();
    const [password, setPassword] = useState();
  
  
    const handleSubmit = async e => {
      e.preventDefault();
      const token = await logoutUser({
        username,
        password
      });
      setToken(token);
    }
    return(
      <div className="login-wrapper">
        <h1>Please Log Out</h1>
        <form onSubmit={handleSubmit}>
         
            <button type="submit">Logout</button>
         
        </form>
      </div>
    )
  }
  
  Login.propTypes = {
    setToken: PropTypes.func.isRequired
  }