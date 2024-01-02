import React from 'react'

const BoxColor = ({color, isDarkText, toHex}) => {
  return (
    <div 
        className="color-box" 
        style={{
        backgroundColor: color.length ? color : "white",
        color:  isDarkText ? 'white' : 'black' 
        }} 
    >
        <p>{toHex(color) !== undefined? color : 'Color is undefined'}</p>
        <p>{toHex(color)}</p>
    </div>

  )
}

export default BoxColor