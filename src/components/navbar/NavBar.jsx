import Container from 'react-bootstrap/Container';
import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { FaUserLarge } from "react-icons/fa6";
import { BsCart3 } from "react-icons/bs";
import logo from "../../assets/dashboard_logo.png"
import './navbar.css'


function NavBar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <img src={logo} width="100" height="80"
        className="d-inline-block align-top" alt="" />
        <Navbar.Brand href="#home">SnapSavor</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="/order">Order</Nav.Link>
            <Nav.Link href="/order">Blog</Nav.Link>
            <Nav.Link href="/order">About Us</Nav.Link>
            <div id='cart-icon'><BsCart3/></div>
            <div id='profile-icon'><FaUserLarge /></div>
            <NavDropdown title="Profile" id="basic-nav-dropdown">
              <NavDropdown.Item href="/editProfile">
                Change Profile
              </NavDropdown.Item>
              <NavDropdown.Item href="/orderHistory">
                Order history
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/logout">
                logout
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
export default NavBar;
