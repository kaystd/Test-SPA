import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Form } from 'react-redux-form';

import Checkbox from './Checkbox'
import Menu from '../Menu';

class Settings extends Component {
    createCheckboxes = () => {
        const { settings } = this.props;
        const values = Object.entries(settings);

        return values.map(value => {
            const [ item, props ] = value;
            return (
                <Checkbox
                    key={item}
                    model={`${item}.visible`}
                    label={props.label}
                />
            )}
        );
    };

    render() {
        return (
            <div>
                <Menu />
                    <h1>Settings</h1>
                    <Form
                        model='forms.settings'
                    >
                        {this.createCheckboxes}
                    </Form>
            </div>
        )
    }
}

export default connect(
    state => ({
        settings: state.forms.settings,
    })
)(Settings);
