import React from 'react'
import StudentItem from './student'
//whole queue for class
const QueueList = ({ StudentDataItems, toggleFilter }) => (
  <ul>
    {StudentDataItems.map(student =>
      <StudentItem
        key={student.id}
        {...student}
        onClick={() => toggleFilter(student.id)}
      />
    )}
  </ul>
)

export default QueueList
