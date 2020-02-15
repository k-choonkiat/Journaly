import React from 'react';
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import Home from './components/home.js';
import User from './components/user.js';
import Counselor from './components/counselor.js';
import Journal from './components/journal.js';
import counselorView from './components/counselor_view';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/user" component={User} />
        <Route exact path="/counselor" component={Counselor} />
        <Route exact path="/journal" component={Journal} />
        <Route exact path="/counselor_view" component={counselorView} />
      </Switch>
    </Router>
  );
}

export default App;