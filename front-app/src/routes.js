import React from "react";
import { Route } from "react-router-dom";

import Login from "./components/Auth/Login";
import Signup from "./components/Auth/Signup";
import NavBar from "./nav/NavBar";
const BaseRouter = () => (

  <div>
    <Route exact path="/login" component={<Login/>}/>
    <Route exact path="/signup" component={<Signup/>} />
  </div>
  
);

export default BaseRouter;