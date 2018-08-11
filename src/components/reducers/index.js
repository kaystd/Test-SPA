import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import addEmployee from './addEmployee';
import formReducer from "./formReducer";

export default combineReducers ({
  routing: routerReducer,
  addEmployee,
  forms: formReducer
})
