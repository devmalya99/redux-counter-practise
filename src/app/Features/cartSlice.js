// src/features/cart/cartSlice.js
import { createSlice } from '@reduxjs/toolkit';

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    value: 0,
  },
  reducers: {
    addItem: state => {
      state.value += 1
    },
    removeItem: state => {
      if (state.value > 0) { 
        state.value -= 1
      }
    },
  },
});

export const { addItem, removeItem } = cartSlice.actions;
export const selectCount = state => state.cart.value
export default cartSlice.reducer;