import { combineReducers } from 'redux'
import StudentDataItems from './StudentData'
import visFilter from './FilterResults'

export default combineReducers({
  StudentDataItems,
  visFilter
})
