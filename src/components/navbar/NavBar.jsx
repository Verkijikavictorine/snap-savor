import React from 'react';
import { NavLink } from 'react-router-dom';
import {FaUserLarge} from 'react-icons/fa6'
import logo from '../../assets/dashboard_logo.png';
import "./navbar.css"

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <NavLink class="navbar-brand" to="/">
          <img src={logo} width="150" height="90" class="d-inline-block align-top" alt=""/>
          SnapSavor
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className=" collapse navbar-collapse col-1" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink className="nav-link" to="/SignIn">
                Login
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/">
                <FaUserLarge/>
              </NavLink>
            </li>

          </ul>
        </div>
      </div>
    </nav>
  );
};
export default NavBar;

