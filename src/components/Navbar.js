import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar as BootNavbar, Nav } from 'react-bootstrap';

const Navbar = () => {
  return (
    <BootNavbar bg="dark" variant="dark" expand="lg">
      <BootNavbar.Brand as={Link} to="/">Todo App</BootNavbar.Brand>
      <Nav className="me-auto">
        <Nav.Link as={Link} to="/">Home</Nav.Link>
        <Nav.Link as={Link} to="/todos">Todos</Nav.Link>
        <Nav.Link as={Link} to="/about">About</Nav.Link>
      </Nav>
    </BootNavbar>
  );
};
export default Navbar;