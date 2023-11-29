import React, { useEffect, useState } from 'react'

function Effect2() {
    useEffect(() => {
      fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => console.log(json))
    }, [])
    let [counter, setCounter] = useState(0)
    return (
      <div>
        <button onClick={() => setCounter(counter - 1)}>-</button>
        <i>   {counter}   </i>
        <button onClick={() => setCounter(counter + 1)}>+</button>
      </div>)
}

export default Effect2