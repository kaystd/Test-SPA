import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ListGroup, ListGroupItem } from 'react-bootstrap';

import Menu from './Menu';

class ListOfEmployees extends Component {

    state = {
        openEmployeeId: null,
    };

    render() {
        const { employees, settings } = this.props;
        const { openEmployeeId } = this.state;

        const selectedEmployee = employees
            .find(employee => employee.personnelNumber === openEmployeeId);

        const employeeFields = selectedEmployee &&
            Object.entries(selectedEmployee)
                .filter(([ item ]) => settings[item].visible)
                .map(([ label, value ]) => (
                    <ListGroupItem key={label}>
                        {settings[label].label}: {value}
                    </ListGroupItem>));

        return (
            <div>
                <Menu/>
                <h1>List of employees</h1>
                <ListGroup>
                    {employees.map(employee =>
                        <ListGroupItem
                            onClick={this.handleClick(employee.personnelNumber)}
                            key={employee.personnelNumber}
                        >
                            {`${employee.secondName} - ${employee.position}`}
                        </ListGroupItem>
                    )}
                </ListGroup>
                <ListGroup>
                    {employeeFields}
                </ListGroup>
            </div>
        )
    }

    handleClick = personnelNumber => () => {
        const { openEmployeeId } = this.state;

        this.setState({
            openEmployeeId: openEmployeeId === personnelNumber ? null : personnelNumber
        })
    };
}

export default connect(
    state => ({
        employees: state.employeesList,
        settings: state.forms.settings,
    })
)(ListOfEmployees);
