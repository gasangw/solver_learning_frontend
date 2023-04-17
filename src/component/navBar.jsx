import React from "react";
import logo from '../component/img/Logo.png';
import { NavLink, useNavigate } from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


const NavBar = () => {
  const navigate = useNavigate()
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" variant="dark" className="nav-cont">
      <Container>
        <Navbar.Brand href="#home">
            <img src={logo} alt="logo" className="h-20 ml-6" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className=" mx-auto nav-links-all gap-5 text-lg">
            <NavLink to="/" className="links ml-4">Home</NavLink>
            {/* <NavLink to="about" className="links">Courses</NavLink> */}
            <a href="#stacks" className="move">Stack</a>
            <a href="#about" className="move">About Us</a>
            <a href="#contact" className="move">Contact Us</a>
          </Nav>
          <Nav>
            <NavLink to="/signup">
                <button className="py-2 px-4 text-lg text-white rounded-5 nav-btn-1 mr-5 ml-5">Sign Up</button>
            </NavLink>
            <NavLink to="login">
            <button className="py-2 px-4 text-white text-lg rounded-5 border-2 nav-btn-2">Login</button>
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  );
};

export default NavBar;
