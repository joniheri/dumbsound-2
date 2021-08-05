import React, { useState, useContext } from "react";

// import components bootstrap
import { Button, Modal, Form, Alert } from "react-bootstrap";

// impost css
import "../../css/ModalLogin.css";

// import context
import { AppContext } from "../../contexts/GlobalContext";

export default function ModalLogin({
  loginShow,
  setLoginShow,
  setRegisterShow,
}) {
  const [state, dispatch] = useContext(AppContext);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    errorMessage: null,
    variantAlert: "",
  });

  const handleInputChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleFormSubmit = async (e) => {
    try {
      e.preventDefault();

      dispatch({
        type: "LOGIN",
      });
      setFormData({
        ...formData,
        email: "",
        password: "",
      });
      setLoginShow(false);

      // const requestBody = {
      //   email: formData.email,
      //   password: formData.password,
      // };

      // const body = JSON.stringify({ ...requestBody });

      // const config = {
      //   headers: {
      //     "Content-type": "application/json",
      //   },
      // };

      // const response = await API.post("/loginauth", body, config);

      // console.log("DataResponse: ", response);

      // // CheckValidationInput
      // if (response.data.status === "Validate Failed") {
      //   setFormData({
      //     ...formData,
      //     errorMessage: response.data.message,
      //     variantAlert: "danger",
      //   });
      //   // console.log("ResponseData: ", response.data);
      //   // console.log("DataStateUpdate: ", state);
      // }
      // // EndCheckValidationInput=======

      // // CheckEmailOrPasswordNotMatch
      // else if (response.data.status === "Failed") {
      //   setFormData({
      //     ...formData,
      //     errorMessage: response.data.message,
      //     variantAlert: "danger",
      //   });
      //   // console.log("ResponseData: ", response.data);
      //   // console.log("DataStateUpdate: ", state);
      // }
      // // EndCheckEmailOrPasswordNotMatch======

      // //CheckConnection
      // else if (response.data.status === "Response failed") {
      //   setFormData({
      //     ...formData,
      //     errorMessage: response.data.message,
      //     variantAlert: "danger",
      //   });
      //   // console.log("ResponseData: ", response.data);
      //   // console.log("DataStateUpdate: ", state);
      // }
      // //EndCheckConnection===========

      // // IfLoginSuccess
      // else {
      //   dispatch({
      //     type: "LOGIN",
      //     payload: response.data,
      //   });
      //   setFormData({
      //     ...formData,
      //     email: "",
      //     password: "",
      //     errorMessage: "Login Success!",
      //     variantAlert: "success",
      //   });
      //   setAuthToken(response.data.token);
      // }
      // // EndIfLoginSuccess==============
    } catch (error) {
      console.log("ErrorTryCath", error);
    }
  };

  return (
    <div>
      <Modal
        size="sm"
        show={loginShow}
        onHide={() => {
          setLoginShow(false);
          setFormData({
            ...formData,
            errorMessage: "",
            email: "",
            password: "",
            variantAlert: "",
          });
        }}
        aria-labelledby="example-modal-sizes-title-sm"
        style={{ borderColor: "#1F1F1F  " }}
        centered
      >
        <Modal.Header
          style={{ border: "0", color: "#fff", background: "#1F1F1F" }}
        >
          <Modal.Title id="example-modal-sizes-title-sm">Login</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ background: "#1F1F1F" }}>
          {formData.errorMessage && (
            <Alert variant={formData.variantAlert}>
              {formData.errorMessage}
            </Alert>
          )}
          <Form onSubmit={handleFormSubmit}>
            <Form.Control
              onChange={handleInputChange}
              value={formData.email}
              name="email"
              type="email"
              placeholder="Email"
              required
              className="input1"
              style={{
                margin: "0 0 15px 0",
                background: "#4b4b4b",
                color: "#fff",
              }}
            />
            <Form.Control
              onChange={handleInputChange}
              value={formData.password}
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
              Login
            </Button>
            <center>
              <p style={{ margin: "20px 0 20px 0", color: "#B1B1B1" }}>
                Don't have an account..? Klik{" "}
                <strong
                  style={{
                    cursor: "pointer",
                    color: "#B1B1B1",
                  }}
                  onClick={() => {
                    setLoginShow(false);
                    setRegisterShow(true);
                  }}
                >
                  Here
                </strong>
              </p>
            </center>
            {/* <pre style={{ color: "#fff" }}>
              {JSON.stringify(formData, null, 3)}
            </pre> */}
          </Form>
        </Modal.Body>
      </Modal>
      {/* EndLoginlModal============== */}
    </div>
  );
}
