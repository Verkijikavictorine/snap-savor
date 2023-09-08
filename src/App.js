import React from 'react';
import SignIn from './components/signin/SignIn';
import SignUp from './components/signup/SignUp';
import { BrowserRouter as Router,Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/"
        component={SignIn}/>
        <Route path="/SignUp"
        component={SignUp}/>
        
      </Switch>
    </Router>
  );
}

export default App;
