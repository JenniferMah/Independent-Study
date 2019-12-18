import React, { Component } from 'react'

class form extends Component {
  constructor(props) {
    super(props)
    //intitialize to empty
    this.initialState = {
      name: '',
      task: '',
    }
    this.state = this.initialState
  }

  onFormSubmit = (event) => {
    event.preventDefault();
    this.props.handleSubmit(this.state);
    this.setState(this.initialState);
  }

  makeChange = event => {
    const { name, value } = event.target
    this.setState({
      [name]: value
    });
  }

  render() {
    const { name, task } = this.state;
    return (
      <form onSubmit={this.onFormSubmit}>
        <label>Name:</label>
        <input type="text" name="name" value={name} onChange={this.makeChange} />
        <label>Task you need help with:</label>
        <input type="text" name="task" value={task} onChange={this.makeChange} />
        <button type="submit">Submit</button>
      </form>
    );
  }
}
export default form;
