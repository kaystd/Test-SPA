import React, { Component } from 'react';
import { connect } from 'react-redux';

import Checkbox from './Checkbox'

import Menu from './Menu';

/*const items =
  {
    secondName: ['Second name', true],
    firstName: ['First Name', true],
    middleName: ['Middle name', true],
    personnelNumber: ['Personnel number', true],
    age: ['Age', true],
    position: ['Position', true],
    unit: ['Unit', true]
  }*/

class Settings extends Component {

  createCheckboxes = () => {
    const labels = Object.values(this.props.settings.changeSettings);
    return labels.map((label) => ((<Checkbox
      label={label}
      handleCheckboxChange={this.handleCheckboxChange}
      key={label}
    />)));
  }

  // handleCheckboxChange = (value) => {
  //   this.props({
  //     name:value
  //   })
  // }

  handleCheckboxChange = label => {
    const items = this.props.settings.changeSettings;
    const element = Object.keys(items).find(key => items[key] === label);
    //delete items[element];
    // console.log('element',element);
    // console.log('items',items);
    // console.log('items.element',items[element]);
    items[element][1] = !items[element][1];
    console.log('element',this.props.settings.changeSettings.unit);
  }

  render() {
    console.log(this.state);
    console.log(this.props);
    return (
      <div>
        <Menu />
        Settings
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
  /*dispatch => ({
    onChangeSettings: (label) => {
      const payload = {
        secondName,
        firstName,
        middleName,
        personnelNumber,
        age,
        position,
        unit
      }
      dispatch({ type: 'CHANGE_SETTINGS', payload })
    }
  })*/
)(Settings);
