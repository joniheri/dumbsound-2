import React, { useState } from "react";

// import compoents botstrap
import { Container, Navbar, Nav, Button, Image } from "react-bootstrap";
import { Link } from "react-router-dom";

// import css
import "../css/NavbarPublic.css";

// import components
import ModalLogin from "../components/modal/ModalLogin";
import ModalRegister from "../components/modal/ModalRegister";

// import img
import LogoShapes from "../img/LogoShapes.png";
// import Ellipse2 from "../img/Ellipse2.png";
// import Vector1 from "../img/Vector1.png";
// import Vector2 from "../img/Vector2.png";
// import Vector3 from "../img/Vector3.png";
// import Vector4 from "../img/Vector4.png";

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
      style={{ paddingTop: "15px", paddingBottom: "10px" }}
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
              as={Link}
              to="/add-artist"
              style={{
                marginLeft: "10px",
                textAlign: "center",
              }}
            >
              Add Artist
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/add-music"
              style={{
                marginLeft: "10px",
                textAlign: "center",
              }}
            >
              Add Music
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/transaction"
              style={{
                marginLeft: "10px",
                textAlign: "center",
              }}
            >
              Transaction
            </Nav.Link>
          </Nav>
          <Nav>
            {/* <div className="dropdown" style={{ float: "right" }}>
              <Image
                src={Ellipse2}
                onClick={onSwitchRegister}
                style={{
                  width: "40PX",
                  height: "auto",
                  cursor: "pointer",
                  marginTop: "5px",
                  marginLeft: "10px",
                }}
              />
              <div className="dropdown-content">
                <Link
                  to="/transaction"
                  style={{
                    textDecoration: "none",
                    padding: "0",
                    margin: "0",
                  }}
                >
                  <a
                    href="#"
                    style={{
                      borderTopLeftRadius: "3px",
                      borderTopRightRadius: "3px",
                      fontSize: "15px",
                      fontWeight: "bold",
                    }}
                  >
                    <Image
                      src={Vector1}
                      style={{
                        marginRight: "20px",
                        height: "20px",
                        width: "auto",
                      }}
                    />
                    Transaction
                  </a>
                </Link>
                <Link
                  to="/add-music"
                  style={{
                    textDecoration: "none",
                    padding: "0",
                    margin: "0",
                  }}
                >
                  <a
                    href="#"
                    style={{
                      borderTopLeftRadius: "3px",
                      borderTopRightRadius: "3px",
                      fontSize: "15px",
                      fontWeight: "bold",
                    }}
                  >
                    <Image
                      src={Vector4}
                      style={{
                        marginRight: "22px",
                        height: "20px",
                        width: "auto",
                      }}
                    />
                    Add Music
                  </a>
                </Link>
                <Link
                  to="/add-artist"
                  style={{
                    textDecoration: "none",
                    padding: "0",
                    margin: "0",
                  }}
                >
                  <a
                    href="#"
                    style={{
                      fontSize: "15px",
                      fontWeight: "bold",
                    }}
                  >
                    <Image
                      src={Vector2}
                      style={{
                        marginRight: "30px",
                        height: "20px",
                        width: "auto",
                      }}
                    />
                    Add Artis
                  </a>
                </Link>
                <div className="borderBottom-2"></div>
                <a
                  href="#"
                  style={{
                    borderBottomLeftRadius: "3px",
                    borderBottomRightRadius: "3px",
                    fontSize: "15px",
                    fontWeight: "bold",
                  }}
                  // onClick={() => {
                  //   dispatch({
                  //     type: "LOGOUT",
                  //   });
                  // }}
                >
                  <Image
                    src={Vector3}
                    style={{
                      marginRight: "27px",
                      height: "20px",
                      width: "auto",
                    }}
                  />
                  Logout
                </a>
              </div>
            </div> */}
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
