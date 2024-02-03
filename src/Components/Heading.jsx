

import React from 'react'
import { useSelector } from 'react-redux';
import { selectCount } from "../app/Features/cartSlice";

const Heading = () => {
const count=useSelector(selectCount)
  return (
    <div>Currently Cart count is {count}</div>
  )
}

export default Heading