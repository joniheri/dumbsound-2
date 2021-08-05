import React, { useState } from "react";

// import object botstrap
import { Container, Navbar, Nav, Button, Image } from "react-bootstrap";
import { Link } from "react-router-dom";

// import components
import ModalLogin from "../components/modal/ModalLogin";
import ModalRegister from "../components/modal/ModalRegister";

// import img
import LogoShapes from "../img/LogoShapes.png";

export default function NavbarPublic({ stateLogin, setStateLogin }) {
  const [loginShow, setLoginShow] = useState(false);
  const [registerShow, setRegisterShow] = useState(false);

  const onSwitchLogin = () => {
    setRegisterShow(false);
    setLoginShow(true);
  };
  const onSwitchRegister = () => {
    setRegisterShow(true);
    setLoginShow(false);
  };

  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      variant="dark"
      fixed="top"
      className="shadow Container"
      style={{ paddingTop: "25px", paddingBottom: "10px" }}
    >
      <Container fluid>
        <Navbar.Brand as={Link} to="/">
          <Image
            src={LogoShapes}
            style={{ marginRight: "10px", height: "25px", width: "auto" }}
          />
          <span style={{ color: "#EE4622" }}>DUMB</span>
          <span>SOUND</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link
              href="#link"
              style={{
                marginLeft: "10px",
                textAlign: "center",
              }}
            >
              About
            </Nav.Link>
          </Nav>
          <Nav>
            <Link
              to=""
              style={{
                marginLeft: "15px",
                textDecoration: "none",
              }}
            >
              <Button
                onClick={onSwitchLogin}
                variant=""
                size="sm"
                block
                style={{
                  background: "",
                  textAlign: "center",
                  color: "#fff",
                  paddingLeft: "37px",
                  paddingRight: "37px",
                  border: "1px solid #FFFFFF",
                  borderRadius: "5px",
                }}
              >
                Login
              </Button>
            </Link>
            <Link
              to=""
              style={{
                marginLeft: "15px",
                textDecoration: "none",
              }}
            >
              <Button
                onClick={onSwitchRegister}
                variant=""
                size="sm"
                block
                style={{
                  background: "#EE4622",
                  textAlign: "center",
                  color: "#fff",
                  paddingLeft: "25px",
                  paddingRight: "25px",
                  border: "1px solid #EE4622",
                  borderRadius: "5px",
                }}
              >
                Register
              </Button>
            </Link>
          </Nav>

          {/* ModalLogin */}
          <ModalLogin
            loginShow={loginShow}
            setLoginShow={setLoginShow}
            setRegisterShow={setRegisterShow}
            stateLogin={stateLogin}
            setStateLogin={setStateLogin}
          />
          {/* EndModalLogin */}

          {/* ModalRegister */}
          <ModalRegister
            registerShow={registerShow}
            setRegisterShow={setRegisterShow}
            setLoginShow={setLoginShow}
          />
          {/* EndModalRegister */}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
