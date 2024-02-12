import React from "react";
import "./index.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { itemDetail } from "../../config/firebase";

function Additem() {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");

  const submit = async () => {
    if (!title || !description || !price || !image) {
      return alert("Please fill all detail");
    } else {
      await itemDetail({ title, description, price, image }, navigate);
    }
  };

  return (
    <div>
      <div className="page-content">
        <div className="form-v5-content">
          <form className="form-detail">
            <h2>Item Detail</h2>
            <div className="form-row">
              <label htmlFor="full-name">Title</label>
              <input
                type="text"
                name="full-name"
                id="full-name"
                className="input-text"
                placeholder="Title"
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div className="form-row">
              <label htmlFor="your-email">Description</label>
              <input
                type="text"
                name="your-email"
                id="your-email"
                className="input-text"
                placeholder="description"
                onChange={(e) => setDescription(e.target.value)}
              />
              <i className="fas fa-envelope" />
            </div>
            <div className="form-row">
              <label htmlFor="password">Price</label>
              <input
                type="number"
                name="password"
                id="password"
                className="input-text"
                placeholder="price"
                onChange={(e) => setPrice(e.target.value)}
              />
              <i className="fas fa-lock" />
            </div>

            <div className="form-row">
              <input
                type="file"
                className="input-text"
                onChange={(e) => setImage([e.target.files])}
                multiple
              />
            </div>
          </form>
          <div className="submitBtn">
            <button onClick={submit} className="submit">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Additem;
