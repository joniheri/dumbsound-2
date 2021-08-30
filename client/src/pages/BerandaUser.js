import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

// impost object bootstrap
import { Row, Col, Container, Card } from "react-bootstrap";

// import context
// import { AppContext } from "../contexts/GlobalContext";

// impost css
import "../css/BerandaPublic.css";
import "../css/LoadingAnimation.css";

// import config
import { API } from "../config/Api";

// import components
import AudioPlayer from "../components/AudioPlayer";
import JkMusicPlayer2Edit from "../components/ReactJkMusicPlayer/JkMusicPlayer2Edit";

export default function BerandaUser() {
  // const [state] = useContext(AppContext);
  // console.log("DataState", state);

  const [music, setMusic] = useState([]);
  const [loading, setLoading] = useState(true);

  const [musicShow, setMusicShow] = useState(false);
  const [musicFile, setMusicFile] = useState(null);
  const [playMusic, setPlayMusic] = useState(true);

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

  return (
    <>
      {/* <NavbarUser /> */}
      <Container fluid style={{ marginBottom: "50px" }}>
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
                          onClick={() => {
                            setMusicShow(false);
                            setMusicFile({
                              title: dataMusic.title,
                              thumbnail: dataMusic.thumbnail,
                              artistName: dataMusic.artist.name,
                              attache: dataMusic.attache,
                            });
                            setMusicShow(true);
                          }}
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
                                  fontSize: "17px",
                                  fontWeight: "bold",
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
                                  fontSize: "13px",
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
        </div>
        {/* End Content */}
      </Container>
      {musicShow && (
        <>
          <JkMusicPlayer2Edit musicFile={musicFile} />
        </>
      )}
    </>
  );
}
