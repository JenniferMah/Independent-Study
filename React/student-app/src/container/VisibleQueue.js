import { connect } from 'react-redux'
import { toggleFilter } from '../action'
import Queue from '../component/queue'
import { visFilters } from '../action'

const getVisibleStudent = (StudentDataItems, filter) => {
  switch (filter) {
    case visFilters.allStudent:
      return StudentDataItems
    case visFilters.HelpedStudents:
      return StudentDataItems.filter(t => t.completed)
    case visFilters.StudentHelp:
      return StudentDataItems.filter(t => !t.completed)
    default:
      throw new Error('Unknown filter: ' + filter)
  }
}

const mapStateToProps = state => ({
  StudentDataItems: getVisibleStudent(state.StudentDataItems, state.visFilter)
})

const mapDispatchToProps = dispatch => ({
  toggleFilter: id => dispatch(toggleFilter(id))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Queue)
