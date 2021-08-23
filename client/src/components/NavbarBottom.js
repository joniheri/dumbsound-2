import React from "react";
import { Navbar } from "react-bootstrap";

export default function NavbarBottom({ setShowAudio, musicFile }) {
  return (
    <Navbar bg="dark">
      <Navbar.Brand href="#home">
        <span style={{ color: "#ffffff" }}>{musicFile}</span>
      </Navbar.Brand>
    </Navbar>
  );
}
