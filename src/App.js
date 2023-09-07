import React from 'react';
import SignIn from './components/signin/signin';
import SignUp from './components/signup/signup';
import { BrowserRouter as Router,Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/"
        component={SignIn}/>
        <Route path="/signup"
        component={SignUp}/>
        
      </Switch>
    </Router>
  );
}

export default App;
