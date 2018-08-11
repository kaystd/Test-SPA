import React, { Component } from 'react';
import { connect } from 'react-redux';

import Menu from './Menu';
import '../style.css'

class ListOfEmployees extends Component {

  state = {
    openEmployeeId: null
  };

  render() {
    console.log(this.props)
    // const style = {width:'500px', display:'inline-table'};
    const visibility = this.props.employees.forms.settings;

    const fields = [];
    this.props.employees.addEmployee.find((employee) =>
      employee.personnelNumber === this.state.openEmployeeId &&
      Object.entries(employee).filter((element) =>
        element && visibility[element[0]].visible
      ).map((element, index) =>
        fields.push(
          <div key={index}>
            {visibility[element[0]].label}: {element[1]}
          </div>
        )
      )
    );

    return (
      <div>
        {<Menu />}
        <h1 className="">List of employees</h1>
        <div className="" /*style={style}*/>
          <ul>
            {this.props.employees.addEmployee.map((employee) =>
              <li
                className=""
                onClick={this.handleClick(employee.personnelNumber)}
                key={employee.personnelNumber}
              >
                {`${employee.secondName} - ${employee.position}`}
              </li>
            )}
          </ul>
        </div>

        <div className="" /*style={style}*/>
          {fields}
        </div>
      </div>
    )
  }

  handleClick = (personnelNumber) => () => this.setState({
    openEmployeeId: this.state.openEmployeeId === personnelNumber ? null : personnelNumber
  })
}

export default connect(
  state => ({
    employees: state
  })
)(ListOfEmployees);
