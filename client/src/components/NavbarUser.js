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
import Ellipse1 from "../img/Ellipse1.png";
import Vector1 from "../img/Vector1.png";
import Vector3 from "../img/Vector3.png";

export default function NavbarUser({ stateLogin, setStateLogin }) {
  const router = useHistory();

  const [state, dispatch] = useContext(AppContext);
  const [loginShow, setLoginShow] = useState(false);
  const [registerShow, setRegisterShow] = useState(false);

  const handleLogout = () => {
    dispatch({
      type: "LOGOUT",
    });
    router.push("/");
  };

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
        <Navbar.Brand as={Link} to="/beranda">
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
              src={Ellipse1}
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
                  borderTopLeftRadius: "10px",
                  borderTopRightRadius: "10px",
                  paddingTop: "10px",
                  paddingBottom: "18px",
                }}
              >
                <center>
                  <Image
                    src={Ellipse1}
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
              <Nav.Link
                as={Link}
                to="/pay"
                style={{
                  borderTopLeftRadius: "10px",
                  borderTopRightRadius: "10px",
                  paddingTop: "10px",
                  paddingBottom: "18px",
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
                Pay
              </Nav.Link>
              <div className="borderBottom"></div>
              <Nav.Link
                style={{
                  borderBottomLeftRadius: "10px",
                  borderBottomRightRadius: "10px",
                  paddingTop: "10px",
                  paddingBottom: "18px",
                  fontSize: "15px",
                  fontWeight: "bold",
                }}
                onClick={handleLogout}
              >
                <Image
                  src={Vector3}
                  style={{
                    marginRight: "20px",
                    height: "20px",
                    width: "auto",
                  }}
                />
                Logout
              </Nav.Link>
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
