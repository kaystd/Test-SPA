import { combineForms } from 'react-redux-form';
import Items from '../data/Items';

const initialEmployeeState = {
  secondName: '',
  firstName: '',
  middleName: '',
  personnelNumber: null,
  age: null,
  position: '',
  unit: ''
};
const items = Items;

const formReducer = combineForms({
  employee: initialEmployeeState,
  settings: items
},'forms');

export default formReducer
