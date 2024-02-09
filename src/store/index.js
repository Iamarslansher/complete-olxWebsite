import { configureStore } from "@reduxjs/toolkit";
import addToCartSlice from "./addToCartSlice";

const store = configureStore({
  reducer: addToCartSlice.reducer,
});

export default store;
