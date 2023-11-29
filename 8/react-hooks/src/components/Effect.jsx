import React, { useEffect, useState } from 'react'


function Effect() {
    let [foodCount, setFoodCount] = useState(5)
    let [queue, setQueue] = useState(0)
    useEffect(() => {
      if(foodCount <= 0) {
        alert('Food finished!')
      }
    })
    return (
    <div>
        <h1>Food Count</h1>
        <button onClick={() => setFoodCount(foodCount - 1)}>-</button>
        <b>{foodCount}</b>
        <button onClick={() => setFoodCount(foodCount + 1)}>+</button>
        <br />
        <h1>Queue Count</h1>
        <button onClick={() => setQueue(queue - 1)}>-</button>
        <b>{queue}</b>
        <button onClick={() => setQueue(queue + 1)}>+</button>
    </div>
  )
}

export default Effect