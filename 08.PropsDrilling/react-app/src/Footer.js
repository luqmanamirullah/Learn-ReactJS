import React from 'react'

const Footer = ({length}) => {
  return (
    <footer>
        <p>{length} {length <= 1 ? 'item' : 'items'} list</p>
    </footer>
  )
}

export default Footer