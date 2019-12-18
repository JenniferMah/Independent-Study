const studentData = (state = [], action) => {
  switch (action.type) {
    //return the student information depending on action
    case 'Add_Student':
      return [
        ...state,
        {
          id: action.id,
          info: action.info,
          completed: false
        }
      ]
      // send correct toggle data to componenet
    case 'Toggle':
      return state.map(data =>
        (data.id === action.id)
          ? {...data, completed: !data.completed}
          : data
      )
    default:
      return state
  }
}

export default studentData
