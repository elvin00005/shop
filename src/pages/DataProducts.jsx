import React, { useEffect, useState } from "react";
import Layout from "../components/layout/Layout";
import { Button, Card, ListGroup } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { busketActions } from "../store/sliceBusket";

const Main = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(`https://fakestoreapi.com/products/${id}`);
      const data = await res.json();
      setPost(data);
    };
    fetchData();
  }, [id]);

  return (
    <Layout>
      {post && (
        <div className="d-flex justify-content-center align-items-center">
          <Card
            style={{ width: "23rem", height: "fit-content" }}
            className="border border-dark p-3 bg-light"
          >
            <Card.Img variant="top" height={"300px"} src={`${post.image}`} />
            <Card.Body>
              <Card.Title>
                <b>{post.title}</b>
              </Card.Title>
              <Card.Text>{post.description}</Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <Card.Text className="fw-bolder text-center">
                {post.category}
              </Card.Text>
              <Card.Text className="fw-bolder text-center">
                {post.price}$
              </Card.Text>
            </ListGroup>
            <Card.Body className="d-flex align-items-center justify-content-center ">
              <Button
                onClick={() => dispatch(busketActions.addItemToBusket(post))}
              >
                Bye
              </Button>
            </Card.Body>
          </Card>
        </div>
      )}
    </Layout>
  );
};

export default Main;
