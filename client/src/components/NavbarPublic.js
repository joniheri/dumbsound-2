import React from "react";

// import object botstrap
import {
  Container,
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";

export default function NavbarPublic() {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      variant="dark"
      fixed="top"
      className="shadow"
    >
      <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link
            href="#home"
            style={{
              background: "green",
              marginLeft: "10px",
              textAlign: "center",
            }}
          >
            Home
          </Nav.Link>
          <Nav.Link
            href="#link"
            style={{
              background: "red",
              marginLeft: "10px",
              textAlign: "center",
            }}
          >
            Link
          </Nav.Link>
        </Nav>
        <Nav>
          <NavDropdown
            title="Dropdown"
            id="basic-nav-dropdown"
            style={{
              background: "green",
              marginLeft: "10px",
              textAlign: "center",
            }}
          >
            <NavDropdown.Item
              href="#action/3.1"
              style={{
                textAlign: "center",
              }}
            >
              Action
            </NavDropdown.Item>
            <NavDropdown.Item
              href="#action/3.2"
              style={{
                textAlign: "center",
              }}
            >
              Another action
            </NavDropdown.Item>
            <NavDropdown.Item
              href="#action/3.3"
              style={{
                textAlign: "center",
              }}
            >
              Something
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item
              href="#action/3.4"
              style={{
                textAlign: "center",
              }}
            >
              Separated link
            </NavDropdown.Item>
          </NavDropdown>
          <Nav.Link
            href="#about"
            style={{
              background: "red",
              marginLeft: "10px",
              textAlign: "center",
              paddingLeft: "30px",
              paddingRight: "30px",
            }}
          >
            Login
          </Nav.Link>
          <Nav.Link
            href="#about"
            style={{
              background: "green",
              marginLeft: "10px",
              textAlign: "center",
            }}
          >
            Register
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
