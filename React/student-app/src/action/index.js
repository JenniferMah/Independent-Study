//toggle between filters
export const toggleFilter = id => ({
  type: 'Toggle',
  id
})
//filter for students who need help
export const SVF = filter => ({
  type: 'SVF',
  filter
})
//adding students to queue
let StudentId = 0
export const AddStudent = info => ({
  type: 'Add_Student',
  id: StudentId++,
  info
})
//export all of the filter options
export const visFilters = {
  StudentHelp: 'StudentHelp',
  allStudent: 'allStudent',
  HelpedStudents: 'HelpedStudents'
}
