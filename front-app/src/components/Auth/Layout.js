import React from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';
import { Link, BrowserRouter as  Router, Route, Switch } from 'react-router-dom';
import Login from './Login';
import Signup from './Signup';
const { Header, Content, Footer } = Layout;

class CustomLayout extends React.Component {
    render() {
        return (
                    <div>
                        
                <Router>
                        <h2>Test</h2>
                        <ul>
                            <li> <Link to='/login'>login</Link> </li>
                        </ul>
                        <ul>
                            <li> <Link to='signup'>signup </Link> </li>
                        </ul>
                        

    
    <Switch>
        <Route path="/login"> <Login /> </Route>  
        <Route path="/signup"> <Signup /> </Route>    
    </Switch>
                    </Router>
                    </div>
        );
    }
}
export default CustomLayout;