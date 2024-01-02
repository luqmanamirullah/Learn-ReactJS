import React from 'react'
import './Content.css';
const Content = () => {
    const handleClick = () => {
        const name = prompt("Wait, what's your name?");
        alert(`Ok, Hello ${name}`);
    }
    const handleClick2 = (messange) => {
        alert(`You send me "${messange}". this?`)
    }
    const handleClick3 = (e) => {
        alert(e.target.innerText)
    }
  return (
    <div className='content'>
        <button type="button" onClick={handleClick}>Say Greeting</button>
        <button type="button" onClick={() => handleClick2("Hello mr/ms computer, are you feeling sad now?")}>Send me a messange in param and i repeat it</button>
        <p onDoubleClick={(e) => {handleClick3(e)}}>click me 2 times</p>
    </div>
  )
}

export default Content