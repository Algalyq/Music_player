import logo from './logo.svg';
import './App.css';   
import React, { useState, useEffect, Component } from "react";
import About from './pages/About';
import Main from './pages/Main';
import SignUP from './pages/Authentication/SignUP';
import { Route, Link , BrowserRouter,Switch} from "react-router-dom"; 
import NavBar from './navBar/NavBar';
import Nav from './navBar/Nav';
import LogIn from './pages/Authentication/LogIn';



function App () {
 

const [token, setToken] = useState([]);

const userLogin = (tok) => {
  setToken(tok);
}

    return (
      <div>
        <NavBar/>
   {/* <LogIn userLogin={userLogin}/> */}
   <Route exact path ="/" component={About}></Route>
    <Route exact path="/login"  render={() => <LogIn userLogin={userLogin}/> } />
         </div>
    );
  }


export default App;




// function App(){

// const [song,setSongs] = useState([])

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
  
//     return (
//      <div>
//       <NavBar />     
//        <Route exact path="/" render={() => <Main songs={song}/> } />

//       <Route exact path="/login" component={LogIn} />
//      </div>
//     );
  

// }

// export default App;






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


  //   </div>
  // );


