import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route } from 'react-router-dom'

import App from './components/App'
import ListOfEmployees from './components/ListOfEmployees'
import AddNote from './components/AddNote'
import Settings from './components/Settings'

ReactDOM.render (
  <BrowserRouter>
    <div>
      <Route exact path='/' component={App} />
      <Route path='/employees-list' component={ListOfEmployees} />
      <Route path='/add-note' component={AddNote} />
      <Route path='/settings' component={Settings} />
    </div>
  </BrowserRouter>,
  document.getElementById('root')
)
