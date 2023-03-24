import React, { useState } from "react";
import { Button, Card, ListGroup, Modal } from "react-bootstrap";
import { Link } from "react-router-dom";

const LikedProducts = ({ likedPosts }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        liked
      </Button>
      <Modal show={show} onHide={handleClose} dialogClassName="modal-90w">
        <Modal.Header closeButton>
          <Modal.Title>Liked products</Modal.Title>
        </Modal.Header>
        <Modal.Body className="d-flex flex-wrap">
          {likedPosts.map((post) => (
            <Card
              key={post.id}
              style={{ height: "400px", width: "200px" }}
              className="border border-dark m-2"
            >
              <Card.Img
                variant="top"
                height={"100px"}
                width={"100px"}
                src={`${post.image}`}
              />
              <Card.Body>
                <Card.Title>
                  <b>{post.title}</b>
                </Card.Title>
              </Card.Body>
              <ListGroup className="list-group-flush">
                <Card.Text className="fw-bolder text-center">
                  {post.category}
                </Card.Text>
                <Card.Text className="fw-bolder text-center">
                  {post.price}$
                </Card.Text>
              </ListGroup>
              <Card.Body className="d-flex align-items-center justify-content-between ">
                {/* <Button
                  onClick={() =>
                    addItemHandler({ title, price, image, category, id })
                  }
                >
                  Bye
                </Button> */}
                <Link to={`products/${post.id}`}>Learn more</Link>
              </Card.Body>
            </Card>
          ))}
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

export default LikedProducts;
