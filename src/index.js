import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";

import "assets/scss/material-kit-react.scss?v=1.10.0";

// pages for this product
// import Components from "views/Components/Components.js";
import LandingPage from "views/LandingPage/LandingPage.js";
import ProfilePage from "views/ProfilePage/ProfilePage.js";
import LoginPage from "views/LoginPage/LoginPage.js";
import Signup from "views/LoginPage/Signup";

var hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Switch>
      <Route path="/Home" component={LandingPage} />
      <Route path="/dashboard" component={ProfilePage} />
      <Route path="/Login" component={LoginPage} />
      <Route path="/Signup" component={Signup} />
      <Route exact path="/" component={LandingPage} />
      <Route path="*">
        <h2>Error page</h2>
      </Route>
    </Switch>
  </Router>,
  document.getElementById("root")
);
