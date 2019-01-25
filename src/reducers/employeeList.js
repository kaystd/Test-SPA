import { createAction, handleActions } from 'redux-actions'
import initialState from '../mockData/employees';

export const addEmployee = createAction('ADD_EMPLOYEE');

const employeeList = handleActions({
    [addEmployee]: (state, action) => ([
        ...state,
        action.payload
    ])
}, initialState);

export default employeeList