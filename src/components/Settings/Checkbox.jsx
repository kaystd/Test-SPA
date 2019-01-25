import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actions, Control} from 'react-redux-form';
import { FormGroup } from 'react-bootstrap';

class Checkbox extends Component {
    handleCheckboxChange = model => {
        const { toggleCheckbox } = this.props;
        toggleCheckbox(model);
    };

    render() {
        const { model, label } = this.props;

        return (
            <FormGroup>
                <label>
                    <Control.checkbox
                        model={`.${model}`}
                        changeAction={this.handleCheckboxChange}
                    />
                    {` Show: ${label}`}
                </label>
            </FormGroup>
        )
    }
}

export default connect(
    state => ({
        settings: state
    }),
    dispatch => ({
        toggleCheckbox: model => dispatch(actions.toggle(model))
    }),
)(Checkbox);
