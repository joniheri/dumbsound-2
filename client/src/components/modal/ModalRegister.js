import React, { useState } from "react";

// import component bootstrap
import { Button, Modal, Form, Alert } from "react-bootstrap";

// import API
import { API } from "../../config/Api";

// Import components
import ModalAlert from "./ModalAlert";

export default function ModalRegister({
  registerShow,
  setLoginShow,
  setRegisterShow,
}) {
  const [messageShowFailed, setMessageShowFailed] = useState("");
  const [messageShowSuccess, setMessageShowSuccess] = useState("");
  const [messageVariant, setMessageVariant] = useState("");
  const [alertShow, setAlertShow] = useState(false);

  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    password: "",
    gender: "",
    phone: "",
    address: "",
    level: "User",
  });

  // const { fullname, email, password, gender, phone, address, level } = formData;

  const handleOnChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // console.log(form);

  const handleOnSubmit = async (e) => {
    try {
      e.preventDefault();

      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };

      const body = JSON.stringify({ ...formData });

      // console.log("PrintBody: ", body);

      const response = await API.post("/register", body, config); //-->this is sintact to inset to database

      console.log("DataSaved: ", response);

      // CheckValidationInput
      if (response.data.status === "Validate Failed") {
        setMessageShowFailed(response.data.message);
        setMessageVariant("danger");
      }
      // EndCheckValidationInput

      // CheckEmail
      else if (response.data.status === "Failed") {
        setMessageShowFailed(response.data.message);
        setMessageVariant("danger");
      }
      // EndCheckEmail

      //CheckEmailOrConnection
      else if (response.data.status === "Response Failed") {
        setMessageShowFailed(response.data.message);
        setMessageVariant("danger");
      }
      //EndCheckEmailOrPasswordNotMatch===========

      // IfSuccess
      else {
        setMessageShowFailed("");
        setMessageShowSuccess("Register Success.");
        setFormData({
          fullname: "",
          email: "",
          password: "",
          gender: "",
          phone: "",
          address: "",
        });
        setRegisterShow(false);
        setAlertShow(true);
      }
      // EndIfSuccess
    } catch (error) {
      console.log("ErrorTryCath", error);
    }
  };

  return (
    <div>
      <Modal
        size="sm"
        show={registerShow}
        onHide={() => {
          setRegisterShow(false);
          setMessageShowFailed("");
          setMessageVariant("");
          setFormData({
            fullname: "",
            email: "",
            password: "",
            gender: "",
            phone: "",
            address: "",
          });
        }}
        aria-labelledby="example-modal-sizes-title-sm"
        style={{ borderColor: "#1F1F1F" }}
        centered
      >
        <Modal.Header
          className="bg-modal"
          style={{ border: "0", color: "#fff", background: "#1F1F1F" }}
        >
          <Modal.Title id="example-modal-sizes-title-sm">Register</Modal.Title>
        </Modal.Header>
        <Modal.Body className="bg-modal" style={{ background: "#1F1F1F" }}>
          {messageShowFailed != "" && (
            <Alert variant={messageVariant}>{messageShowFailed}</Alert>
          )}
          <Form onSubmit={handleOnSubmit}>
            <Form.Group controlId="formFile" className="mb-3">
              <Form.Control
                onChange={handleOnChange}
                name="email"
                type="email"
                placeholder="Email"
                required
                style={{
                  margin: "0 0 15px 0",
                  background: "#4b4b4b",
                  color: "#fff",
                }}
              />
            </Form.Group>
            <Form.Group controlId="formFile" className="mb-3">
              <Form.Control
                onChange={handleOnChange}
                name="password"
                type="password"
                placeholder="Password"
                required
                style={{
                  margin: "0 0 15px 0",
                  background: "#4b4b4b",
                  color: "#fff",
                }}
              />
            </Form.Group>
            <Form.Group controlId="formFile" className="mb-3">
              <Form.Control
                onChange={handleOnChange}
                name="fullname"
                type="text"
                placeholder="Full Name"
                required
                style={{
                  margin: "0 0 15px 0",
                  background: "#4b4b4b",
                  color: "#fff",
                }}
              />
            </Form.Group>
            <Form.Group controlId="formFile" className="mb-3">
              <Form.Control
                onChange={handleOnChange}
                name="gender"
                type="text"
                placeholder="Gender"
                required
                style={{
                  margin: "0 0 15px 0",
                  background: "#4b4b4b",
                  color: "#fff",
                }}
              />
            </Form.Group>
            <Form.Group controlId="formFile" className="mb-3">
              <Form.Control
                onChange={handleOnChange}
                name="phone"
                type="text"
                placeholder="Phone"
                required
                style={{
                  margin: "0 0 15px 0",
                  background: "#4b4b4b",
                  color: "#fff",
                }}
              />
            </Form.Group>
            <Form.Group controlId="formFile" className="mb-3">
              <Form.Control
                onChange={handleOnChange}
                name="address"
                type="text"
                placeholder="Address"
                required
                style={{
                  margin: "0 0 15px 0",
                  background: "#4b4b4b",
                  color: "#fff",
                }}
              />
            </Form.Group>
            <Form.Group controlId="formFile" className="mb-3">
              <Form.Control
                onChange={handleOnChange}
                name="level"
                type="hidden"
                placeholder="Level"
                value="User"
                style={{
                  margin: "0 0 15px 0",
                  background: "#4b4b4b",
                  color: "#fff",
                }}
              />
            </Form.Group>
            <Button
              type="submit"
              className="btn-register2"
              style={{
                width: "100%",
                margin: "20px 0 0 0",
                background: "#EE4622",
                borderColor: "#EE4622",
              }}
            >
              Register
            </Button>
            <center>
              <p style={{ margin: "20px 0 20px 0", color: "#B1B1B1" }}>
                Already have an account..? Klik{" "}
                <strong
                  style={{
                    cursor: "pointer",
                    color: "#B1B1B1",
                  }}
                  onClick={() => {
                    setLoginShow(true);
                    setRegisterShow(false);
                  }}
                >
                  Here
                </strong>
              </p>
            </center>
            {/* <pre style={{ color: "#fff" }}>{JSON.stringify(form, null, 3)}</pre> */}
          </Form>
        </Modal.Body>
      </Modal>

      {/* ModalAlert */}
      <ModalAlert
        alertShow={alertShow}
        setAlertShow={setAlertShow}
        messageShowSuccess={messageShowSuccess}
      />
      {/* EndModalAlert */}
    </div>
  );
}
