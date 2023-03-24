import React from "react";
import { Row, Col } from "react-bootstrap";
import FilteredCategory from "../filteredCategory/FilteredCategory";
import Header from "../header/Header";

const Layout = ({
  children,
  onSearch,
  handleCategoryChange,
  selectedCategory,
  likedPostsHandler,
  likedPosts,
}) => {
  return (
    <Row className="m-2">
      <Col>
        <Header onSearch={onSearch} likedPosts={likedPosts} />
      </Col>
      <Row className="d-flex flex-row">
        <Col xs={3}>
          <FilteredCategory
            likedPostsHandler={likedPostsHandler}
            handleCategoryChange={handleCategoryChange}
            selectedCategory={selectedCategory}
          />
        </Col>
        <Col className="mx-5">{children}</Col>
      </Row>
    </Row>
  );
};

export default Layout;
