import { visFilters } from '../action'

const visFilter = (state = visFilters.allStudent, action) => {
  switch (action.type) {
    //retuens the action filler (students who need help and students who have been helped)
    case 'SVF':
      return action.filter //this should return data correcsponging to action type
    default:
      return state
  }
}

export default visFilter
