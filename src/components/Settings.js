import React, { Component } from 'react';
import { connect } from 'react-redux';

import Checkbox from './Checkbox'
import Menu from './Menu';
import '../style.css'

class Settings extends Component {
  createCheckboxes = () => {
    const labels = Object.values(this.props.settings.changeSettings);
    return labels.map((label) => ((
      <Checkbox
        label={label}
        handleCheckboxChange={this.handleCheckboxChange}
        key={label}
      />
    )));
  }

  handleCheckboxChange = label => {
    const items = this.props.settings.changeSettings;
    const element = Object.keys(items).find(key => items[key] === label);
    items[element][1] = !items[element][1];
  }

  render() {
    return (
      <div>
        <Menu />
        <h1 className="headers__h1">Settings</h1>
        <div>
          {this.createCheckboxes()}
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
