import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

const Navigation = (props) => {
  return (
    <div className="container-fluid">
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="/" className="text-danger fw-normal">
          {props.name}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarSupportedContent"></Navbar.Toggle>
        <Navbar.Collapse id="navbarSupportedContent">
          <Nav className="ms-auto">
            <LinkContainer to="/">
              <Nav.Link>Home</Nav.Link>
            </LinkContainer>

            <Nav.Link>About</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  )
}

export default Navigation
