import React from 'react'
import FilterLink from '../container/FilterOptions'
import { visFilters } from '../action'
//buttons for Visibility choices
const ChoiceButtons = () => (
  <div>
    <span>Show: </span>
    <FilterLink filter={visFilters.StudentHelp}>
      Students Who Need Help
    </FilterLink>
    <FilterLink filter={visFilters.HelpedStudents}>
      Student Who Have Been Helped
    </FilterLink>
  </div>
)

export default ChoiceButtons
