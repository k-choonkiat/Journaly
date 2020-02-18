import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";

import "assets/scss/material-kit-react.scss?v=1.8.0";
import 'bootstrap/dist/css/bootstrap.min.css';

// pages for this product
import Components from "views/Components/Components.js";
import LandingPage from "views/LandingPage/LandingPage.js";
import ProfilePage from "views/ProfilePage/ProfilePage.js";
import LoginPage from "views/LoginPage/LoginPage.js";
import CounselorView from "views/Components/counselor-view";
import Journal from "views/Components/journal";
import Write from "views/Components/write.js";

var hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Switch>
      <Route path="/profile-page" component={ProfilePage} />
      <Route exact path="/" component={LoginPage} />
      <Route path="/home" component={Components} />
      <Route path="/counselor-view" component={CounselorView} />
      <Route path="/journal-log" component={Journal} />
      <Route path="/write" component= {Write} />
    </Switch>
  </Router>,
  document.getElementById("root")
);
