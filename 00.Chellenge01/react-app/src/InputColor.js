import React from 'react'

const InputColor = ({handleValue}) => {
  return (
    <input 
        autoFocus
        type="text" 
        className="input-color"
        onChange={(e) => handleValue(e.target.value)}
        placeholder="Add color name"
    />
  )
}

export default InputColor