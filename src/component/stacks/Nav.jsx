import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import LOGO from '../img/Logo.png';
import { AiFillHome } from 'react-icons/ai';
import { HiOutlineLogout } from 'react-icons/hi';
import { NavLink } from 'react-router-dom';

function NavScroll() {
  return (
    <Navbar bg="light" expand="lg" className="px-7">
      <Container fluid>
        <Navbar.Brand href="#">
          <img src={LOGO} alt='logo' className='w-20'/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="ml-auto px-8 my-2 my-lg-0"
            navbarScroll
          >
            <NavDropdown title="" id="navbarScrollingDropdown" className='mr-2'>
              <NavDropdown.Item>
               <NavLink to='/' className="flex gap-3">
                <AiFillHome className='mt-1'/>
                  Home
               </NavLink>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <NavLink to="/login" className="flex gap-3">
                  <HiOutlineLogout className='mt-1' />
                    Logout
                </NavLink>
              </NavDropdown.Item>
            </NavDropdown>
            <div>
                <div class="flex items-center justify-center w-12 h-12 mx-2 overflow-hidden rounded-full">
                  <img src="https://images.unsplash.com/photo-1548544149-4835e62ee5b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80" alt='avatar'/>
                  </div>
            </div>
          </Nav>       
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScroll;