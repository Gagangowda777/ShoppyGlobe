import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [], 
  searchTerm: "",
};

// product slice for managing product state
const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload;
    },

    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
    },
  },
});

export const { setProducts, setSearchTerm } =
  productSlice.actions;

export default productSlice.reducer