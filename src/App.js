import React from 'react';
import Signin from './components/signin';
import Signup from './components/signup';
import { BrowserRouter as Router,Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/"
        component={Signin}/>
        <Route path="/signup"
        component={Signup}/>
        
      </Switch>
    </Router>
  );
}

export default App;
