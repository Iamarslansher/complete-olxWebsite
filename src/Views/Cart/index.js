import React from "react";
import "./index.css";
import { useSelector, useDispatch } from "react-redux";
import { removeToCart } from "../../store/addToCartSlice";

import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function Cart() {
  const cartItem = useSelector((state) => state.cartReducer.addToCart);
  const dispatch = useDispatch();

  if (cartItem.length === 0) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          backgroundColor: "#96e6a1",
        }}
      >
        <img
          src="https://cdni.iconscout.com/illustration/premium/thumb/empty-cart-7359557-6024626.png"
          alt=""
        />
      </div>
    );
  }
  return (
    <div className="cart-container">
      {cartItem.map((item) => {
        return (
          <Card className="cart-card">
            <Card.Img variant="top" className="cart-img" src={item.image} />
            <Card.Body>
              <Card.Title className="cart-title">{item.title}</Card.Title>
              <Card.Text className="cart-price">
                <h3>Price : Rs. {item.price}/-</h3>
              </Card.Text>
              <div className="cart-btnDiv">
                <Button
                  variant="primary"
                  className="cart-btn"
                  onClick={() => dispatch(removeToCart(item.id))}
                >
                  Remove
                </Button>
              </div>
            </Card.Body>
          </Card>
        );
      })}
    </div>
  );
}

export default Cart;
