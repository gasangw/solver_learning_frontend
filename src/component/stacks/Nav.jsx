import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import LOGO from '../img/Logo.png'

function NavScroll() {
  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">
          <img src={LOGO} alt='logo' className='w-20'/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            navbarScroll
          >
              <div class="relative ml-auto">
                <div class="flex items-center justify-center w-12 h-12 mx-2 overflow-hidden rounded-full">
                  <img src="https://images.unsplash.com/photo-1548544149-4835e62ee5b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80" />
                  </div>
                </div>
            <NavDropdown title="" id="navbarScrollingDropdown" className='ml-auto'>
              <NavDropdown.Item href="#action3">Home</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                  Logout
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>       
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScroll;