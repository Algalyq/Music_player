
import React, { Component } from 'react';
import { BrowserRouter as Router, Switch,Link, Route } from "react-router-dom";
import CustomLayout from './components/Auth/Layout';
import BaseRouter from './routes';
class App extends Component {


  render() {
    return (
      <div className='test'>
        <Router>
          <CustomLayout {...this.props}>
              <BaseRouter />
          </CustomLayout>
        </Router>
      </div>
    );
  }
}
export default App;

// import React, { Component, useEffect, useState } from 'react';
// import Nav from './nav/Nav';
// import LoginForm from './components/LoginForm';
// import SignupForm from './components/SignupForm';
// import './App.css';




// class App extends Component {
//   constructor(props) {

//     super(props);
//     this.state = {
//       displayed_form: '',
//       logged_in: localStorage.getItem('token') ? true : false,
//       username: ''
//     };
//   }



//   handle_login = (e, data) => {
//     e.preventDefault();
//     fetch('http://localhost:8000/token-auth/', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify(data)
//     })
//       .then(res => res.json())
//       .then(json => {
//         localStorage.setItem('token', json.token);

//         this.setState({
//           logged_in: true,
//           displayed_form: '',
//           username: json.username
//         });
//       });
//   };

//   handle_signup = (e, data) => {
//     e.preventDefault();
//     fetch('http://localhost:8000/users/', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify(data)
//     })
//       .then(res => res.json())
//       .then(json => {
//         localStorage.setItem('token', json.token);
//         this.setState({
//           logged_in: true,
//           displayed_form: '',
//           username: json.username
//         });
//       });
//   };

//   handle_logout = () => {
//     localStorage.removeItem('token');
//     this.setState({ logged_in: false, username: '' });
//   };

//   display_form = form => {
//     this.setState({
//       displayed_form: form
//     });
//   };

//   render() {
//     let form;
//     switch (this.state.displayed_form) {
//       case 'login':
//         form = <LoginForm handle_login={this.handle_login} />;
//         break;
//       case 'signup':
//         form = <SignupForm handle_signup={this.handle_signup} />;
//         break;
//       default:
//         form = null;
//     }

//     return (
//       <div className="App">
//         <Nav
//           logged_in={this.state.logged_in}
//           display_form={this.display_form}
//           handle_logout={this.handle_logout}
//         />
//         {form}
//         <h3>
//           {this.state.logged_in
//             ? `Hello, ${this.username}`
//             : 'Please Log In'}
//         </h3>
//       </div>
//     );
//   }
// }

// export default App;