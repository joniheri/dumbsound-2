import React from "react";
import { Container } from "react-bootstrap";

// import css loading
import "../css/LoadingAnimation.css";

export default function LoadingTest1() {
  return (
    <div>
      <Container style={{ marginTop: "100px" }}>
        <center>
          <div className="lds-dual-ring"></div>
        </center>
      </Container>
    </div>
  );
}
