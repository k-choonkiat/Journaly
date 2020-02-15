import React from 'react';
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import Home from './components/home.js';
import User from './components/user.js';
import Counselor from './components/counselor.js';
import './index.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/user" component={User} />
        <Route exact path="/counselor" component={Counselor} />
      </Switch>
    </Router>
  );
}

export default App;
