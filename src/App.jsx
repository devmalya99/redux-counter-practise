import { useState } from 'react'
import { Provider } from 'react-redux';
import Cart from './Components/Cart'
import './App.css'
import  store  from './app/store';
import Heading from './Components/Heading';
function App() {


  return (
    <Provider store={store}>
     <div className="grid h-80 font-bold place-items-center container-on-hover bg-white shadow-lg rounded p-6 m-4 max-w-sm mx-auto" 
     >
      <Heading />
      <Cart />
     </div>
    </Provider>
  )
}

export default App
