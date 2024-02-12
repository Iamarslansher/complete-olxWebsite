import { combineReducers } from "redux";
import addToCartSlice from "./addToCartSlice";
import themeSlice from "./themeSlice";

const rootReducer = combineReducers({
  cartReducer: addToCartSlice.reducer,
  themeReducer: themeSlice.reducer,
});

export default rootReducer;
