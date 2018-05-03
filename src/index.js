import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import Main from './components/Main'
import ListOfEmployees from './components/ListOfEmployees'
import AddNote from './components/AddNote'
import Settings from './components/Settings'

const initialState = [
  {
    secondName: 'Ivanov',
    firstName: 'Ivan',
    middleName: 'Ivanovich',
    personnelNumber: 1,
    age: 32,
    position: 'Senior software engineer',
    unit: 'Development departament'
  },
  {
    secondName: 'Petrov',
    firstName: 'Vladimir',
    middleName: 'Alexandrovich',
    personnelNumber: 2,
    age: 29,
    position: 'Middle software engineer',
    unit: 'Development departament'
  },
  {
    secondName: 'Johnson',
    firstName: 'John',
    middleName: 'Winston',
    personnelNumber: 3,
    age: 25,
    position: 'Junior software engineer',
    unit: 'Development departament'
  }
];

function employeesList(state = initialState) {
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
