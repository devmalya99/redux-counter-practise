
import React from 'react'
import './Button.css'
import { useDispatch } from 'react-redux';
import { addItem } from '../app/Features/cartSlice';
import { useSelector } from 'react-redux';
import { selectCount } from '../app/Features/cartSlice';



const AddButton = () => {
  const dispatch=useDispatch();
  const count=useSelector(selectCount)
  return (    
<button 
 onClick={() => dispatch(addItem())}
className="glow-on-hover mb-5" type="button ">
    Add here to increase count from {count}
</button>
  )
}

export default AddButton