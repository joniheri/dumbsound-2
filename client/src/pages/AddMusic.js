import React, { useState, useEffect, useContext } from "react";
import { Container, Alert, Form, Row, Col, Button } from "react-bootstrap";

// import config
import { API } from "../config/Api";

// import context
import { AppContext } from "../contexts/GlobalContext";

// import components
import NotFound from "./NotFound";

export default function AddMusic() {
  const [state] = useContext(AppContext);
  const [artist, setArtis] = useState([]);
  const [messageShowFailed, setMessageShowFailed] = useState("");
  const [messageNotif, setMessageNotif] = useState("");
  const [preview, setPreview] = useState("");

  const [formData, setFormData] = useState({
    title: "",
    year: "",
    thumbnail: "",
    attache: "",
    artistId: "",
  });

  // const { title, year, thumbnail, attache, artistId } = formData;

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]:
        e.target.type === "file" ? e.target.files : e.target.value,
    });

    if (e.target.name === "thumbnail") {
      let url = URL.createObjectURL(e.target.files[0]);
      setPreview(url);
    }
  };

  // loadDatasArtis;
  const loadArtis = async () => {
    try {
      const response = await API.get("/artists");
      // console.log("DataResponseArtist: ", response.data.data);
      setArtis(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    loadArtis();
  }, []);
  // console.log("DataArtis: ", artist);
  // EndLoadDatasArtis;

  // SaveDataToDatabase
  const handleOnSubmit = async (e) => {
    try {
      e.preventDefault();
      const config = {
        headers: {
          "Content-type": "multipart/form-data",
        },
      };
      const formData = new FormData();
      formData.set("title", formData.title);
      formData.set("year", formData.year);
      formData.set("attache", formData.attache);
      formData.set("artistId", formData.artistId);
      formData.set(
        "imageFile",
        formData.thumbnail[0],
        formData.thumbnail[0].name
      );
      const body = JSON.stringify({ ...formData });
      // console.log("setNewData", formData);
      const response = await API.post("/add-music-file", formData, config); //-->this is sintact to inset to database
      // console.log("DataSaved: ", response);
      if (response.data.status === "Validate Failed") {
        setMessageShowFailed(response.data.message);
        setMessageNotif("");
      } else if (response.data.status === "Response Failed") {
        setMessageShowFailed(response.data.message);
        setMessageNotif("");
      } else {
        setFormData({
          title: "",
          year: "",
          thumbnail: "",
          attache: "",
          artistId: "",
        });
        setMessageShowFailed("");
        setMessageNotif("Add Data Success!");
      }
    } catch (error) {
      console.log("ErrorTryCath", error);
    }
  };
  // EndSaveDataToDatabase

  return (
    <div>
      {/* <NavbarAdmin /> */}
      <Container style={{ marginTop: "100px" }}>
        {state.user.level != "Admin" ? (
          <>
            <NotFound />
          </>
        ) : (
          <>
            <h3 style={{ color: "#b8b8b8", marginBottom: "30px" }}>
              Add Music
            </h3>
            {messageShowFailed && (
              <Alert variant="danger">{messageShowFailed}</Alert>
            )}
            {messageNotif && <Alert variant="success">{messageNotif}</Alert>}
            <Form onSubmit={handleOnSubmit}>
              <Row>
                <Col sm={9}>
                  <Form.Control
                    onChange={handleInputChange}
                    name="title"
                    type="text"
                    placeholder="Title"
                    required
                    className="input1"
                    style={{
                      padding: "0 0 0 10px",
                      margin: "0 0 15px 0",
                    }}
                  />
                </Col>
                <Col sm={3}>
                  <Form.Control
                    onChange={handleInputChange}
                    name="thumbnail"
                    type="file"
                    title="Thumbnail"
                    style={{
                      border: "1px solid #fff",
                      borderRadius: "3px",
                      color: "#fff",
                      paddingTop: "3px",
                      paddingBottom: "3px",
                      cursor: "pointer",
                      width: "250px",
                    }}
                  />
                </Col>
              </Row>
              <Form.Control
                onChange={handleInputChange}
                name="year"
                type="number"
                placeholder="Year"
                required
                style={{ margin: "0 0 15px 0" }}
                className="input1"
              />
              <select
                onChange={handleInputChange}
                name="artistId"
                style={{
                  width: "100%",
                  height: "38px",
                  borderRadius: "5px",
                }}
              >
                <option>--Select Singer--</option>
                {artist?.map((dataArtis) => (
                  <option value={dataArtis.id}>
                    {dataArtis.id} - {dataArtis.name}
                  </option>
                ))}
              </select>
              <Row
                style={{
                  marginTop: "20px",
                }}
              >
                <Col sm={3}>
                  <Form.Control
                    onChange={handleInputChange}
                    name="attache"
                    type="file"
                    title="Attache"
                    style={{
                      border: "1px solid #fff",
                      borderRadius: "3px",
                      color: "#fff",
                      cursor: "pointer",
                      width: "100%",
                    }}
                  />
                </Col>
              </Row>
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
                      Add Song
                    </Button>
                  </center>
                </Col>
              </Row>
              <Row>
                <Col sm={9}></Col>
                <Col sm={3}>
                  {preview !== "" && (
                    <img
                      src={preview}
                      style={{
                        width: "100%",
                        height: "auto",
                        objectFit: "cover",
                        paddingLeft: "15px",
                        paddingRight: "15px",
                        marginBottom: "15px",
                      }}
                    />
                  )}
                </Col>
              </Row>
            </Form>
            {/* <pre style={{ color: "#fff" }}>{JSON.stringify(formData, null, 3)}</pre>
          <pre style={{ color: "#fff" }}>{JSON.stringify(artis, null, 3)}</pre> */}
          </>
        )}
      </Container>
    </div>
  );
}
