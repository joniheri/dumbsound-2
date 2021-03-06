import React, { useState, useEffect, useContext } from "react";
import { Container, Alert, Form, Row, Col, Button } from "react-bootstrap";

// import css
import "../css/AddMusic.css";

// import config
import { API } from "../config/Api";

// import context
import { AppContext } from "../contexts/GlobalContext";

// import components
import NotFound from "./NotFound";

// import img
import InputFile from "../img/inputFile.png";

export default function AddMusic() {
  const [state] = useContext(AppContext);
  const [artist, setArtis] = useState([]);
  const [messageShowFailed, setMessageShowFailed] = useState("");
  const [variantNotif, setVariantNotif] = useState("");
  const [preview, setPreview] = useState("");
  const [previewNameFileAttache, setPreviewNameFileAttache] = useState("");

  const [formData, setFormData] = useState({
    title: "",
    year: "",
    thumbnail: "",
    attache: "",
    artistId: "",
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]:
        e.target.type === "file" ? e.target.files : e.target.value,
    });

    // console.log("TargetValue: ", e.target.value);
    if (e.target.value === "" || e.target.value === null) {
      setPreview("");
    } else {
      if (e.target.name === "thumbnail") {
        let url = URL.createObjectURL(e.target.files[0]);
        setPreview(url);
      }
      if (e.target.name === "attache") {
        let url = URL.createObjectURL(e.target.files[0]);
        setPreviewNameFileAttache(url);
      }
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

      const formDataSend = new FormData();
      formDataSend.set("title", formData.title);
      formDataSend.set("year", formData.year);
      formDataSend.set(
        "imageFile",
        formData.thumbnail[0],
        formData.thumbnail[0].name
      );
      formDataSend.set(
        "audioFile",
        formData.attache[0],
        formData.attache[0].name
      );
      formDataSend.set("artistId", formData.artistId);

      // console.log("AttacheName", formData.attache[0].name);

      const response = await API.post("/add-music-file", formDataSend, config); //-->this is sintact to inset to database
      console.log("DataSaved: ", response);
      if (response.data.status === "Upload Failed!") {
        setMessageShowFailed(response.data.message);
        setVariantNotif("danger");
      } else if (response.data.status === "Validate Failed") {
        setMessageShowFailed(response.data.message);
        setVariantNotif("danger");
      } else if (response.data.status === "Response Failed") {
        setMessageShowFailed(response.data.message);
        setVariantNotif("danger");
      } else {
        setFormData({
          title: "",
          year: "",
          thumbnail: "",
          attache: "",
          artistId: "",
        });
        setMessageShowFailed("Add Data Success!");
        setVariantNotif("success");
        setPreview("");
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
              <Alert variant={variantNotif}>{messageShowFailed}</Alert>
            )}
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
                      background: "#444444",
                      color: "#CBCECF",
                    }}
                  />
                </Col>
                <Col sm={3}>
                  <div
                    className="upload-btn-wrapper"
                    style={{
                      alignItems: "center",
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    <button className="btn-input-image" type="button">
                      Attach Thumbnail
                      <img
                        src={InputFile}
                        style={{
                          marginLeft: "10px",
                          height: "21px",
                          width: "15px",
                        }}
                      />
                    </button>
                    <input
                      type="file"
                      name="thumbnail"
                      onChange={handleInputChange}
                      style={{
                        cursor: "contextMenu",
                      }}
                    />
                  </div>
                </Col>
              </Row>
              <Form.Control
                onChange={handleInputChange}
                name="year"
                type="number"
                placeholder="Year"
                required
                style={{
                  margin: "0 0 15px 0",
                  background: "#444444",
                  color: "#CBCECF",
                }}
                className="input1"
              />
              <select
                onChange={handleInputChange}
                name="artistId"
                style={{
                  width: "100%",
                  height: "38px",
                  borderRadius: "5px",
                  background: "#444444",
                  color: "#CBCECF",
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
                  <div
                    className="upload-btn-wrapper"
                    style={{
                      alignItems: "center",
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    <button className="btn-input-image" type="button">
                      Attach Music File
                    </button>
                    <input
                      type="file"
                      name="attache"
                      onChange={handleInputChange}
                      style={{
                        cursor: "contextMenu",
                      }}
                    />
                  </div>
                </Col>
                {!formData.attache[0] ? (
                  <></>
                ) : (
                  <>
                    {console.log(previewNameFileAttache)}
                    <Col sm={9}>
                      <Form.Control
                        type="text"
                        placeholder="Name file of attache"
                        value={formData.attache[0].name}
                        readOnly
                        className="input1"
                        style={{
                          padding: "0 0 0 10px",
                          margin: "0 0 15px 0",
                          background: "#161616",
                          color: "#CBCECF",
                        }}
                      />
                    </Col>
                  </>
                )}
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
                    <>
                      <p
                        style={{
                          color: "#CBCECF",
                          textAlign: "center",
                        }}
                      >
                        Priview Thumbnail
                      </p>
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
                    </>
                  )}
                </Col>
              </Row>
            </Form>
            {/* <pre style={{ color: "#fff" }}>
              {JSON.stringify(formData, null, 3)}
            </pre> */}
            {/* {console.log("FormData: ", formData)} */}
          </>
        )}
      </Container>
    </div>
  );
}
