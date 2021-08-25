import React, { useContext, useState } from "react";
import { Button, Card, Container } from "react-bootstrap";

// import context
import { AppContext } from "../contexts/GlobalContext";

// import pages
import NotFound from "./NotFound";
import ImageProfile from "./ImageProfile";

// import img
import Avatar1 from "../img/Avatar1.png";
import Hijaber1 from "../img/Hijaber1.jpg";

export default function Profile() {
  const [state] = useContext(AppContext);
  const [imageShow, setImageShow] = useState(false);

  return (
    <div>
      {state.user == null ? (
        <>
          <NotFound />
        </>
      ) : (
        <>
          <Container style={{ marginTop: "100px" }}>
            <div
              style={
                {
                  // alignItems: "center",
                  // display: "flex",
                  // justifyContent: "center",
                }
              }
            >
              <Card style={{ width: "20rem", background: "#1F1F1F" }}>
                {state.user.level == "User" ? (
                  <>
                    <Card.Img
                      variant="top"
                      src={Hijaber1}
                      style={{
                        height: "300px",
                        width: "auto",
                        objectFit: "cover",
                        cursor: "pointer",
                      }}
                      onClick={() => {
                        setImageShow(true);
                      }}
                    />
                  </>
                ) : state.user.level == "Admin" ? (
                  <>
                    <Card.Img
                      variant="top"
                      src={Avatar1}
                      style={{
                        height: "300px",
                        width: "auto",
                        objectFit: "cover",
                        cursor: "pointer",
                      }}
                      onClick={() => {
                        setImageShow(true);
                      }}
                    />
                  </>
                ) : (
                  <>
                    <h1>Image Empty</h1>
                  </>
                )}
                <Card.Body>
                  <Card.Title style={{ color: "#fff" }}>My Profile</Card.Title>
                  <Card.Text style={{ color: "#fff" }}>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Card.Text
                    style={{
                      color: "#fff",
                      margin: "0",
                    }}
                  >
                    {" Email : "}
                    {state.user.email}
                  </Card.Text>
                  <Card.Text style={{ color: "#fff", margin: "0" }}>
                    {" Name : "}
                    {state.user.fullname}
                  </Card.Text>
                  <Card.Text style={{ color: "#fff" }}>
                    {" Access : "}
                    {state.user.level}
                  </Card.Text>
                  <Button variant="secondary" block>
                    Edit
                  </Button>
                </Card.Body>
              </Card>
            </div>
          </Container>
          <ImageProfile imageShow={imageShow} setImageShow={setImageShow} />
        </>
      )}
    </div>
  );
}
