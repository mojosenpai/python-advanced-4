import React from 'react'

function Button({onClick, text, color}) {
  
  return (
    <button onClick={onClick} style={{backgroundColor: color}} className='btn'>{text}</button>
  )
}

export default Button