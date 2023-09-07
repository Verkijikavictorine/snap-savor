import React from 'react';
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css"
import "../Styles/signin-signup.css";
import logo1 from '../images/logo1.png'

const Signin = () => {
    return ( 
   
 
  <div class="container">
    <div class="signin-container">
      <div class="signin-header">
      <img class="logo" src={logo1} alt="Logo" />

        <h2>Login</h2>
      </div>
      <form>
        <div class="mb-3">
          <label for="username" class="form-label">Username</label>
          <input type="text" class="form-control" id="username" placeholder="Enter your username"/>
        </div>
      
        <div class="mb-3">
          <label for="password" class="form-label">Password</label>
          <input type="password" class="form-control" id="password" placeholder="Enter your password" required/>
        </div>
      
        <button type="submit" class="btn btn-light">Login</button>
        <Link to="/signup">
              <button id="account-button">Create account</button>
            </Link>
      </form>
    </div>
  </div>
 

     );
}
 
export default Signin;