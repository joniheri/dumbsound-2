import React, { useState, useEffect, useContext } from "react";
import { Link, useHistory } from "react-router-dom";

// impost object bootstrap
import { Row, Col, Container, Card } from "react-bootstrap";

// import context
import { AppContext } from "../contexts/GlobalContext";

// impost css
import "../css/BerandaPublic.css";
import "../css/LoadingAnimation.css";

// import components
import NavbarPublic from "../components/NavbarPublic";
import ModalLogin from "../components/modal/ModalLogin";
import ModalRegister from "../components/modal/ModalRegister";

// import config
import { API } from "../config/Api";

// import img
// import Rectangle1 from "../img/Rectangle1.png";

export default function BerandaPublic({ stateLogin, setStateLogin }) {
  const [state, dispatch] = useContext(AppContext);
  const [loginShow, setLoginShow] = useState(false);
  const [registerShow, setRegisterShow] = useState(false);
  const [music, setMusic] = useState([]);
  const [loading, setLoading] = useState(true);
  const history = useHistory();

  // console.log("DataState: ", state);

  // CheckUserIsLogin
  // useEffect(() => {
  //   if (state.isLogin) {
  //     history.push("/beranda");
  //   }
  // }, []);
  // EndCheckUserIsLogin

  // loadDatasMusic
  const loadMusic = async () => {
    try {
      setLoading(true);
      const response = await API.get("/musics-artist-public");
      setMusic(response.data.data);
      // console.log("ResponseDataMusic:", response);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    loadMusic();
  }, []);
  // EndLoadDatasMusic

  // console.log("DataMusic:", music);

  const onSwitchLogin = () => {
    setRegisterShow(false);
    setLoginShow(true);
  };

  return (
    <>
      {state.user == null ? (
        <>
          <Container fluid>
            {/* Content */}
            <center>
              <Row>
                <Col lg={12} className="landingPage">
                  <p
                    style={{
                      color: "#fff",
                      fontSize: "40px",
                      textAlign: "center",
                      marginTop: "190px",
                    }}
                  >
                    Connect on DumbSound
                  </p>
                  <p
                    style={{
                      color: "#fff",
                      fontSize: "20px",
                      textAlign: "center",
                      width: "680px",
                    }}
                  >
                    Discovery, Stream, and share a constantly expanding mix of
                    music from emerging and major artists around the world
                  </p>
                </Col>
              </Row>
            </center>
            <div>
              <Row
                style={{
                  marginLeft: "60px",
                  marginRight: "60px",
                  paddingTop: "30px",
                  marginBottom: "30px",
                }}
              >
                <Col lg={12}>
                  <p
                    style={{
                      textAlign: "center",
                      color: "#EE4622",
                      fontSize: "24px",
                      marginBottom: "50px",
                    }}
                  >
                    Dengarkan Dan Rasakan
                  </p>
                </Col>
                <Col sm={12}>
                  {loading ? (
                    <center>
                      <div className="lds-dual-ring"></div>
                    </center>
                  ) : (
                    <>
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
                              <Card
                                style={{ background: "#3A3A3A", color: "#fff" }}
                              >
                                <Card.Img
                                  variant="top"
                                  src={dataMusic.thumbnail}
                                  style={{
                                    paddingTop: "6px",
                                    paddingBottom: "10px",
                                    paddingLeft: "6px",
                                    paddingRight: "6px",
                                  }}
                                />
                                <Card.Body style={{ padding: "0" }}>
                                  <Card.Title
                                    style={{
                                      fontSize: "16px",
                                    }}
                                  >
                                    <Row style={{ margin: "0" }}>
                                      <Col
                                        md={8}
                                        style={{
                                          padding: "0",
                                          paddingLeft: "6px",
                                          paddingRight: "6px",
                                        }}
                                      >
                                        {dataMusic.title}
                                      </Col>
                                      <Col
                                        md={4}
                                        style={{
                                          padding: "0",
                                          paddingLeft: "6px",
                                          paddingRight: "6px",
                                          textAlign: "right",
                                        }}
                                      >
                                        {dataMusic.year}
                                      </Col>
                                    </Row>
                                  </Card.Title>
                                  <Card.Title
                                    style={{
                                      fontSize: "12px",
                                      paddingLeft: "6px",
                                      paddingRight: "6px",
                                    }}
                                  >
                                    {dataMusic.artist.name}
                                  </Card.Title>
                                </Card.Body>
                              </Card>
                            </Link>
                          </Col>
                        ))}
                      </Row>
                    </>
                  )}
                </Col>
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
        </>
      ) : (
        <>{history.push("/beranda")}</>
      )}
    </>
  );
}
