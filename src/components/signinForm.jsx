import React from 'react';
import "bootstrap/dist/css/bootstrap.css"

const SigninForm = () => {
    return ( 
   
 <React.Fragment>
  <div class="container">
<h1>Login Form</h1>
    <form>
      <div class="mb-3">
        <label for="username" class="form-label">Username</label>
        <input type="text" class="form-control" id="username" placeholder="Enter your username"/>
      </div>
      <div class="mb-3">
        <label for="password" class="form-label">Password</label>
        <input type="password" class="form-control" id="password" placeholder="Enter your password"/>
      </div>
      <button type="submit" class="btn btn-primary">Login</button>
    </form>
  </div>
 </React.Fragment>

     );
}
 
export default SigninForm;