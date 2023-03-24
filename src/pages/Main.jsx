import React, { useEffect, useState } from "react";
import Products from "../components/product/Products";
import Layout from "../components/layout/Layout";
import { Row, Col } from "react-bootstrap";

const Main = () => {
  const [posts, setPosts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [likedPosts, setLikedPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("https://fakestoreapi.com/products");
        const data = await res.json();
        setPosts(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  const likedPostsHandler = (post) => {
    setLikedPosts((prev) => [...prev, { ...post }]);
  };
  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const handleSearch = (searchTerm) => {
    setSearchTerm(searchTerm);
  };

  const filteredPosts = selectedCategory
    ? posts.filter((post) => post.category === selectedCategory)
    : posts;

  const searchedPosts = filteredPosts.filter((post) =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <Layout
        onSearch={handleSearch}
        handleCategoryChange={handleCategoryChange}
        selectedCategory={selectedCategory}
        likedPostsHandler={likedPostsHandler}
        likedPosts={likedPosts}
      >
        <Row className="bg-light">
          {searchedPosts.map((post) => (
            <Col key={post.id} className="p-3 m-4" xs={3}>
              <Products
                likedPostsHandler={likedPostsHandler}
                title={post.title}
                description={post.description}
                price={post.price}
                image={post.image}
                category={post.category}
                id={post.id}
              />
            </Col>
          ))}
        </Row>
      </Layout>
    </>
  );
};

export default Main;
