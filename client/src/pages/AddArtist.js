import React, { useContext, useState } from "react";
import { Container, Alert, Form, Row, Col, Button } from "react-bootstrap";

// import config
import { API } from "../config/Api";

// import context
import { AppContext } from "../contexts/GlobalContext";

// imporrt pages
import NotFound from "./NotFound";
import WrongUser from "./WrongUser";

export default function AddArtist() {
  const [state] = useContext(AppContext);
  const [messageShowFailed, setMessageShowFailed] = useState("");
  const [messageNotif, setMessageNotif] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    old: "",
    type: "",
    startCareer: "",
  });

  // ChangeInut
  const handleInputChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };
  // EndChangeInut

  // HandleSaveDada
  const handleOnSubmit = async (e) => {
    try {
      e.preventDefault();
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };
      const body = JSON.stringify({ ...formData });
      // console.log("formDataBody: ", body);
      const response = await API.post("/add-artist", body, config); //-->this is sintact to inset to database
      // console.log("DataSaved: ", response);
      if (response.data.status === "Response failed") {
        setMessageShowFailed(response.data.message);
      } else if (response.data.status === "Validate Failed") {
        setMessageShowFailed(response.data.message);
      } else {
        setFormData({
          name: "",
          old: "",
          type: "",
          startCareer: "",
        });
        setMessageShowFailed("");
        setMessageNotif("Add Artis Success!");
      }
    } catch (error) {
      console.log("ErrorTryCath", error);
    }
  };
  // EndHandleSaveDada

  return (
    <div>
      <Container style={{ marginTop: "100px" }}>
        {state.user.level != "Admin" ? (
          <>
            <NotFound />
          </>
        ) : (
          <>
            <h3 style={{ color: "#b8b8b8", marginBottom: "30px" }}>
              Add Artis
            </h3>
            {messageShowFailed && (
              <Alert variant="danger">{messageShowFailed}</Alert>
            )}
            {messageNotif && <Alert variant="success">{messageNotif}</Alert>}
            <Form onSubmit={handleOnSubmit}>
              <Form.Control
                onChange={handleInputChange}
                value={formData.name}
                name="name"
                type="text"
                placeholder="Name"
                required
                className="input1"
                style={{
                  margin: "0 0 15px 0",
                  background: "#444444",
                  color: "#CBCECF",
                }}
              />
              <Form.Control
                onChange={handleInputChange}
                value={formData.old}
                name="old"
                type="number"
                placeholder="Old"
                required
                style={{
                  margin: "0 0 15px 0",
                  background: "#444444",
                  color: "#CBCECF",
                }}
                className="input1"
              />
              <Form.Control
                onChange={handleInputChange}
                value={formData.type}
                name="type"
                type="text"
                placeholder="Type"
                required
                style={{
                  margin: "0 0 15px 0",
                  background: "#444444",
                  color: "#CBCECF",
                }}
                className="input1"
              />
              <Form.Control
                onChange={handleInputChange}
                value={formData.startCareer}
                name="startCareer"
                type="number"
                placeholder="Start Career"
                required
                style={{
                  margin: "0 0 15px 0",
                  background: "#444444",
                  color: "#CBCECF",
                }}
                className="input1"
              />
              <Row>
                <Col>
                  <center>
                    <Button
                      type="submit"
                      className="btn-register2"
                      style={{
                        width: "300px",
                        margin: "20px 0 0 0",
                        background: "#F58033",
                        borderColor: "#F58033",
                      }}
                    >
                      Add Artis
                    </Button>
                  </center>
                </Col>
              </Row>
            </Form>
            {/* <pre style={{ color: "#fff" }}>{JSON.stringify(data, null, 3)}</pre> */}
          </>
        )}
      </Container>
    </div>
  );
}
