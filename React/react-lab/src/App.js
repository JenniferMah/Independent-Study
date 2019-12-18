import React, { Component } from 'react'
import Table from './Table'
import './App.css';
import Form from './form'


class App extends Component {
  //THIS IS THE DATA FOR THE TABLE
  state = {
    students:[]
  };
// remove a student from the student array
  removeStudent= index => {
    const { students } = this.state
    this.setState({
      students: students.filter((character, i) => {
        return i !== index
      })
    });
  }

  handleSubmit = student => {
    this.setState({ students: [...this.state.students, student] })
  }
//where the page actually renders to
  render() {
    const { students } = this.state
    return (
      <div className="container">
        <h1>Student Queue</h1>
        <p>Please enter your name and problem you need help with.</p>
        <Table studentData = {students} removeStudent = {this.removeStudent}/>
        <Form handleSubmit={this.handleSubmit}/>
      </div>
    );
  }
}


export default App;
