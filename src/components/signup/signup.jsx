import React from "react";
import { Link } from "react-router-dom";
import "../signup/signup.css";
 import logo1  from '../../assets/form_logo.png';



const SignUp = () => {
  return ( <div className="container signup-container">
      <div className="row justify-content-center">
        <div className="col-lg-6">
          <form className="signup-form">
            <div className="text-center">
              <img src={logo1} alt="Image" className="img-fluid logo"/>
            </div>
          <h2 className="text-center mb-4">Sign Up</h2>
            <div className="form-group">
              <label for="email">Username</label>
              <input type="email" className="form-control" id="username" placeholder="Enter your Username"/>
            </div>
            <div className="form-group">
              <label for="email">Email</label>
              <input type="email" className="form-control" id="email" placeholder="Enter your email"/>
            </div>
            <div className="form-group">
              <label for="password">Password</label>
              <input type="password" class="form-control" id="password" placeholder="Enter your password"/>
            </div>
            <Link to='/home'>
            <button type="submit" className="btn btn-primary signup-button ">Sign Up</button>
            </Link>
            <Link to='/signin'>
            <button type="submit" className="btn btn-primary signUpAccount-button ">I have an account</button>
            </Link>
          </form>
        </div>
      </div>
    </div>
   );
}
 
export default SignUp;






