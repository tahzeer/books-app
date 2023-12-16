import React from "react";
import axios from "axios";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Update = () => {
  const [book, setBook] = useState({
    title: "",
    desc: "",
    price: null,
    cover: "",
  });

  const navigate = useNavigate();
  const location = useLocation();

  const bookId = location.pathname.split("/")[2];

  const handelChange = (e) => {
    setBook((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handelClick = async (e) => {
    e.preventDefault();
    try {
      await axios.put("http://localhost:8800/books/" + bookId, book);
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="form">
      <h1>Update the Book</h1>
      <input
        type="text"
        placeholder="title"
        onChange={handelChange}
        name="title"
      />
      <input
        type="text"
        placeholder="desc"
        onChange={handelChange}
        name="desc"
      />
      <input
        type="number"
        placeholder="price"
        onChange={handelChange}
        name="price"
      />
      <input
        type="text"
        placeholder="cover"
        onChange={handelChange}
        name="cover"
      />
      <button onClick={handelClick}>Update</button>
    </div>
  );
};

export default Update;
