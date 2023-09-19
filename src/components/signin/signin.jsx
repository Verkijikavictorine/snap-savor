import React from "react";
import { Link } from "react-router-dom";
import "../signin/signin.css";
 import logo1  from '../../assets/form_logo.png';



const SignIn = () => {
  return(
    <div class="container signin-container">
      <div class="row justify-content-center">
        <div class="col-lg-6">
          <form className="signup-form">
            <div class="text-center">
              <img src={logo1} alt="Image" class="img-fluid logo"/>
            </div>
          <h2 class="text-center mb-4">SignIn</h2>
            <div class="form-group">
              <label for="email">Username</label>
              <input type="email" class="form-control" id="username" placeholder="Enter your Username"/>
            </div>
            <div class="form-group">
              <label for="password">Password</label>
              <input type="password" class="form-control" id="password" placeholder="Enter your password"/>
            </div>
            <Link to='/home' >
            <button type="submit" class="btn btn-primary ">Login</button>
            </Link>
            <Link to='/signup'>
            <button type="submit" class="btn btn-primary signInAccount-button">Create Account</button>
            </Link>
          </form>
        </div>
      </div>
      </div>
      
  )
}
    
export default SignIn;


