import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Control, Form, Errors, actions } from 'react-redux-form';
import { addEmployee } from './reducers/employeesList'
import { push } from 'react-router-redux'

import Menu from './Menu';
import '../style.css'

class AddNote extends Component {
  state = {
    submitRouting: false
  };

  addEmployee(employee) {
    const payload = {
      ...employee
    };
    this.props.dispatch(addEmployee(payload));
    this.props.dispatch(actions.reset('forms.employee'));
    if (this.state.submitRouting) this.props.dispatch(push('/employees-list'));
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
          <div className="form-group">
            <label >Second name</label>
            <Control.text
              className="form-control"
              model=".secondName"
              placeholder="Second name"
              required
              validateOn="blur"
            />
            <Errors
              className="errors"
              model=".secondName"
              show="touched"
              messages={{
                valueMissing: 'Second name is required',
              }}
            />
          </div>

          <div className="form-group">
            <label >First name</label>
            <Control.text
              model=".firstName"
              placeholder="First name"
              className="form-control"
            />
          </div>

          <div className="form-group">
            <label >Middle name</label>
            <Control.text
              model=".middleName"
              placeholder="Middle name"
              className="form-control"
            />
          </div>

          <div className="form-group">
            <label >Personnel number</label>
            <Control.text
              className="form-control"
              model=".personnelNumber"
              placeholder="Personnel number"
              required
              validateOn="blur"
            />
            <Errors
              className="errors"
              model=".personnelNumber"
              show="touched"
              messages={{
                valueMissing: 'Personnel number is required',
              }}
            />
          </div>

          <div className="form-group">
            <label >Age</label>
            <Control.text
              model=".age"
              placeholder="Age"
              className="form-control"
            />
          </div>

          <div className="form-group">
            <label >Position</label>
            <Control.text
              className="form-control"
              model=".position"
              placeholder="Position"
              required
              validateOn="blur"
            />
            <Errors
              className="errors"
              model=".position"
              show="touched"
              messages={{
                valueMissing: 'Position is required',
              }}
            />
          </div>

          <div className="form-group">
            <label >Unit</label>
            <Control.text
              model=".unit"
              placeholder="Unit"
              className="form-control"
            />
          </div>

          <div className="btn-group">
            <button
              className="btn btn-primary"
              type="submit"
            >
              Save and add else
            </button>

            <button
              className="btn btn-primary"
              type="submit"
              onClick={this.route}
            >
              Save and add return to list
            </button>
          </div>
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

export default connect(
  state => ({
      employees: state
  })
)(AddNote);