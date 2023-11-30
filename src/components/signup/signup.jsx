import React, { useState } from "react";
import { Link } from "react-router-dom";
import Joi from 'joi';
import "../signup/signup.css";
import form_logo from '../../assets/form_logo.png';

const schema = Joi.object({
  username: Joi.string().required(),
  email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: false } }).required(),
  password: Joi.string().required(),
});

const SignUp = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });
  const [errors, setErrors] = useState({});

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
      
    }
  };

  return (
    <div className="container signup-container">
      <div className="row justify-content-center">
        <div className="col-lg-6">
          <form className="signup-form" onSubmit={handleSubmit}>
            <div className="text-center">
              <img src={form_logo} alt="Image" className="img-fluid logo" />
            </div>
            <h2 className="text-center mb-4">Sign Up</h2>
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                className="form-control"
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
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />
              {errors.email && (
                <div className="error-message">{errors.email}</div>
              )}
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                className="form-control"
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
            <Link to="/dashboard">
            <button
              type="submit"
              className="btn btn-primary signup-button"
            >
              Sign Up
            </button>
            </Link>
            <Link to="/signin">
              <button type="button" className="btn btn-primary signUpAccount-button">
                I have an account
              </button>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;