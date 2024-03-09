import React, { useState } from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';

function NavbarComponent() {
  // State to track login status
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Function to toggle login/logout status
  const handleLoginToggle = () => {
    setIsLoggedIn(prevState => !prevState);
  };

  return (
    <Navbar expand="lg" className="bg-primary">
      <Container>
        <Navbar.Brand href="#home" className="me-auto">SENDIT</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home" className="mx-4">Home</Nav.Link>
            <Nav.Link href="#Service" className="mx-4">Service</Nav.Link>
            <Nav.Link href="#Tracking" className="mx-4">Tracking</Nav.Link>
            <Nav.Link href="#Order" className="mx-4">Order</Nav.Link>
            <Nav.Link href="#ContactUs" className="mx-4">Contact Us</Nav.Link>
            {/* Conditional rendering based on login status */}
            <Nav.Link href={isLoggedIn ? "#logout" : "#login"} className="mx-4" onClick={handleLoginToggle}>
              {isLoggedIn ? (
                <>
                  <i className="fa-solid fa-user"></i> Logout
                </>
              ) : (
                <>
                  <i className="fa-solid fa-user"></i> Login
                </>
              )}
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;
