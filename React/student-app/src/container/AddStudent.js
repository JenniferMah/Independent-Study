import React from 'react'
import { connect } from 'react-redux'
import { AddStudent } from '../action'
//form to add student
const AddItem = ({ dispatch }) => {
  let studentInfo
  return (
    <div>
      <form onSubmit={e => {
        e.preventDefault()
        if (!studentInfo.value.trim()) {
          return
        }
        dispatch(AddStudent(studentInfo.value))
        studentInfo.value = ''
      }}>
        <input ref={node => studentInfo = node} />
        <button type="submit">
          Add Student to Queue
        </button>
      </form>
    </div>
  )
}

export default connect()(AddItem)
