import React, { useState } from "react";
import { Button, Col, Dropdown, Modal, Row } from "react-bootstrap";

import LikedProducts from "../likedProducts/LikedProducts";

const FilteredCategory = ({ handleCategoryChange, selectedCategory }) => {
  return (
    <Row className="d-flex flex-column">
      <Col className="p-3">
        <h2 className="text-white"> Filter by category</h2>
        <Dropdown>
          <Dropdown.Toggle variant="primary" id="dropdown-basic">
            {selectedCategory || "All Categories"}
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item onClick={() => handleCategoryChange("")}>
              All Categories
            </Dropdown.Item>
            <Dropdown.Item onClick={() => handleCategoryChange("electronics")}>
              Electronics
            </Dropdown.Item>
            <Dropdown.Item onClick={() => handleCategoryChange("jewelery")}>
              Jewelery
            </Dropdown.Item>
            <Dropdown.Item
              onClick={() => handleCategoryChange("men's clothing")}
            >
              Men's Clothing
            </Dropdown.Item>
            <Dropdown.Item
              onClick={() => handleCategoryChange("women's clothing")}
            >
              Women's Clothing
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Col>
    </Row>
  );
};

export default FilteredCategory;
