import logo from './logo.svg';
import './App.css';   
import React, { useState, useEffect, Component } from "react";
import About from './pages/About';
import Main from './pages/Main';
import SignUP from './pages/Authentication/SignUP';
import { Route, Link } from "react-router-dom"; 
import NavBar from './navBar/NavBar';
import Nav from './navBar/Nav';
import LogIn from './pages/Authentication/LogIn';

function App(){

const [song,setSongs] = useState([])

useEffect(() => {
  fetch('http://127.0.0.1:8000/songs/',{
    mode: 'cors',
    'method':'GET',
    headers: {
      "Content-Type": "application/json"
 }
  })
  .then(resp => resp.json())
  .then(resp => setSongs(resp))
  .catch(error => console.log(error))
}, [])
  
    return (
     <div>
        <Main songs={song}/>
     </div>
    );
  

}

export default App;






  // const [songs,setSongs] = useState([])

  // useEffect(() => {
  //   fetch('http://127.0.0.1:8000/songs/',{
  //     mode: 'cors',
  //     'method':'GET',
  //     headers: {
  //       "Content-Type": "application/json"
  //  }
  //   })
  //   .then(resp => resp.json())
  //   .then(resp => setSongs(resp))
  //   .catch(error => console.log(error))
  // }, [])

  // return (
  //   <div className="App"><link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"/>
  //     <NavBar />

  //     <Route exact path="/" render={() => <Main songs={songs}/> } />
  //     <Route exact path="/about" component={About} />
  //     <Route exact path="/signUp" component={signup} />
  //   </div>
  // );


