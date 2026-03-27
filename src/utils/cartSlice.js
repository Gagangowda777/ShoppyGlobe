import { createSlice } from "@reduxjs/toolkit";

const initialState = { items: [], };

// cart slice for managing cart state
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: { addToCart: (state, action) => {
        const existing = state.items.find(
        (item) => item.id === action.payload.id);

      if (existing) {
        existing.quantity += 1;
      } 
      else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
    },

    removeFromCart: (state, action) => {
      state.items = state.items.filter(
        (item) => item.id !== action.payload);
    },

    incrementQuantity: (state, action) => {
      const item = state.items.find((item) => item.id === action.payload);
      if (item) {
        item.quantity += 1;
      }
    },

    decrementQuantity: (state, action) => {
      const item = state.items.find((item) => item.id === action.payload);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
      }
    },

    clearCart: (state) => {
      state.items = [];
    },
  },
});

export const { addToCart, removeFromCart, clearCart, incrementQuantity, decrementQuantity } = cartSlice.actions;

export default cartSlice.reducer