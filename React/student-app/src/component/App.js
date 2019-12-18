import React from 'react'
import FilterButtons from './choice'
import AddStudent from '../container/AddStudent'
import VisibleQueue from '../container/VisibleQueue'
//layout for the app
const App = () => (
  <div>
    <h1>Student Queue</h1>
    <p>Please add your name and item you need help with in the text box below.</p>
    <VisibleQueue />
    <AddStudent />
    <FilterButtons />
  </div>
)

export default App
