# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


# Your project structure for redux counter app is

- src
  - app
    - store.js
  - features
    - cart
      - cartSlice.js
  - components
    - Cart.js
    - AddButton.js
    - RemoveButton.js
  - App.js
  - index.js

  # Step 1: Create Your Redux Store

Firstly, start by setting up your Redux store. You'll need to create a store.js file inside your src/app folder:

// src/app/store.js
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/cart/cartSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer
  }
});

# Step 2: Create a Redux Slice for the Cart

The configureStore function sets up the Redux store with good defaults including Redux devtools extension. Then, you'll import the cartSlice.js reducer and add it to your store's reducer field.

Next, create a new cartSlice using createSlice function from Redux Toolkit in cartSlice.js file:


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

export default cartSlice.reducer;

# Step 3: Add Redux to Your App

Now you're ready to use Redux in your React app. Begin by adding the Provider component to your App.js file:

// src/App.js
import React from 'react';
import { Provider } from 'react-redux';
import { store } from './app/store';
import Cart from './components/Cart';

function App() {
  return (
    <Provider store={store}>
      <Cart />
    </Provider>
  );
}

export default App;#   r e d u x - c o u n t e r - p r a c t i s e  
 