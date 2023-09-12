import React from 'react';
import { NavLink } from 'react-router-dom';
import {FaUserLarge} from 'react-icons/fa6'
import logo from '../../assets/logo .png';
import "../navbar/navbar.css"

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">

        <NavLink class="navbar-brand" to="/">
          <img src={logo} width="150" height="90" class="d-inline-block align-top" alt=""/>
          SnapSavor
        </NavLink>
  

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