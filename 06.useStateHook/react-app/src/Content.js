import React, { useState } from 'react'
import './Content.css'
const Content = () => {
    const [name, setName] = useState('World');
    const changeName = () => {
        const names = ["Leight", "Mr.L", "Luqman", "Uman"];
        const int = Math.floor(Math.random() * 4);
        setName(names[int]);
    }

    const [count, setCount] = useState(0);
    const handleCount = (e) => {
        if (count >= 0) {
            if (e.target.innerText === '-') {
                setCount(count - 1)
            } else {
                setCount(count + 1)
            }
        } else {
            setCount(0)
        }
    }
  return (
    <div className='content'>
        <p>Hello {name}</p>
        <button type='button' onClick={changeName}>Change name</button>
        <br /><br />
        <p>Increase and Decrease a number with useState</p>
        <div className='control-number'>
            <button type='button' onClick={(e) => handleCount(e)}>-</button>
            <span>{count}</span>
            <button type='button' onClick={(e) => handleCount(e)}>+</button>
        </div>
    </div>
  )
}

export default Content