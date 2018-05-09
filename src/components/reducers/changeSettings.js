import Items from '../data/Items';

const initialState = Items;

export default function changeSettings(state = initialState, action) {
  if (action.type === 'CHANGE_SETTINGS') {
    return [
      ...state,
      action.payload
    ];
  }
  return state;
}
