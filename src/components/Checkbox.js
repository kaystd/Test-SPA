import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Control } from 'react-redux-form';

class Checkbox extends Component {
  handleCheckboxChange(model) {
    // console.log(this.props)
    this.props.toggleCheckbox(model)
  }

  render() {
    const { model, label } = this.props;
     // console.log('model!!!',model)
    return (
      <div className="form-check">
        <label className="form-check-label">
          <Control.checkbox
            className="form-check-input"
            model={`.${model}`}
            changeAction={model => this.handleCheckboxChange(model)}
          />
          Show: {label}
        </label>
      </div>
    )
  }
}

export default connect(
  state => ({
    settings: state
  }),
)(Checkbox);
