import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <Navbar expand="lg" className="bg-primary">
      <Container>
        <Navbar.Brand as={Link} to="/" className="me-auto">SENDIT</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/" className="mx-4">Home</Nav.Link>
           
            <Nav.Link as={Link} to="/contact" className="mx-4">Contact</Nav.Link> {/* Add Contact link */}
            <Nav.Link as={Link} to="/parcel"  className="mx-4" >Parcel</Nav.Link>
            <Nav.Link as={Link} to="/Login"  className="mx-4" >Login</Nav.Link>
          
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
