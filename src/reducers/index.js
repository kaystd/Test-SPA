import { combineReducers } from 'redux';

import employeesList from './employeeList';
import formReducer from './formReducer';

export default combineReducers ({
  employeesList,
  forms: formReducer
})
