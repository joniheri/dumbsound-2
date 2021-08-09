import React, { useEffect, useState, useContext } from "react";
import { useParams, Link } from "react-router-dom";
import {
  Button,
  Card,
  Col,
  Container,
  Image,
  ListGroup,
  Row,
} from "react-bootstrap";

import { DataProducts } from "../fakeData/Product";
import { AppContext } from "../contexts/GlobalContext";

export default function DetailProduct() {
  const [state, dispatch] = useContext(AppContext);

  const handleAddToCart = (id) => {
    const filterProductById = DataProducts.find((product) => product.id === id);
    dispatch({
      type: "ADD_CART",
      payload: filterProductById,
    });
    // console.log("ID Product: ", id);
  };

  const [product, setProduct] = useState(null);

  let { idParam } = useParams();

  console.log("idParams: ", idParam);

  useEffect(() => {
    const productById = DataProducts.find((product) => product.id === idParam);
    console.log("productById: ", productById);
    setProduct(productById);
  }, []);

  console.log("DataProductFindOne: ", product);

  return (
    <div>
      <Container style={{ marginTop: "100px" }}>
        <h3 style={{ color: "#b8b8b8", marginBottom: "30px" }}>
          Detail Products with ID: {idParam}
        </h3>
        {!product ? (
          <h3 style={{ color: "#b8b8b8" }}>Loading</h3>
        ) : (
          <>
            <Row style={{ marginLeft: "2px" }}>
              <Card>
                <Card.Img
                  variant="top"
                  src={product.imageUrl}
                  style={{
                    height: "210px",
                    width: "auto",
                    objectFit: "cover",
                    cursor: "pointer",
                  }}
                />
                <Card.Body>
                  <Card.Title>{product.name}</Card.Title>
                  <Card.Text>{product.description}</Card.Text>
                </Card.Body>
                <Card.Footer>
                  <Button
                    block
                    variant="success"
                    onClick={() => handleAddToCart(product.id)}
                  >
                    Add to cart
                  </Button>
                </Card.Footer>
              </Card>
            </Row>
          </>
        )}
      </Container>
    </div>
  );
}
