import React from "react";
import {
  Container,
  Card,
  CardDeck,
  CardGroup,
  Row,
  Col,
  Button,
} from "react-bootstrap";

import { DataProducts } from "../fakeData/Product";

export default function Product() {
  // console.log("FakeDataProduct: ", DataProducts);
  return (
    <div>
      <Container style={{ marginTop: "100px" }}>
        <h3 style={{ color: "#b8b8b8", marginBottom: "30px" }}>Products</h3>
        <Row>
          {DataProducts.map((products) => (
            <Col sm={3}>
              <Card style={{ marginBottom: "20px" }}>
                <Card.Img
                  variant="top"
                  src={products.imageUrl}
                  style={{ height: "200px", width: "auto", objectFit: "cover" }}
                />
                <Card.Body>
                  <Card.Title>{products.name}</Card.Title>
                  <Card.Text>{products.description}</Card.Text>
                  <Button variant="success">Action</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}
