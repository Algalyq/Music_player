import React from 'react';
import PropTypes from 'prop-types';
import App from '../../App.css';
import Nav from '../../navBar/Nav';
class LogIn extends React.Component {
  state = {
    username: '',
    password: ''
  };
  

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
      fetch('http://localhost:8000/api/user ', {
        method:'GET',
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
        console.log(json.user.username)
      });
  };

  handle_change = e => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState(prevstate => {
      const newState = { ...prevstate };
      newState[name] = value;
      return newState;
    });
  };

  render() {
    if (this.state.logged_in){
        return (

            <div className='testlog'> 
                <Nav 
                handle_logout={this.handle_logout}
                
          display_form={this.display_form}
                />
                <h2>Logged</h2>
            </div>
        );
  }
  else{
    return (  
        <div>
            
            <h1>dsf</h1>
          <form onSubmit={e => this.handle_login(e, this.state)}>
            <h4>Log In</h4>
            <label htmlFor="username">Username</label>
            <input
              type="text"
              name="username"
              value={this.state.username}
              onChange={this.handle_change}
            />
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              value={this.state.password}
              onChange={this.handle_change}
            />
            <input type="submit" />
          </form>
          <h3>
              {this.state.logged_in
                ? `Hello, ${this.state.username}`
                : 'Please Log In'}
            </h3>
          </div>
        );
              }

    }
}

export default LogIn;

LogIn.propTypes = {
  handle_login: PropTypes.func.isRequired
};