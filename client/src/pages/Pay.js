import React, { useContext, useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";

// import css
import "../css/Pay.css";

// import globalContext
import { AppContext } from "../contexts/GlobalContext";

// import components
import NotFound from "./NotFound";

// import img
import InputFile from "../img/inputFile.png";

export default function Pay() {
  const [state] = useContext(AppContext);
  const [preview, setPreview] = useState("");
  const [formData, setFormData] = useState({
    accountNumber: "",
    thumbnail: "",
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]:
        e.target.type === "file" ? e.target.files : e.target.value,
    });

    if (e.target.value === "" || e.target.value === null) {
      setPreview("");
    } else {
      if (e.target.name === "attache") {
        let url = URL.createObjectURL(e.target.files[0]);
        setPreview(url);
      }
    }
  };

  return (
    <div>
      {state.user.level != "User" ? (
        <>
          <NotFound />
        </>
      ) : (
        <>
          {/* <NavbarUser /> */}
          <Container style={{ marginTop: "200px" }}>
            <center style={{ marginBottom: "30px" }}>
              <h1 style={{ color: "#fff" }}>Premium</h1>
              <p style={{ color: "#fff", fontSize: "20px" }}>
                Bayar sekarang dan nikmati streaming music yang kekinian dari{" "}
                <span style={{ color: "#EE4622" }}>DUMB</span>
                <span style={{ color: "#fff" }}>SOUND</span>
              </p>
              <p style={{ fontSize: "20px" }}>
                {" "}
                <span style={{ color: "#EE4622" }}>DUMB</span>
                <span style={{ color: "#fff" }}>SOUND : 0981312323</span>
              </p>
            </center>
            <Form>
              <Row
                style={{
                  alignItems: "center",
                  display: "flex",
                  justifyContent: "center",
                  marginBottom: "16px",
                }}
              >
                <Col lg={4}>
                  <Row
                    style={{
                      marginBottom: "16px",
                    }}
                  >
                    <Col>
                      <Form.Control
                        onChange={handleInputChange}
                        name="accountNumber"
                        type="text"
                        placeholder="Input your account number"
                        required
                        className="input1"
                        style={{
                          background: "#444444",
                          height: "45px",
                          color: "#CBCECF",
                        }}
                      />
                    </Col>
                  </Row>
                  <Row
                    style={{
                      alignItems: "center",
                      display: "flex",
                      justifyContent: "center",
                      marginBottom: "16px",
                    }}
                  >
                    <Col>
                      <div
                        className="upload-btn-wrapper"
                        style={{
                          alignItems: "center",
                          display: "flex",
                          justifyContent: "center",
                        }}
                      >
                        <button
                          className="btn-input-file"
                          type="button"
                          style={{
                            height: "45px",
                          }}
                        >
                          Attache proof of transfer
                          <img
                            src={InputFile}
                            style={{
                              marginLeft: "10px",
                              height: "21px",
                              width: "15px",
                            }}
                          />
                        </button>
                        <input
                          type="file"
                          name="attache"
                          onChange={handleInputChange}
                        />
                      </div>
                    </Col>
                  </Row>
                  <Row
                    style={{
                      alignItems: "center",
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    <Col>
                      <Button
                        type="submit"
                        style={{
                          background: "#F58033",
                          borderColor: "#F58033",
                          width: "100%",
                          marginTop: "30px",
                          marginBottom: "16px",
                        }}
                      >
                        Send
                      </Button>
                    </Col>
                  </Row>
                </Col>
              </Row>
              <Row
                style={{
                  alignItems: "center",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <Col md={4}>
                  {preview !== "" && (
                    <>
                      <p
                        style={{
                          color: "#CBCECF",
                          textAlign: "center",
                        }}
                      >
                        Priview Image Attahce
                      </p>
                      <img
                        src={preview}
                        style={{
                          width: "100%",
                          height: "auto",
                          objectFit: "cover",
                          paddingLeft: "15px",
                          paddingRight: "15px",
                          marginBottom: "25px",
                        }}
                      />
                    </>
                  )}
                </Col>
              </Row>
            </Form>
          </Container>
        </>
      )}
    </div>
  );
}
