import React, { useContext } from "react";
import { Container, Card, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

import { DataProducts } from "../fakeData/Product";
import { AppContext } from "../contexts/GlobalContext";

export default function Product() {
  // console.log("FakeDataProduct: ", DataProducts);
  const [state, dispatch] = useContext(AppContext);

  const handleAddToCart = (id) => {
    const filterProductById = DataProducts.find((product) => product.id === id);
    dispatch({
      type: "ADD_CART",
      payload: filterProductById,
    });
    // console.log("ID Product: ", id);
  };

  return (
    <div>
      <Container style={{ marginTop: "100px" }}>
        <h3 style={{ color: "#b8b8b8", marginBottom: "30px" }}>Products</h3>
        <Row style={{ marginLeft: "2px" }}>
          {DataProducts.map((products) => (
            <Col md={3} style={{ marginBottom: "15px", paddingLeft: "2px" }}>
              <Card>
                <Card.Img
                  variant="top"
                  src={products.imageUrl}
                  style={{ height: "210px", width: "auto", objectFit: "cover" }}
                />
                <Card.Body>
                  <Card.Title>{products.name}</Card.Title>
                  <Card.Text>{products.description}</Card.Text>
                </Card.Body>
                <Card.Footer>
                  <Button
                    block
                    variant="success"
                    onClick={() => handleAddToCart(products.id)}
                  >
                    Add to cart
                  </Button>
                </Card.Footer>
              </Card>
            </Col>
          ))}
        </Row>
        {/* <pre style={{ color: "#b8b8b8" }}>{JSON.stringify(state, null, 2)}</pre> */}
      </Container>
    </div>
  );
}
