import React from 'react';
import "bootstrap/dist/css/bootstrap.css";
import "../index.css";

const SignupForm = () => {
    return ( 
   
 <React.Fragment>
  <div class="container">
<h1>Signup</h1>
    <form>
      <div class="mb-3">
        <label for="username" class="form-label">Username</label>
        <input type="text" class="form-control" id="username" placeholder="Enter your username"/>
      </div>
      <div class="mb-3">
        <label for="email" class="form-label">Email</label>
        <input type="email" class="form-control" id="email" placeholder="Enter your email"/>
      </div>
      <div class="mb-3">
        <label for="password" class="form-label">Password</label>
        <input type="password" class="form-control" id="password" placeholder="Enter your password"/>
      </div>
      <div class="mb-3 form-check">
        <input type="checkbox" class="form-check-input" id="terms"/>
        <label class="form-check-label" for="terms">I am a restaurant owner</label>
      </div>
      <button type="submit" class="btn btn-primary">Sign Up</button>
    </form>
  </div>
 </React.Fragment>

     );
}
 
export default SignupForm;