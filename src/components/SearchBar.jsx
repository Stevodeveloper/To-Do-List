import React from 'react'

const SearchBar = ({onChange, value, onKeyDown}) => {
  return (
    <div>
        <input 
        className='form-control'
        type='text'
        placeholder='enter activity...'
        value={value}
        onChange={onChange}
        onKeyDown={onKeyDown}
        
        />
        
    </div>
  )
}

export default SearchBar