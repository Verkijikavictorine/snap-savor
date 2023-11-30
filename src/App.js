import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SignIn from './components/signin/signIn';
import SignUp from './components/signup/signUp';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/home/Home';
import Dashboard from './components/dashboard/Dashboard';
import CardContainer from './components/cards/CardContainer';

function App() {
  const [post, setPost] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/photos');
        setPost(response.data);
        //console.log(response.data)
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/signin" component={SignIn} />
        <Route path="/signup" component={SignUp} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/order">
          <CardContainer posts={post} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;