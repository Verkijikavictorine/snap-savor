import React from "react";
import { Link } from "react-router-dom";
import Joi from 'joi';
import "../signin/signin.css";
import form_logo from '../../assets/form_logo.png';

const schema = Joi.object({
  username: Joi.string().required(),
  password: Joi.string().required(),
});

const SignIn = () => {
  const [formData, setFormData] = React.useState({
    username: '',
    password: '',
  });
  const [errors, setErrors] = React.useState({});

  const handleSubmit = (e) => {
    e.preventDefault();

    const validation = schema.validate(formData, { abortEarly: false });
    if (validation.error) {
      const errors = {};
      validation.error.details.forEach((error) => {
        errors[error.path[0]] = error.message;
      });
      setErrors(errors);
    } else {
      // Validation passed, perform form submission logic here
      // For example, redirect to the dashboard
      // history.push('/dashboard');
    }
  };

  return (
    <div class="container signin-container">
      <div class="row justify-content-center">
        <div class="col-lg-6">
          <form className="signup-form">
            <div class="text-center">
              <img src={form_logo} alt="Image" class="img-fluid logo" />
            </div>
            <h2 class="text-center mb-4">SignIn</h2>
            <div class="form-group">
              <label for="email">Username</label>
              <input
                type="email"
                class="form-control"
                id="username"
                placeholder="Enter your Username"
                value={formData.username}
                onChange={(e) =>
                  setFormData({ ...formData, username: e.target.value })
                }
              />
              {errors.username && (
                <div className="error-message">{errors.username}</div>
              )}
            </div>
            <div class="form-group">
              <label for="password">Password</label>
              <input
                type="password"
                class="form-control"
                id="password"
                placeholder="Enter your password"
                value={formData.password}
                onChange={(e) =>
                  setFormData({ ...formData, password: e.target.value })
                }
              />
              {errors.password && (
                <div className="error-message">{errors.password}</div>
              )}
            </div>
            <Link to="">
              <button type="submit" class="btn btn-primary " onClick={handleSubmit}>
                Login
              </button>
            </Link>
            <Link to="/signup">
              <button type="submit" class="btn btn-primary signInAccount-button">
                Create Account
              </button>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;