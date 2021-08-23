import React, { useState, useContext } from "react";

// import compoents botstrap
import { Container, Navbar, Nav, Button, Image } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";

// import css
import "../css/NavbarPublic.css";

// import components
import ModalLogin from "./modal/ModalLogin";
import ModalRegister from "./modal/ModalRegister";

// import context
import { AppContext } from "../contexts/GlobalContext";

// import img
import LogoShapes from "../img/LogoShapes.png";
import Ellipse2 from "../img/Ellipse2.png";
import Vector1 from "../img/Vector1.png";
import Vector2 from "../img/Vector2.png";
import Vector3 from "../img/Vector3.png";
import Vector4 from "../img/Vector4.png";

export default function NavbarPublic({ stateLogin, setStateLogin }) {
  const history = useHistory();

  const [state, dispatch] = useContext(AppContext);
  const [loginShow, setLoginShow] = useState(false);
  const [registerShow, setRegisterShow] = useState(false);

  const handleLogout = () => {
    dispatch({
      type: "LOGOUT",
    });
    history.push("/");
  };
  // console.log("DataState: ", state);

  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      variant="dark"
      fixed="top"
      className="shadow Container"
      style={{ paddingTop: "20px", paddingBottom: "10px" }}
    >
      <Container fluid>
        <Navbar.Brand as={Link} to="/beranda-admin">
          <Image
            src={LogoShapes}
            style={{ marginRight: "10px", height: "25px", width: "auto" }}
          />
          <span style={{ color: "#EE4622" }}>DUMB</span>
          <span>SOUND</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto"></Nav>

          <div className="dropdown" style={{ float: "right" }}>
            <Image
              src={Ellipse2}
              style={{
                width: "40PX",
                height: "auto",
                cursor: "pointer",
                marginTop: "5px",
                marginLeft: "10px",
              }}
            />
            <div className="dropdown-content">
              <Nav.Link
                style={{
                  borderTopLeftRadius: "3px",
                  borderTopRightRadius: "3px",
                  paddingTop: "10px",
                  paddingBottom: "18px",
                }}
              >
                <center>
                  <Image
                    src={Ellipse2}
                    style={{
                      width: "60PX",
                      height: "auto",
                      cursor: "pointer",
                      marginTop: "5px",
                      marginBottom: "5px",
                    }}
                  />
                  <div style={{ color: "#ffffff" }}>
                    <span>{state.user.fullname}</span>
                  </div>
                </center>
              </Nav.Link>
              <div className="borderBottom"></div>
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
              <div className="borderBottom"></div>
              <a
                href="#"
                style={{
                  borderBottomLeftRadius: "3px",
                  borderBottomRightRadius: "3px",
                  fontSize: "15px",
                  fontWeight: "bold",
                }}
                onClick={handleLogout}
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
          </div>

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
