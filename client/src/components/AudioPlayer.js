import React from "react";
import { Col, Image, Nav, Navbar, Row } from "react-bootstrap";

// import img
import PlayBack from "../img/video-player 2.png";
import PlayNext from "../img/video-player 1.png";
import PlayButton from "../img/play-button 1.png";

export default function AudioPlayer({
  setShowAudio,
  musicFile,
  musicThumbnail,
  artistName,
  titleMusic,
}) {
  console.log("Thumbnail: ", musicThumbnail);

  return (
    <div
      style={{
        position: "fixed",
        bottom: "0",
        background: "#2E2D2D",
        width: "100%",
        paddingTop: "10px",
        paddingBottom: "10px",
        marginBottom: "5px",
      }}
    >
      <Row>
        <Col
          md={12}
          style={{
            alignItems: "center",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Image
            src={musicThumbnail}
            style={{
              width: "36px",
              height: "36px",
              objectFit: "cover",
              borderRadius: "50%",
              background: "green",
              marginLeft: "10px",
            }}
          />
          <div
            style={{
              marginLeft: "10px",
              width: "260px",
            }}
          >
            <Row>
              <Col
                md={12}
                style={{
                  alignItems: "center",
                  display: "flex",
                  justifyContent: "left",
                }}
              >
                <span
                  style={{
                    color: "#ffffff",
                    fontSize: "11px",
                  }}
                >
                  {titleMusic}-{artistName}
                </span>
              </Col>
            </Row>
            <Row>
              <Col
                md={12}
                style={{
                  alignItems: "center",
                  display: "flex",
                  justifyContent: "left",
                }}
              >
                <span
                  style={{
                    color: "#ffffff",
                    fontSize: "11px",
                  }}
                >
                  {musicFile}
                </span>
              </Col>
            </Row>
          </div>
          <div
            style={{
              marginLeft: "10px",
            }}
          >
            <span>
              <Image
                src={PlayBack}
                style={{
                  cursor: "pointer",
                  width: "auto",
                  height: "18px",
                }}
              />
            </span>
            <span>
              <Image
                src={PlayButton}
                style={{
                  cursor: "pointer",
                  width: "auto",
                  height: "18px",
                  marginLeft: "14px",
                  marginRight: "13px",
                }}
              />
            </span>
            <span>
              <Image
                src={PlayNext}
                style={{
                  cursor: "pointer",
                  width: "auto",
                  height: "18px",
                }}
              />
            </span>
          </div>
          <span
            style={{ color: "#ffffff", marginLeft: "15px", cursor: "pointer" }}
            onClick={() => {
              setShowAudio(false);
            }}
          >
            X
          </span>
        </Col>
      </Row>
    </div>
  );
}
