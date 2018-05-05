import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import Main from './components/Main';
import ListOfEmployees from './components/ListOfEmployees';
import AddNote from './components/AddNote';
import Settings from './components/Settings';
import List from './List';

const initialState = List;

function employeesList(state = initialState, action) {
  console.log(state);
  return state;
}

const store = createStore(employeesList, window.__REDUX_DEVTOOLS_EXTENSION__ &&
   window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render (
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route exact path='/' component={Main} />
      <Route path='/employees-list' component={ListOfEmployees} />
      <Route path='/add-note' component={AddNote} />
      <Route path='/settings' component={Settings} />
    </Router>
  </Provider>,
  document.getElementById('root')
)
