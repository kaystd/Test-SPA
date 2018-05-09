import List from '../data/List';

const initialState = List;

export default function addEmployee(state = initialState, action) {
  if (action.type === 'ADD_EMPLOYEE') {
    return [
      ...state,
      action.payload
    ];
  }
  return state;
}
