import React from 'react'
//item for when the student is helped
const STUDENT_ITEM = ({ onClick, completed, info }) => (
  <li
    onClick={onClick}
    style={{
      textDecoration: completed ? 'line-through' : 'none'
    }}
  >
    {info}
  </li>
)

export default STUDENT_ITEM
