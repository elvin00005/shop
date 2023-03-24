import React from "react";
import { Button, Card, ListGroup } from "react-bootstrap";
import { useDispatch } from "react-redux";

import { Link } from "react-router-dom";
import { busketActions } from "../../store/sliceBusket";

const Products = ({ title, price, image, category, id, likedPostsHandler }) => {
  const dispatch = useDispatch();
  const addItemHandler = (item) => {
    dispatch(busketActions.addItemToBusket(item));
  };
  return (
    <Card style={{ height: "550px" }} className="border border-dark ">
      <Card.Img variant="top" height={"200px"} src={`${image}`} />
      <Card.Body>
        <Card.Title>
          <b>{title}</b>
        </Card.Title>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <Card.Text className="fw-bolder text-center">{category}</Card.Text>
        <Card.Text className="fw-bolder text-center">{price}$</Card.Text>
      </ListGroup>
      <Card.Body className="d-flex align-items-center justify-content-center gap-1 ">
        <Button
          onClick={() => addItemHandler({ title, price, image, category, id })}
        >
          Add to cart
        </Button>

        <Link to={`products/${id}`}>Learn more</Link>

        {/* <Button
          onClick={() =>
            likedPostsHandler({ title, price, image, category, id })
          }
        >
          Add in Liked
        </Button> */}
      </Card.Body>
    </Card>
  );
};

export default Products;
