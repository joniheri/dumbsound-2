import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// impost object bootstrap
import { Row, Col, Container, Card, Button } from "react-bootstrap";

// impost css
import "../css/BerandaPublic.css";
import "../css/LoadingAnimation.css";

// import config
import { API } from "../config/Api";

// import components
// import AudioPlayer from "../components/AudioPlayer";
// import JkMusicPlayer from "../components/ReactJkMusicPlayer/JkMusicPlayer";
// import JkMusicPlayer2 from "../components/ReactJkMusicPlayer/JkMusicPlayer2";
import JkMusicPlayer2Edit from "../components/ReactJkMusicPlayer/JkMusicPlayer2Edit";

// import img
// import Rectangle1 from "../img/Rectangle1.png";

export default function BerandaAdmin({ stateLogin, setStateLogin }) {
  const [music, setMusic] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showMusic, setShowMusic] = useState(false);
  const [musicFile, setMusicFile] = useState(null);

  // console.log("Thumnail", musicThumbnail);

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
      {/* <NavbarAdmin /> */}
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
            <Col md={12}>
              {loading ? (
                <center>
                  <div className="lds-dual-ring"></div>
                </center>
              ) : (
                <>
                  <Row>
                    {music?.map((dataMusic, index) => (
                      <Col md={2} style={{ marginBottom: "20px" }}>
                        <Card style={{ background: "#3A3A3A" }}>
                          {" "}
                          <Link
                            onClick={() => {
                              setShowMusic(false);
                              setMusicFile({
                                title: dataMusic.title,
                                thumbnail: dataMusic.thumbnail,
                                artistName: dataMusic.artist.name,
                                attache: dataMusic.attache,
                              });
                              setShowMusic(true);
                            }}
                            style={{
                              cursor: "pointer",
                              textDecoration: "none",
                            }}
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
                            <Card.Body style={{ padding: "0", color: "#fff" }}>
                              <Card.Title
                                style={{
                                  fontSize: "17px",
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
                          </Link>
                          <Card.Footer className="text-muted">
                            <Button variant="secondary" block>
                              Edit
                            </Button>
                            <Button variant="danger" block>
                              Delete
                            </Button>
                          </Card.Footer>
                        </Card>
                      </Col>
                    ))}
                  </Row>
                </>
              )}
            </Col>
          </Row>
          {/* End Content */}
        </div>
      </Container>
      {showMusic === false ? (
        <>
          <h1>...Loading</h1>
        </>
      ) : (
        <>
          <JkMusicPlayer2Edit musicFile={musicFile} />
        </>
      )}
    </>
  );
}
