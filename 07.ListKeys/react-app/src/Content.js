import React, { useState } from 'react'
import './Content.css'
import {AiOutlineDelete} from 'react-icons/ai';
const Content = () => {
    const [items, setItems] = useState([
        {
            id: 1,
            checked: false,
            item: "White stone"
        },
        {
            id: 2,
            checked: false,
            item: "Black stone"
        },
        {
            id: 3,
            checked: false,
            item: "Wood"
        },
    ]);

    const handleClick = (id) => {
        const listItems = items.map((item) => item.id === id ? {...item, checked: !item.checked} : item);
        setItems(listItems);
        localStorage.setItem('itemList', JSON.stringify(listItems));
    };

    const handleDelete = (id) => {
        const listItems = items.filter((item) => item.id !== id);
        setItems(listItems)
        localStorage.setItem('itemList', JSON.stringify(listItems))
    }
  return (
    <main>
        <h1>List and Keys in ReactJS</h1>
        {items.length ? (
            <ul>
                {items.map((item) => (
                    <li className='item' key={item.id}>
                        <input type="checkbox" checked={item.checked} onChange={() => handleClick(item.id)}/>
                        <label onDoubleClick={() => handleClick(item.id)} style={item.checked ? {textDecoration: 'line-through'} : null} >{item.item}</label>
                        <AiOutlineDelete role='button' tabIndex={0} size={20} cursor='pointer'
                        onClick={() => handleDelete(item.id)}/>

                    </li>
                ))}
            </ul>
        ) : (
            <p>You don't have a list</p>
        )}
    </main>
  )
}

export default Content