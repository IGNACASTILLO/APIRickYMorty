import React from 'react'
import { useState } from 'react';



const UseState = () => {
    const [state,setState] = useState(0);
    


  return (
    <>

    
    <button onClick={()=> setState(state+1)}>+</button>
    <h1>{state}</h1>
    <button onClick={()=> setState(state-1)}>-</button>
    </>
  )
}

export default UseState