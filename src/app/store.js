import { configureStore } from "@reduxjs/toolkit";
// This line is importing the configureStore function from Redux Toolkit. configureStore simplifies the store setup process and 
// sets up middleware with good default values. It also provides a convenient way to create a store with a single reducer.

import cartReducer from './Features/cartSlice';
// This line is importing the reducer function from the cart slice file (cartSlice.js). 
// In Redux, a reducer function dictates how the state in the store changes in response to dispatched actions.

 const store = configureStore(
    {
        reducer:
        {
           cart: cartReducer
        }
    }
)

export default store