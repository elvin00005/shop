import React, { useState } from "react";
import { Form } from "react-bootstrap";
import Basket from "../basket/Basket";
import LikedProducts from "../likedProducts/LikedProducts";

const Header = ({ onSearch, likedPosts }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchInputChange = (event) => {
    setSearchTerm(event.target.value);
    onSearch(event.target.value);
  };

  return (
    <div className="bg-black my-2 p-2 d-flex justify-content-between align-items-center">
      <h1 className=" text-white">Shopp</h1>
      <Form.Control
        className="w-50"
        type="text"
        placeholder="Search Products"
        value={searchTerm}
        onChange={handleSearchInputChange}
      />
      <Basket />
      {/* <LikedProducts likedPosts={likedPosts} /> */}
    </div>
  );
};

export default Header;
