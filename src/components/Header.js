import React from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import logo from "../images/logo.png";

const Header = () => {
  const activeHeader = window.location.pathname;
  return (
    <>
      <header>
        <Navbar expand="lg" collapseOnSelect>
          <div className="logo" activeKey="/home">
            <img src={logo} alt="ICAN Logo" />
          </div>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav
              activeKey={activeHeader}
              className="justify-content-end ml-auto"
            >
              <Nav.Item>
                <Nav.Link href="/">Home</Nav.Link>
              </Nav.Item>
              <NavDropdown title="About Us" id="nav-dropdown" href="/about">
                <NavDropdown.Item eventKey="4.1" href="/about">
                  About IDSICAN
                </NavDropdown.Item>
                <NavDropdown.Item eventKey="4.2" href="/about">
                  Member's Forum
                </NavDropdown.Item>
                <NavDropdown.Item
                  eventKey="4.2"
                  href="http://icanig.org/new"
                  target="_BLANK"
                >
                  ICAN Website
                </NavDropdown.Item>
                <NavDropdown.Item eventKey="4.4" href="/about">
                  Annual Report and Minute of AGM
                </NavDropdown.Item>
                <NavDropdown.Item eventKey="4.5" href="/about">
                  E-bulletin and newsletter
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
                <NavDropdown.Item eventKey="4.1">
                  Accounting Firms Directory
                </NavDropdown.Item>
                <NavDropdown.Item eventKey="4.2">
                  Accounting Firms Registration Procedure
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Item>
                <Nav.Link href="/contact">Contact Us</Nav.Link>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </header>
    </>
  );
};

export default Header;
