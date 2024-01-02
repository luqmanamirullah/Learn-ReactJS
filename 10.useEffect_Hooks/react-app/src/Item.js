import React from 'react'
import {AiOutlineDelete} from 'react-icons/ai';
import './Content.css'

const Item = ({item, handleClick, handleDelete}) => {
  return (
    <li className='list'>
        <div>
            <input type="checkbox" checked={item.checked} onChange={() => handleClick(item.id)} />
            <label>{item.item}</label>
        </div>
        <AiOutlineDelete role='button' tabIndex={0} cursor='pointer' onClick={()=> handleDelete(item.id)} />
    </li>

  )
}

export default Item