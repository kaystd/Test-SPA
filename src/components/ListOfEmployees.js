import React, { Component } from 'react';
import { connect } from 'react-redux';

import Menu from './Menu';

class ListOfEmployees extends Component {

  constructor(props) {
    super(props);
    this.state = {
      openEmployeeId: null
    };
  }

  render() {
    console.log(this.state);
    console.log(this.props);

    return (
      <div>
        <Menu />
        List of employees
        <div>
          <ul>
            {this.props.employees.addEmployee.map((employee, number) =>
              <li onClick = {this.handleClick.bind(this, employee.personnelNumber)} key={number}>
                {`${employee.secondName} - ${employee.position}`}
              </li>
            )}
          </ul>
        </div>
        <div>
          {this.props.employees.addEmployee.map((employee, number) =>
            this.state.openEmployeeId === employee.personnelNumber &&
            <div key={number}>
              {`${employee.secondName}`}<br />
              {`${employee.firstName}`}<br />
              {`${employee.middleName}`}<br />
              {`${employee.personnelNumber}`}<br />
              {`${employee.age}`}<br />
              {`${employee.position}`}<br />
              {`${employee.unit}`}<br />
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
