import React from "react";
// import { useHistory } from "react-router-dom";
import { Container } from "react-bootstrap";

// import components
import NavbarPublic from "../components/NavbarPublic";

export default function NotFound() {
  return (
    <div>
      <NavbarPublic />
      <Container style={{ marginTop: "100px" }}>
        <h1
          style={{
            color: "#b8b8b8",
            marginTop: "200px",
            marginBottom: "30px",
            textAlign: "center",
          }}
        >
          [404] Page Not Found!
        </h1>
      </Container>
    </div>
  );
}
