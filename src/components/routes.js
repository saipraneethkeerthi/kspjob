import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "./Login"
import Signup from "./Signup"
import Homepage from "./HomePage"

export default (
  <BrowserRouter>
  
    <Route path="/" exact component={Login} />
     <Route path="/register" exact component={Signup} />
    <Route path="/page" exact component={Homepage} /> 
  
    

  </BrowserRouter>
);
