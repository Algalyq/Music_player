import logo from './logo.svg';
import './App.css';   
import React, { useState, useEffect } from "react";
import About from './pages/About';
import Main from './pages/Main';
import { Route, Link } from "react-router-dom"; 
import NavBar from './navBar/NavBar';

function App() {
  const [songs,setSongs] = useState([])

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

  console.log(songs)
  return (
    <div className="App"><link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"/>
      <NavBar />

      <Route exact path="/" render={() => <Main songs={songs}/> } />
      <Route exact path="/about" component={About} />
    </div>
  );
}

export default App;
