import React, { Component } from 'react'

// Playing with some JSX (javaScript XML)
const Header = () => {
    return (
        <thead>
          <tr>
            <th>Name</th>
            <th>Task</th>
            <th>Helped</th>
          </tr>
        </thead>
      )
}

const Body = props => {
    const rows = props.studentData.map((r, i) => {
        // map array to render data into the table
        return (
          <tr key={i}>
            <td>{r.name}</td>
            <td>{r.task}</td>
            <td><button onClick={()=>props.removeStudent(i)}>Finished Helping</button></td>
          </tr>
        )
      })
    return <tbody>{rows}</tbody>
}

class Table extends Component {
  render() {
      const {studentData, removeStudent} = this.props
    return (
      <table>
       <Header/>
       <Body studentData = {studentData} removeStudent={ removeStudent } />
      </table>
    )
  }
}

export default Table