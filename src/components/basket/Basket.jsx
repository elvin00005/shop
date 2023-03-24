import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button, Card, Table, Modal } from "react-bootstrap";

import { busketActions } from "../../store/sliceBusket";

const Basket = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const dispatch = useDispatch();
  const basketItems = useSelector((state) => state.busket.items);
  const totalAmount = useSelector((state) => state.busket.totalAmount);
  const quantity = useSelector((state) => state.busket.quantity);

  const addItemHandler = (item) => {
    dispatch(busketActions.addItemToBusket(item));
  };

  const removeItemHandler = (id) => {
    dispatch(busketActions.removeItemFromBusket(id));
  };

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        <div>{quantity}</div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-basket2"
          viewBox="0 0 16 16"
        >
          <path d="M4 10a1 1 0 0 1 2 0v2a1 1 0 0 1-2 0v-2zm3 0a1 1 0 0 1 2 0v2a1 1 0 0 1-2 0v-2zm3 0a1 1 0 1 1 2 0v2a1 1 0 0 1-2 0v-2z" />
          <path d="M5.757 1.071a.5.5 0 0 1 .172.686L3.383 6h9.234L10.07 1.757a.5.5 0 1 1 .858-.514L13.783 6H15.5a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-.623l-1.844 6.456a.75.75 0 0 1-.722.544H3.69a.75.75 0 0 1-.722-.544L1.123 8H.5a.5.5 0 0 1-.5-.5v-1A.5.5 0 0 1 .5 6h1.717L5.07 1.243a.5.5 0 0 1 .686-.172zM2.163 8l1.714 6h8.246l1.714-6H2.163z" />
        </svg>
      </Button>
      <Modal show={show} onHide={handleClose} dialogClassName="modal-90w">
        <Modal.Header closeButton>
          <Modal.Title>Basket</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Product</th>
                <th>Product Name</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {basketItems.map((item) => (
                <tr key={item.id}>
                  <td>
                    <Card style={{ width: "fit-content" }}>
                      <Card.Img height={"100px"} src={item.image} />
                    </Card>
                  </td>
                  <td>{item.title}</td>
                  <td>${item.price.toFixed(2)}</td>
                  <td>{item.quantity}</td>
                  <td>${item.totalPrice.toFixed(2)}</td>
                  <td>
                    <Button
                      variant="danger"
                      onClick={() => removeItemHandler(item.id)}
                    >
                      -
                    </Button>
                    <Button
                      variant="success"
                      onClick={() => addItemHandler(item)}
                    >
                      +
                    </Button>
                  </td>
                </tr>
              ))}
              <tr className="d-flex justify-content-between">
                <td colSpan="4" className="text-end">
                  Total:
                </td>
                <td colSpan="2">${totalAmount.toFixed(2)}</td>
              </tr>
            </tbody>
          </Table>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Basket;
