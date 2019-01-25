import React, { Component } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { Control, Form, Errors, actions } from 'react-redux-form';
import { withRouter } from 'react-router-dom';
import { FormGroup, ControlLabel, Button, ButtonGroup } from 'react-bootstrap';

import { addEmployee } from '../reducers/employeeList';
import Menu from './Menu';
import '../style.css';

class AddNote extends Component {
    state = {
        submitRouting: false
    };

    addEmployee = employee => {
        const { history, addEmployee, resetForm } = this.props;
        const { submitRouting } = this.state;

        addEmployee(employee);
        resetForm('forms.employee');
        submitRouting && history.push('/employees-list');
    };

    render() {
        return (
            <div>
                <Menu />
                <h1>Add note</h1>
                <Form
                    model='forms.employee'
                    onSubmit={employee => this.addEmployee(employee)}
                >
                    <FormGroup>
                        <ControlLabel>Second name</ControlLabel>
                        <Control.text
                            className='form-control'
                            model='.secondName'
                            placeholder='Second name'
                            required
                            validateOn='blur'
                        />
                        <Errors
                            className='errors'
                            model='.secondName'
                            show='touched'
                            messages={{
                                valueMissing: 'Second name is required',
                            }}
                        />
                    </FormGroup>

                    <FormGroup>
                        <ControlLabel>First name</ControlLabel>
                        <Control.text
                            model='.firstName'
                            placeholder='First name'
                            className='form-control'
                        />
                    </FormGroup>

                    <FormGroup>
                        <ControlLabel>Middle name</ControlLabel>
                        <Control.text
                            model='.middleName'
                            placeholder='Middle name'
                            className='form-control'
                        />
                    </FormGroup>

                    <FormGroup>
                        <ControlLabel>Personnel number</ControlLabel>
                        <Control.text
                            className='form-control'
                            model='.personnelNumber'
                            placeholder='Personnel number'
                            required
                            validateOn='blur'
                        />
                        <Errors
                            className='errors'
                            model='.personnelNumber'
                            show='touched'
                            messages={{
                                valueMissing: 'Personnel number is required',
                            }}
                        />
                    </FormGroup>

                    <FormGroup>
                        <ControlLabel>Age</ControlLabel>
                        <Control.text
                            model='.age'
                            placeholder='Age'
                            className='form-control'
                        />
                    </FormGroup>

                    <FormGroup>
                        <ControlLabel>Position</ControlLabel>
                        <Control.text
                            className='form-control'
                            model='.position'
                            placeholder='Position'
                            required
                            validateOn='blur'
                        />
                        <Errors
                            className='errors'
                            model='.position'
                            show='touched'
                            messages={{
                                valueMissing: 'Position is required',
                            }}
                        />
                    </FormGroup>

                    <FormGroup>
                        <ControlLabel>Unit</ControlLabel>
                        <Control.text
                            model='.unit'
                            placeholder='Unit'
                            className='form-control'
                        />
                    </FormGroup>

                    <ButtonGroup>
                        <Button
                            bsStyle='primary'
                            type='submit'
                        >
                            Save and add else
                        </Button>

                        <Button
                            bsStyle='default'
                            type='submit'
                            onClick={this.route}
                        >
                            Save and add return to list
                        </Button>
                    </ButtonGroup>
                </Form>
            </div>
        )
    }

    route = () => {
        this.setState({
            submitRouting: true
        })
    }
}

export default compose(
    connect(
        null,
        dispatch => ({
            addEmployee: payload => dispatch(addEmployee(payload)),
            resetForm: act => dispatch(actions.reset(act)),
        })
    ),
    withRouter,
)(AddNote);
