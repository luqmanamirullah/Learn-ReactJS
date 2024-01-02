import React from 'react'
import { AiOutlineSearch } from 'react-icons/ai'

const SearchItem = ({search, setSearch, handleSearch}) => {
  return (
    <form className='search' onSubmit={handleSearch}>
        <label htmlFor="search">Search &nbsp;&nbsp;&nbsp;</label>
        <input 
            autoFocus
            type='text' 
            id='search'
            value={search}
            onChange={(e)=>setSearch(e.target.value)}
        />
        <button type="submit" className='btn-submit'>
            <AiOutlineSearch 
                role='button'
                size={24}
                cursor='pointer'
            />
        </button>
    </form>
  )
}

export default SearchItem