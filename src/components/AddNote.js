import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import Menu from './Menu';
import '../style.css'

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
    const style = {
      margin:'10px'
    }
    return (
      <div>
        <Menu />
        <h1 className="headers__h1">Add note</h1>
        <div className="form-group">
          <input
            className="form-control"
            type="text"
            placeholder="Input second name"
            ref={(input) => {this.secondName = input}}>
          </input>
          <input
            className="form-control"
            type="text"
            placeholder="Input first name"
            ref={(input) => {this.firstName = input}}>
          </input>
          <input
            className="form-control"
            type="text"
            placeholder="Input middle name"
            ref={(input) => {this.middleName = input}}>
          </input>
          <input
            className="form-control"
            type="text"
            placeholder="Input personnel number"
            ref={(input) => {this.personnelNumber = input}}></input>
          <input
            className="form-control"
            type="text"
            placeholder="Input age"
            ref={(input) => {this.age = input}}></input>
          <input
            className="form-control"
            type="text"
            placeholder="Input position"
            ref={(input) => {this.position = input}}></input>
          <input
            className="form-control"
            type="text"
            placeholder="Input unit"
            ref={(input) => {this.unit = input}}></input>
          <button
            style={style}
            className="btn btn-primary"
            onClick={this.addEmployee.bind(this)}>Save and add else
          </button>
          <Link to='/employees-list'>
            <button
              className="btn btn-primary"
              style={style}
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
