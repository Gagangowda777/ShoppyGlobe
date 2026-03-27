import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import productReducer from "./productSlice";

// store for managing cart and product state
export const store = configureStore({
  reducer: {
    cart: cartReducer,
    products: productReducer,
  },
});