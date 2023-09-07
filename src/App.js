import React from 'react';
import SigninForm from './components/signinForm';
import SignupForm from './components/signupForm';
import { BrowserRouter as Router,Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/"
        component={SignupForm}/>
        <Route path="/signinForm"
        component={SigninForm}/>
        
      </Switch>
    </Router>
  );
}

export default App;
