import React, {useState} from "react";
import { Link } from 'react-router-dom'
import LogIn from "../pages/Authentication/LogIn";
function NavBar (){
    const [token, setToken] = useState([]);

const userLogin = (tok) => {
  setToken(tok);
}

    return (
        <ul>
            <li><Link to="/">Main</Link></li>
            <li><Link to="/main">Main</Link></li>
            {/* <li><Link to="/about">About</Link></li>
            <li><Link to="/signUp">Sign Up</Link></li> */}
            <li><Link to="/login" render={() => <LogIn userLogin ={userLogin} />}>Login</Link></li>
        </ul>
    )
}

export default NavBar;