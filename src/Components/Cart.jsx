

import React from 'react'
import AddButton from './AddButton'
import RemoveButton from './RemoveButton'
import { useSelector } from 'react-redux';
import { selectCount } from '../app/Features/cartSlice';


const Cart = () => {

   const count=useSelector(selectCount)
    return (
    <div>
        <div>
          <p>Cart Item count is {count}</p>
        
      </div>
      <AddButton />
      <RemoveButton />

    </div>
  )
}

export default Cart