

import React from 'react'
import './Button.css'
import { useDispatch, useSelector } from 'react-redux';
import { removeItem } from '../app/Features/cartSlice';
import { selectCount } from '../app/Features/cartSlice';
const RemoveButton = () => {
  const dispatch = useDispatch()
  const count = useSelector(selectCount)
  return (
    <div>
        <button
         onClick={() => dispatch(removeItem())} 
        className="glow-on-hover" type="button">
     Click here to decrease the count to {count-1}
</button>
    </div>
  )
}

export default RemoveButton