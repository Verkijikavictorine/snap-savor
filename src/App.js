import React from 'react';
import SignIn from './components/signin/SignIn';
import SignUp from './components/signup/SignUp';
import { BrowserRouter as Router,Switch, Route } from 'react-router-dom';
import Dashboard from './components/dashboard/Dashboard';

function App() {
  return (
    <Router>

      <Switch>
        <Route  exact path="/"
        component={Dashboard}/>
        <Route path="/signin"
        component={SignIn}/>
        <Route path="/signup"
        component={SignUp}/>
        
      </Switch>
    </Router>
  );
}

export default App;
