import React, { Component } from 'react';

class Checkbox extends Component {

  state = {
    isChecked: this.props.label[1]
  }

  toggleCheckBoxChange = () => {
    const { handleCheckboxChange, label } = this.props;

    this.setState(({ isChecked }) => (
      {
        isChecked: !isChecked
      }
    ));

    handleCheckboxChange(label);
  }


  render() {

    const { label } = this.props;
    const { isChecked } = this.state;

    return (
      <div className="custom-checkbox list-group-item">
        <label>
          <input
            type="checkbox"
            value={label}
            checked={isChecked}
            onChange={this.toggleCheckBoxChange}
          />
          {label}
        </label>
      </div>
    )
  }
}

export default Checkbox;
