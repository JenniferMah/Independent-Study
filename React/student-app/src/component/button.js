import React from 'react'
//button compoent for each filter.
const buttonItems = ({ children, onClick, active }) => (
    <button
       onClick={onClick}
       disabled={active}
       style={{
           marginLeft: '10px',
       }}
    >
      {children}
    </button>
)


export default buttonItems
