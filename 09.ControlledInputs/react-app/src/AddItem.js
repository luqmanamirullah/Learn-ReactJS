import React, { useRef } from 'react'
import { AiFillPlusCircle } from 'react-icons/ai'

const AddItem = ({newItem, setNewItem, handleSumbit}) => {
    const inputRef = useRef();
  return (
    <form className='addItem' onSubmit={handleSumbit}>
        <label htmlFor="addItem">Add Item</label>
        <input
            autoFocus
            ref={inputRef}
            type="text" 
            name="addItem" 
            id="addItem" 
            value={newItem}
            onChange={(e) => setNewItem(e.target.value)}
            required
        />
        <button type="submit" className='btn-submit'>            
            <AiFillPlusCircle
                role="button"
                size={24}
                onClick={(e) => inputRef.current.focus()}
                tabIndex={0}
            />
        </button>
    </form>
  )
}

export default AddItem