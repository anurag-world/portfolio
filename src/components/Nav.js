import React from 'react'
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'

const Navigation = (props) => {
  return (
    <div className="container-fluid">
      <Navbar bg="light" expand="lg">
        <Nav.Link href={process.env.PUBLIC_URL + '/#/'}>
          <Navbar.Brand className="text-danger fw-bold">
            {props.name}
          </Navbar.Brand>
        </Nav.Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link
              href="https://codepen.io/anurag-world"
              target="_blank"
              rel="noreferrer"
              title="View Developer Portfolio on CodePen"
            >
              Developer Portfolio
            </Nav.Link>
            <Nav.Link
              href={process.env.PUBLIC_URL + '/#/ui'}
              rel="noreferrer"
              title="View Design Portfolio"
            >
              Design Portfolio
            </Nav.Link>
            <NavDropdown title="Other Portfolios" id="navbarDropdown">
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
              title="Read my Blog"
            >
              Blog
            </Nav.Link>
            <Nav.Link
              href="https://github.com/anurag-world/"
              target="_blank"
              rel="noreferrer"
              title="View Portfolio on GitHub"
            >
              GitHub
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  )
}

export default Navigation
