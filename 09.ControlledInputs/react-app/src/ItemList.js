import React from 'react'
import Item from './Item';
import './Content.css'

const ItemList = ({items, handleClick, handleDelete}) => {
  return (
    <ul>
        {items.map((item) => (
            <Item 
                key={item.id}
                item={item} 
                handleClick={handleClick}
                handleDelete={handleDelete}
            />
        ))}
    </ul>

  )
}

export default ItemList