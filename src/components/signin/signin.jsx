import React from 'react';
import { Link } from "react-router-dom";
import "../signin/signin.css";
import logo1  from '../../assets/form_logo.png';


const SignIn = () => {
    return ( 
      
      <div class="signinContainer">
      <div class="signin-form">
        <div class="signin-header">
        <img class="logo" src={logo1} alt="Logo" />
          <h2>Login</h2>
        </div>
        <form>
          <div class="mb-3">
            <label for="username" class="form-label"><b>Username</b></label>
            <input type="text" class="form-control" id="username" placeholder="Enter your username"/>
          </div>
        
          <div class="mb-3">
            <label for="password" class="form-label"><b>Password</b></label>
            <input type="password" class="form-control" id="password" placeholder="Enter your password" required/>
          </div>
          <Link to="/Home">
            <button id="button-Submit" type="submit" class="btn btn-light"><b>Login</b></button>
          </Link>
          <Link to="/signup">
            <button id="signInAccount-button">Create account</button>
          </Link>
        </form>
      </div>
      </div>
    );
};
 
export default SignIn;
