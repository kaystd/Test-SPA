import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Form, actions } from 'react-redux-form';

import Checkbox from './Checkbox'
import Menu from './Menu';
import '../style.css'

class Settings extends Component {
  createCheckboxes = () => {
    // console.log(this.props)
    const values = Object.entries(this.props.settings.forms.settings);

    return values.map(value =>
      <Checkbox
        key={value[0]}
        model={`${value[0]}.visible`}
        label={value[1]['label']}
        toggleCheckbox={this.handleCheckboxChange}
      />
    );
  };

  handleCheckboxChange = (model) => {
    // console.log('change')
    // console.log(model)
    this.props.dispatch(actions.toggle(`${model}`));
    // console.log(this.props)
  };

  render() {
      // console.log(this.props)
    return (
      <div>
        <Menu />
        <h1 className="">Settings</h1>
        <div>
          <Form
            model="forms.settings"
          >
            {this.createCheckboxes}
          </Form>
        </div>
      </div>
    )
  }
}

export default connect(
  state => ({
    settings: state
  }),
)(Settings);
