import React, { Component } from 'react';
import { connect } from 'react-redux';

import Menu from './Menu';
import '../style.css'

class ListOfEmployees extends Component {

  state = {
    openEmployeeId: null
  };

  render() {
    const style = {width:'500px', display:'inline-table'};
    const visibility = this.props.employees.changeSettings;
    return (
      <div>
        <Menu />
        <h1 className="headers__h1">List of employees</h1>
        <div className="employees-min-list list-group" style={style}>
          <ul>
            {this.props.employees.addEmployee.map((employee, number) =>
              <li
                className="list-group-item employees-list__li"
                onClick={this.handleClick.bind(this, employee.personnelNumber)}
                key={number}>
                {`${employee.secondName} - ${employee.position}`}
              </li>
            )}
          </ul>
        </div>
        <div className="list-group" style={style}>
          {this.props.employees.addEmployee.map((employee, number) =>
            this.state.openEmployeeId === employee.personnelNumber &&
            <div className="list-group-item" key={number}>
              <div>{visibility.secondName[1] && employee.secondName}</div>
              <div>{visibility.firstName[1] && employee.firstName}</div>
              <div>{visibility.middleName[1] && employee.middleName}</div>
              <div>{visibility.personnelNumber[1] && employee.personnelNumber}</div>
              <div>{visibility.age[1] && employee.age}</div>
              <div>{visibility.position[1] && employee.position}</div>
              <div>{visibility.unit[1] && employee.unit}</div>
            </div>
          )}
        </div>
      </div>
    )
  }

  handleClick = openEmployeeId => this.setState({
    openEmployeeId: this.state.openEmployeeId === openEmployeeId ? null : openEmployeeId
  })
}

export default connect(
  state => ({
    employees: state
  })
)(ListOfEmployees);
