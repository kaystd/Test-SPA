import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import addEmployee from './addEmployee';
import changeSettings from './changeSettings';

export default combineReducers ({
  routing: routerReducer,
  addEmployee,
  changeSettings
})
