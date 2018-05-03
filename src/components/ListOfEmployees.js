import React, { Component } from 'react';
import { connect } from 'react-redux';

import Menu from './Menu';

class ListOfEmployees extends Component {
  render() {
    console.log(this.props.employees);
    return (
      <div>
        <Menu />
        List of employees
        <div>
          <ul>
            {this.props.employees.map((employee, number) =>
              <li key={number}>{`${employee.secondName} - ${employee.position}`}</li>
            )}
          </ul>
        </div>
      </div>
    )
  }
}

export default connect(
  state => ({
    employees: state
  })
)(ListOfEmployees);
