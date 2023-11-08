import React from 'react'

function Text(props) {
  return (
    <div>
        <h3>Intro</h3>
        <p>Welcome to {props.name}'s blog, I'm {props.age} years old</p>
    </div>
  )
}

export default Text