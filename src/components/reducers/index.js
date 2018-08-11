import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import employeesList from './employeesList';
import formReducer from "./formReducer";

export default combineReducers ({
  routing: routerReducer,
  employeesList,
  forms: formReducer
})
