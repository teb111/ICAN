import React from "react";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import logo from "../images/logo.png";

const Header = () => {
  const activeHeader = window.location.pathname;
  return (
    <>
      <header>
        <Navbar bg="light" variant="light" expand="lg" collapseOnSelect>
          <Container>
            <Nav className="justify-content-start" activeKey="/home">
              <Nav.Item>
                <img
                  src={logo}
                  width={100}
                  height={50}
                  alt="Logo"
                  className="logo-img"
                />
              </Nav.Item>
            </Nav>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav
                className="justify-content-end ml-auto"
                activeKey={activeHeader}
              >
                <Nav.Item>
                  <Nav.Link href="/">Home</Nav.Link>
                </Nav.Item>
                <NavDropdown title="AboutUs" id="nav-dropdown">
                  <NavDropdown.Item eventKey="4.1">About Us</NavDropdown.Item>
                  <NavDropdown.Item eventKey="4.2">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Item eventKey="4.3">
                    Something else here
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item eventKey="4.4">
                    Separated link
                  </NavDropdown.Item>
                </NavDropdown>
                <Nav.Item>
                  <Nav.Link href="/past-chairmen">Past Chairmen</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="link-2">Gallery</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link href="/executives">Executives</Nav.Link>
                </Nav.Item>
                <NavDropdown title="Firms" id="nav-dropdown">
                  <NavDropdown.Item eventKey="4.1">Action</NavDropdown.Item>
                  <NavDropdown.Item eventKey="4.2">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Item eventKey="4.3">
                    Something else here
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item eventKey="4.4">
                    Separated link
                  </NavDropdown.Item>
                </NavDropdown>
                <Nav.Item>
                  <Nav.Link href="/contact">Contact Us</Nav.Link>
                </Nav.Item>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
    </>
  );
};

export default Header;
