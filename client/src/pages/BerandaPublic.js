import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";

// impost object bootstrap
import { Row, Col, Container } from "react-bootstrap";

// impost css
import "../css/BerandaPublic.css";

// import components
import ModalLogin from "../components/modal/ModalLogin";
import ModalRegister from "../components/modal/ModalRegister";

// import config
import { API } from "../config/Api";

// import img
// import Rectangle1 from "../img/Rectangle1.png";

export default function BerandaPublic({ stateLogin, setStateLogin }) {
  const [loginShow, setLoginShow] = useState(false);
  const [registerShow, setRegisterShow] = useState(false);
  const [music, setMusic] = useState([]);

  // loadDatasMusic
  const loadMusic = async () => {
    try {
      const response = await API.get("/musics-artist");
      setMusic(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    loadMusic();
  }, []);
  // EndLoadDatasMusic

  console.log("DataMusic:", music);

  return (
    <Container fluid>
      {/* Content */}
      <Row
        style={{
          marginBottom: "20px",
        }}
      >
        <Col lg={12} className="landingPage">
          <p
            style={{
              color: "#fff",
              fontSize: "40px",
              textAlign: "center",
              marginTop: "130px",
            }}
          >
            Connect on DumbSound
          </p>
          <center>
            <p
              style={{
                color: "#fff",
                fontSize: "18px",
                textAlign: "center",
                width: "680px",
              }}
            >
              Discovery, Stream, and share a constantly expanding mix of music
              from emerging and major artists around the world
            </p>
          </center>
        </Col>
      </Row>
      <div>
        <Row
          style={{
            marginLeft: "60px",
            marginRight: "60px",
            marginBottom: "30px",
          }}
        >
          <Col lg={12}>
            <p
              style={{
                textAlign: "center",
                color: "#EE4622",
                fontSize: "24px",
                paddingTop: "30px",
                marginBottom: "40px",
              }}
            >
              Dengarkan Dan Rasakan
            </p>
          </Col>
          {/* <Col sm={12}>
            <Row>
              {music?.map((dataMusic, index) => (
                <Col md={2} style={{ marginBottom: "20px" }}>
                  <Link
                    onClick={onSwitchLogin}
                    style={{
                      cursor: "pointer",
                      textDecoration: "none",
                    }}
                  >
                    <Card style={{ background: "#3A3A3A", color: "#fff" }}>
                      <Card.Img variant="top" src={dataMusic.thumbnail} />
                      <Card.Body>
                        <Card.Title>{dataMusic.title}</Card.Title>
                        <Card.Text>{dataMusic.artist.name}</Card.Text>
                      </Card.Body>
                    </Card>
                  </Link>
                </Col>
              ))}
            </Row>
          </Col> */}
        </Row>

        <ModalLogin
          loginShow={loginShow}
          setLoginShow={setLoginShow}
          setRegisterShow={setRegisterShow}
          stateLogin={stateLogin}
          setStateLogin={setStateLogin}
        />
        <ModalRegister
          registerShow={registerShow}
          setRegisterShow={setRegisterShow}
          setLoginShow={setLoginShow}
        />
      </div>
      {/* End Content */}
    </Container>
  );
}
