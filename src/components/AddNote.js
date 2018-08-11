import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Control, Form, Errors, actions } from 'react-redux-form';

import Menu from './Menu';
import '../style.css'

class AddNote extends Component {
  addEmployee(employee) {
    this.props.onAddEmployee(employee);
  }

  render() {
    console.log(this.props);

    return (
      <div>
        <Menu />
        <h1 className="">Add note</h1>
        <Form
          model="forms.employee"
          onSubmit={employee => this.addEmployee(employee)}
        >
          <label >Second name</label>
          <Control.text
            model=".secondName"
            placeholder="Second name"
            required
            validateOn="blur"
          />
          <Errors
            className=""
            model=".secondName"
            show="touched"
            messages={{
              valueMissing: 'Second name is required',
            }}
          />

          <label >First name</label>
          <Control.text model=".firstName" placeholder="First name" />

          <label >Middle name</label>
          <Control.text model=".middleName" placeholder="Middle name" />

          <label >Personnel number</label>
          <Control.text
            model=".personnelNumber"
            placeholder="Personnel number"
            required
            validateOn="blur"
          />
          <Errors
            className=""
            model=".personnelNumber"
            show="touched"
            messages={{
              valueMissing: 'Personnel number is required',
            }}
          />

          <label >Age</label>
          <Control.text model=".age" placeholder="Age" />

          <label >Position</label>
          <Control.text
            model=".position"
            placeholder="Position"
            required
            validateOn="blur"
          />
          <Errors
            className=""
            model=".position"
            show="touched"
            messages={{
              valueMissing: 'Position is required',
            }}
          />

          <label >Unit</label>
          <Control.text model=".unit" placeholder="Unit" />

          <button type="submit">
            Ok
          </button>
        </Form>
      </div>
    )
  }
}

export default connect(
  state => ({
      employees: state
  }),
  dispatch => ({
    onAddEmployee: (employee) => {
      const payload = {
        ...employee
      };
      dispatch({ type: 'ADD_EMPLOYEE', payload });
      dispatch(actions.reset('forms.employee'));
    }
  })
)(AddNote);