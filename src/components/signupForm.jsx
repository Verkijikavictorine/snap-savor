import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "../index.css";


const SignupForm = () => {
  return (
      <div class="container">
        <div class="signup-container">
          <div class="signup-header">
            <img class="logo" src="/images/logo1.png" alt="Logo" />
          </div>
            <h2>Signup</h2>
          <form>
            <div class="mb-3">
              <label for="username" class="form-label">
                Username
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
                Email
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
                Password
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
            <button type="submit" class="btn btn-light">
              Sign Up
            </button>
            <Link to="/signinForm">
              <button id="account-button">I have an account</button>
            </Link>
          </form>
        </div>
      </div>
    
  );
};

export default SignupForm;
