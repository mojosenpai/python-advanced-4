import React from 'react'
import { useState } from 'react'

function State() {
    let [counter, setCounter] = useState(0)
    return (
      <div>
        <button onClick={() => setCounter(counter - 1)}>-</button>
        <i>   {counter}   </i>
        <button onClick={() => setCounter(counter + 1)}>+</button>
      </div>
    )
}

export default State