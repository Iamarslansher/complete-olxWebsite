import { createSlice } from "@reduxjs/toolkit";

const addToCartSlice = createSlice({
  name: "addToCart",
  initialState: {
    addToCart: [],
  },
  reducers: {
    setToCart: (state, data) => {
      let cartData = data.payload;
      state.addToCart.push(cartData);
    },
    removeToCart: (state, data) => {
      const newCart = state.addToCart.filter((item) => {
        return data.payload !== item.id;
      });
      state.addToCart = newCart;
    },
  },
});

export const { setToCart, removeToCart } = addToCartSlice.actions;

export default addToCartSlice;
