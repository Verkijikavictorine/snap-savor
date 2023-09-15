import React from "react";
import { Link } from "react-router-dom";
import "../signup/signup.css";
import logo1  from '../../assets/form_logo.png';




const SignUp = () => {
  return (
     
        <div class="signUpContainer">
        <div class="signup-form">
          <div class="signup-header">
            <img class="logo" src={logo1} alt="Logo" />
          </div>
            <h2>SignUp</h2>
          <form>
            <div class="mb-3">
              <label for="username" class="form-label">
                <b>Username</b>
              </label>
              <input
                type="text"
                class="form-control"
                id="username"
                placeholder="Enter your username"
              />
            </div>
            <div class="mb-3">
              <label for="email" class="form-label">
                <b>Email</b>
              </label>
              <input
                type="email"
                class="form-control"
                id="email"
                placeholder="Enter your email"
                required
              />
            </div>
            <div class="mb-3">
              <label for="password" class="form-label">
                <b>Password</b>
              </label>
              <input
                type="password"
                class="form-control"
                id="password"
                placeholder="Enter your password"
                required
              />
            </div>
            <div class="mb-3 form-check">
              <input type="checkbox" class="form-check-input" id="terms" />
              <label class="form-check-label" for="terms">
                I am a restaurant owner
              </label>
            </div>
            <Link to="/Home">
            <button  id="button-Submit" type="submit" class="btn btn-light">
              <b>Sign Up</b></button>
            </Link>
            <Link to="/signin">
              <button id="signUpAccount-button">I have an account</button>
            </Link>
          </form>
        </div>
      </div>
    
  );
};

export default SignUp;


