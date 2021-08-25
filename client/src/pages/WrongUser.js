import React, { useContext } from "react";

// import { useHistory } from "react-router-dom";
import { Container } from "react-bootstrap";

// import context
import { AppContext } from "../contexts/GlobalContext";

// import components
import NavbarPublic from "../components/NavbarPublic";

export default function WrongUser() {
  const [state, dispatch] = useContext(AppContext);
  return (
    <div>
      <NavbarPublic />
      <Container style={{ marginTop: "100px" }}>
        <h1>{state.user.level}</h1>
        <h1
          style={{
            color: "#b8b8b8",
            marginTop: "200px",
            marginBottom: "30px",
            textAlign: "center",
          }}
        >
          Access Login is Wrong!
        </h1>
      </Container>
    </div>
  );
}
