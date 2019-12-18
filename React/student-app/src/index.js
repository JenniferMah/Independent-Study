import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import App from './component/App'
import rootReducer from './reducers'
import './index.css';


const store = createStore(rootReducer)
//gives all components acess to the store of data
render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
