import React, { useContext, useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";

// import globalContext
import { AppContext } from "../contexts/GlobalContext";

// import components
import NavbarUser from "../components/NavbarUser";
import NotFound from "./NotFound";

export default function Pay() {
  const [state] = useContext(AppContext);
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

    if (e.target.name === "thumbnail") {
      let url = URL.createObjectURL(e.target.files[0]);
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
                      marginBottom: "16px",
                    }}
                  >
                    <Col>
                      <Form.Control
                        onChange={handleInputChange}
                        name="thumbnail"
                        type="file"
                        title="Thumbnail"
                        style={{
                          border: "1px solid #fff",
                          borderRadius: "3px",
                          color: "#fff",
                          paddingTop: "5px",
                          paddingBottom: "5px",
                          cursor: "pointer",
                          width: "100%",
                        }}
                      />
                    </Col>
                  </Row>
                  <Row
                    style={{
                      marginBottom: "16px",
                    }}
                  >
                    <Col>
                      <Button
                        type="submit"
                        style={{
                          margin: "20px 0 0 0",
                          background: "#F58033",
                          borderColor: "#F58033",
                          width: "100%",
                        }}
                      >
                        Send
                      </Button>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Form>
          </Container>
        </>
      )}
    </div>
  );
}
