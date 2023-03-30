import React from "react";
import logo from '../component/img/S.png';
import { NavLink } from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const NavBar = () => {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="light" variant="dark" className="">
      <Container>
        <Navbar.Brand href="#home">
            <img src={logo} alt="logo" className="h-20" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto text-black gap-5">
            <NavLink to="/">Home</NavLink>
            <NavLink toh="about">About</NavLink>
            <NavLink to="stacks">Stacks</NavLink>
            <NavLink to="contact">Contact</NavLink>
          </Nav>
          <Nav>
            <NavLink to="#deets">
                <button className="py-2 px-3 rounded-4 border-2 mr-5 ml-5">Sign Up</button>
            </NavLink>
            <NavLink to="#memes">
            <button className="py-2 px-3 rounded-4 border-2">Login</button>
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  );
};

export default NavBar;
