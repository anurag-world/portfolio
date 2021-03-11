import React from 'react'
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'

const Navigation = (props) => {
  return (
    <div className="container-fluid">
      <Navbar bg="light" expand="lg">
        <Navbar.Brand
          href={process.env.PUBLIC_URL}
          className="text-danger fw-bold"
        >
          {props.name}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href={process.env.PUBLIC_URL}>Home</Nav.Link>
            <NavDropdown title="Portfolio" id="navbarDropdown">
              <NavDropdown.Item href={process.env.PUBLIC_URL + '/#/ui'}>
                UI Designs
              </NavDropdown.Item>
              <NavDropdown.Item
                href="https://www.behance.net/gallery/105122955/Visual-Design-Websites-Landing-Pages"
                target="_blank"
                rel="noreferrer"
              >
                Visual Designs
              </NavDropdown.Item>
              <NavDropdown.Item
                href="https://www.behance.net/gallery/104293907/Social-Media-Instagram-Post-Story-Designs"
                target="_blank"
                rel="noreferrer"
              >
                Social Media Post & Story Designs
              </NavDropdown.Item>
              <NavDropdown.Item
                href="https://www.behance.net/gallery/104298787/Background-Vector-Templates"
                target="_blank"
                rel="noreferrer"
              >
                Background Vector Templates
              </NavDropdown.Item>
              <NavDropdown.Item
                href="https://www.behance.net/gallery/104319623/Illustrations-Merchandise-Digital-Vector-Art"
                target="_blank"
                rel="noreferrer"
              >
                Vector Illustrations
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link
              href="https://anuragworld.com"
              target="_blank"
              rel="noreferrer"
              title="View React source code for this website"
            >
              Blog
            </Nav.Link>
            <Nav.Link
              href="https://github.com/anurag-world/portfolio"
              target="_blank"
              rel="noreferrer"
              title="View React source code for this website"
            >
              View React Source Code
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  )
}

export default Navigation
