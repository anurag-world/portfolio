import React from 'react'
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'

const Navigation = (props) => {
  return (
    <div className="container-fluid">
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="/" className="text-danger fw-bold">
          {props.name}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <NavDropdown title="Portfolio" id="navbarDropdown">
              <NavDropdown.Item href="/ui">UI Design</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  )
}

export default Navigation
