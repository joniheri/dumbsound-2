import React, { useContext, useState } from "react";
import { Image, Modal } from "react-bootstrap";

// import context
import { AppContext } from "../contexts/GlobalContext";

// import img
import Avatar1 from "../img/Avatar1.png";
import Hijaber1 from "../img/Hijaber1.jpg";

export default function ImageProfile({ imageShow, setImageShow }) {
  const [state] = useContext(AppContext);
  return (
    <div>
      <Modal
        size="md"
        show={imageShow}
        onHide={() => {
          setImageShow(false);
        }}
        aria-labelledby="example-modal-sizes-title-md"
        centered
        style={{ borderColor: "#1F1F1F" }}
      >
        <Modal.Body style={{ background: "#1F1F1F" }}>
          {state.user.level == "User" ? (
            <>
              <Image src={Hijaber1} style={{ width: "100%", height: "auto" }} />
            </>
          ) : (
            <>
              <Image src={Avatar1} style={{ width: "100%", height: "auto" }} />
            </>
          )}
        </Modal.Body>
      </Modal>
    </div>
  );
}
