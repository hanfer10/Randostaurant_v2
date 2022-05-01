import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import Container from 'react-bootstrap/Container';

const NavigationBar = () => {
  return (
    <Navbar className="nav" sticky="top">
      <Nav className="me-auto">
        <Nav.Link href="/">Home</Nav.Link>
      </Nav>
    </Navbar>
  )
};

export default NavigationBar;
