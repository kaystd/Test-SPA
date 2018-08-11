import { createAction, handleActions } from 'redux-actions'
import List from '../data/List';

const initialState = List;
export const addEmployee = createAction('ADD_EMPLOYEE');
const employeesList = handleActions({
      [addEmployee]: (state, action) => ([
      ...state,
      action.payload
    ])
  }, initialState
);
export default employeesList