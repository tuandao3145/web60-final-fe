import React, { useContext, useState } from "react";
import { Badge, ListGroup } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Modal from "react-bootstrap/Modal";
import Row from "react-bootstrap/Row";

//import { BsFillCartCheckFill } from "react-icons/bs";
import { ProductContext } from "../../context/ProductContext";

export default function ProductCart() {
  const [show, setShow] = useState(false);

  const {
    productInCart,
    inCreaseProduct,
    deCreaseProduct,
    deleteProductInCart,
  } = useContext(ProductContext);

  const showModal = () => {
    setShow(true);
  };
  const closeModal = () => {
    setShow(false);
  };
  const closeFinalModal = () => {
   setShow(false)
   alert('ORDER')
  }

  let price = 0;
  let total = 0;
  let totalPrice = 0;
  for (let product of productInCart) {
    total = total + product.amount;
    price = product.price * product.amount;
    totalPrice = totalPrice + price;
  }
  return (
    <>
      <Container>
        <Button variant="primary" onClick={showModal}>
          <Badge className="badge" >
            Show Order: {total}
          </Badge>
        </Button>
        <Modal
          show={show}
          onHide={closeModal}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>Your Cart</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <ListGroup>
              {productInCart.map((product, index) => {
                return (
                  <ListGroup.Item key={index}>
                    <Row className="cart-item">
                      <Col md={3} className="img-header">
                        <img
                          src={product.imageMain}
                          className="img-food w-100"
                          alt=""
                        ></img>
                      </Col>
                      <Col sm={6}>
                        <h3>{product.product}</h3>
                        <div>
                          <Badge bg="primary" className="me-4">
                            ${product.price}
                          </Badge>
                          <Badge bg="light" text="dark" className="me-4">
                            amount : {product.amount}
                          </Badge>
                        </div>
                        <Button
                          className="mt-2"
                          size="sm"
                          onClick={() => deleteProductInCart(product.id)}
                        >
                          Delete
                        </Button>
                      </Col>
                      <Col>
                        <Button
                          variant="primary"
                          size="sm"
                          className="me-2"
                          onClick={() => deCreaseProduct(product.id)}
                        >
                          -
                        </Button>
                        <Button
                          variant="primary"
                          size="sm"
                          onClick={() => inCreaseProduct(product.id)}
                        >
                          +
                        </Button>
                      </Col>
                    </Row>
                  </ListGroup.Item>
                );
              })}
            </ListGroup>
            <b className="text-danger mt-3">Total price : {totalPrice}</b>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={closeModal}>
              Cancel
            </Button>
            <Button variant="primary" onClick={closeFinalModal}>
              Buy
            </Button>
          </Modal.Footer>
        </Modal>
      </Container>
     
    </>
  );
}
