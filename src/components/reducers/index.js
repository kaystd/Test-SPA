import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import addEmployee from './addEmployee';

export default combineReducers ({
  routing: routerReducer,
  addEmployee
})
