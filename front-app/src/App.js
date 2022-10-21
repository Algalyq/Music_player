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

class App extends Component{


  constructor(props) {
    super(props);
    this.state = {
      displayed_form: '',
      logged_in: localStorage.getItem('token') ? true : false,
      username: ''
    };
  }

  componentDidMount() {
    if (this.state.logged_in) {
      fetch('http://localhost:8000/api/user', {
        headers: {
          Authorization: `JWT ${localStorage.getItem('token')}`
        }
      })
        .then(res => res.json())
        .then(json => {
          this.setState({ username: json.username });
        });
    }
  }

  handle_login = (e, data) => {
    e.preventDefault();
    fetch('http://localhost:8000/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(json => {
        localStorage.setItem('token', json.token);
        this.setState({
          logged_in: true,
          displayed_form: '',
          username: json.user.username
        });
      });
  };

  handle_signup = (e, data) => {
    e.preventDefault();
    fetch('http://localhost:8000/api/auth/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(json => {
        localStorage.setItem('token', json.token);
        this.setState({
          logged_in: true,
          displayed_form: '',
          username: json.username
        });
      });
  };

  handle_logout = () => {
    localStorage.removeItem('token');
    this.setState({ logged_in: false, username: '' });
  };

  display_form = form => {
    this.setState({
      displayed_form: form
    });
  };

  render() {

    return (
      <div className="App">
        <NavBar/>
        <Nav
          logged_in={this.state.logged_in}
          display_form={this.display_form}
          handle_logout={this.handle_logout}
        />
       
        <Route exact path="/login" render={() => <LogIn handle_login={this.handle_login}/> } />
        <Route exact path="/si" render={() => <LogIn handle_login={this.handle_login}/> } />
      
      </div>
    );
  }
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


