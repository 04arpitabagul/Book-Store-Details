  import React from 'react';
  import { NavLink } from 'react-router-dom';
  import Container from 'react-bootstrap/Container';
  import Nav from 'react-bootstrap/Nav';
  import Navbar from 'react-bootstrap/Navbar';

  function Navbars() {
    return (
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          {/* Navbar Brand with Logo */}
          <Navbar.Brand as={NavLink} to="/">
            <img
              src="https://www.adobe.com/creativecloud/design/discover/media_17770be5de64c9b159b23a7da870ae0bd5bc0f400.jpeg?width=1200&format=pjpg&optimize=medium"
              alt="Logo"
              width="40"
              height="40"
              className="d-inline-block align-top"
            />
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            {/* NavLinks with Flex Styling */}
            <Nav className="m-auto d-flex justify-content-between w-50">
              <NavLink to="/" className="nav-link">Home</NavLink>
              <NavLink to="/Productpage" className="nav-link">Product</NavLink>
              <NavLink to="/AddProductpage" className="nav-link">AddProductpage</NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }

  export default Navbars;
