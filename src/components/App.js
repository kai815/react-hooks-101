import React, { useReducer } from 'react'
//最小限のbootstrapをimport
import 'bootstrap/dist/css/bootstrap.min.css'

import EventForm from './EventForm'
import Events from './Events'
import AppContext from '../contexts/AppContext'

import reducer from '../reducers'
// import { timeCurrentIso8601 }from '../utils'

const App = () => {
  // console.log(timeCurrentIso8601())
  const initialState = {
    events:[],
    operationLogs:[]
  }
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      <div className="container-fluid">
        <EventForm />
        <Events />
      </div>
    </AppContext.Provider>
  )
}
export default App;
