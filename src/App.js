import React from 'react';
import SignIn from './components/signin/SignIn'
import SignUp from './components/signup/SignUp';
import { BrowserRouter as Router,Switch, Route } from 'react-router-dom';
import Home from './components/home/Home';
import Dashboard from './components/dashboard/Dashboard';

function App() {
  return (
    <Router>

      <Switch>
        <Route  exact path="/"
        component={Home}/>
        <Route path="/signin"
        component={SignIn}/>
        <Route path="/signup"
        component={SignUp}/>
        <Route path="/dashboard"
        component={Dashboard}/>
        
      </Switch>
    </Router>
  );
}

export default App;
