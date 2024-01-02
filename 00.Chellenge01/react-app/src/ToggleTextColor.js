import React from 'react'

const ToggleTextColor = ({isDarkText, setIsDarkText}) => {
    return (
        <button
            type='button'
            className='btn-text-color'
            style={{
                backgroundColor: isDarkText ? 'white' : 'black',
                color: isDarkText ? 'black' : 'white'
            }}
            onClick={() => setIsDarkText(!isDarkText)}
        >
            {isDarkText ? 'Dark Text' : 'Light Text'}
        </button>
    )
}

export default ToggleTextColor