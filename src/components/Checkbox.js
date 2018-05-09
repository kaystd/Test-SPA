import React, { Component } from 'react';
//import { connect } from 'react-redux';

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
    //this.props.label[1] = this.state.isChecked;
    //console.log('props:', this.props);
    //console.log('state:', this.state.isChecked);

    const { label } = this.props;
    const { isChecked } = this.state;

    return (
      <div>
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
// export default connect(
//   state => ({
//     settings: state
//   }),
//   dispatch => ({
//     onChangeSettings: (label) => {
//       const payload = {
//         label: [label, this.state.isChecked]
//       }
//       dispatch({ type: 'CHANGE_SETTINGS', payload })
//     }
//   })
// )(Checkbox);
