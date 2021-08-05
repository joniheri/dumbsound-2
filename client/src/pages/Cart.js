import React, { useContext } from "react";
import { Col, Container, Image, ListGroup, Row, Button } from "react-bootstrap";

import { AppContext } from "../contexts/GlobalContext";
import { DataProducts } from "../fakeData/Product";

export default function Cart() {
  const [state, dispatch] = useContext(AppContext);

  const handleAddToCart = (id) => {
    const filterProductById = DataProducts.find((product) => product.id === id);
    dispatch({
      type: "ADD_CART",
      payload: filterProductById,
    });
  };

  const handleRemoveCartItem = (id, qty) => {
    const filterProductById = DataProducts.find((product) => product.id === id);
    if (qty > 1) {
      dispatch({
        type: "REMOVE_CART_ITEM",
        payload: filterProductById,
      });
    } else {
      dispatch({
        type: "REMOVE_CART",
        payload: {
          id,
        },
      });
    }
  };

  const handleRemoveCart = (id) => {
    dispatch({
      type: "REMOVE_CART",
      payload: {
        id,
      },
    });
  };

  return (
    <div>
      <Container style={{ marginTop: "100px" }}>
        <h3 style={{ color: "#b8b8b8", marginBottom: "30px" }}>Cart Page</h3>
        <ListGroup>
          {state.carts.map((product) => (
            <ListGroup.Item variant="dark">
              <Row>
                <Col md={3}>
                  <Image
                    rounded
                    src={product.imageUrl}
                    style={{
                      height: "180px",
                      width: "230px",
                      objectFit: "cover",
                    }}
                  />
                </Col>
                <Col md={9}>
                  <h3>{product.name}</h3>
                  <p>{product.description}</p>
                  <p>
                    Jumlah item:{" "}
                    <span
                      onClick={() =>
                        handleRemoveCartItem(product.id, product.qty)
                      }
                      className="btn btn-sm"
                      style={{
                        cursor: "pointer",
                        color: "#b8b8b8",
                        background: "#6d737e",
                        paddingLeft: "9px",
                        paddingRight: "9px",
                      }}
                    >
                      -
                    </span>{" "}
                    {product.qty}{" "}
                    <span
                      onClick={() => handleAddToCart(product.id)}
                      className="btn btn-sm"
                      style={{
                        cursor: "pointer",
                        color: "#b8b8b8",
                        background: "#176035",
                        paddingLeft: "9px",
                        paddingRight: "9px",
                      }}
                    >
                      +
                    </span>
                  </p>
                  <div>
                    <Button
                      variant="secondary"
                      onClick={() => handleRemoveCart(product.id)}
                    >
                      Hapus
                    </Button>
                  </div>
                </Col>
              </Row>
            </ListGroup.Item>
          ))}
        </ListGroup>
      </Container>
    </div>
  );
}
