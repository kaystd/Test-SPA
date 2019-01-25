import { combineForms } from 'react-redux-form';
import items from '../mockData/items';

const initialEmployeeState = {
    secondName: '',
    firstName: '',
    middleName: '',
    personnelNumber: null,
    age: null,
    position: '',
    unit: ''
};

const formReducer = combineForms({
    employee: initialEmployeeState,
    settings: items
},'forms');

export default formReducer
