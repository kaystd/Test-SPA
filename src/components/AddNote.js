import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import Menu from './Menu';

class AddNote extends Component {
  addEmployee() {
    this.props.onAddEmployee(
      this.secondName.value,
      this.firstName.value,
      this.middleName.value,
      this.personnelNumber.value,
      this.age.value,
      this.position.value,
      this.unit.value
    );
    this.secondName.value = '';
    this.firstName.value = '';
    this.middleName.value = '';
    this.personnelNumber.value = '';
    this.age.value = '';
    this.position.value = '';
    this.unit.value = '';
  }

  render() {
    return (
      <div>
        <Menu />
        Add note
        <div>
          <input
            type="text"
            placeholder="Input second name"
            ref={(input) => {this.secondName = input}}>
          </input>
          <input
            type="text"
            placeholder="Input first name"
            ref={(input) => {this.firstName = input}}>
          </input>
          <input
            type="text"
            placeholder="Input middle name"
            ref={(input) => {this.middleName = input}}>
          </input>
          <input
            type="text"
            placeholder="Input personnel number"
            ref={(input) => {this.personnelNumber = input}}></input>
          <input
            type="text"
            placeholder="Input age"
            ref={(input) => {this.age = input}}></input>
          <input
            type="text"
            placeholder="Input position"
            ref={(input) => {this.position = input}}></input>
          <input
            type="text"
            placeholder="Input unit"
            ref={(input) => {this.unit = input}}></input>
          <button
            onClick={this.addEmployee.bind(this)}>Save and add else
          </button>
          <Link to='/employees-list'>
            <button
              onClick={this.addEmployee.bind(this)}>Save and return to list
            </button>
          </Link>
        </div>
      </div>
    )
  }
}

export default connect(
  state => ({
    employees: state
  }),
  dispatch => ({
    onAddEmployee: (secondName, firstName, middleName, personnelNumber,
    age, position, unit) => {
      const payload = {
        secondName,
        firstName,
        middleName,
        personnelNumber,
        age,
        position,
        unit
      }
      dispatch({ type: 'ADD_EMPLOYEE', payload })
    }
  })
)(AddNote);
