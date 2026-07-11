import React from "react";
//  CHANGED: 'react-bootstrapp' to 'react-bootstrap'
import { Navbar, Container, Nav } from "react-bootstrap";
//  CHANGED: 'react-router-bootstrapp' to 'react-router-bootstrap'
import { LinkContainer } from "react-router-bootstrap";

function Header() {
  return (
    <>
      <Navbar bg="light" variant="light" collapseOnSelect>
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand>Ecommerce Layout</Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <LinkContainer to="/">
                <Nav.Link>Home</Nav.Link>
              </LinkContainer>

              <LinkContainer to="/signup">
                <Nav.Link>Signup</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/login">
                <Nav.Link>Login</Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;

