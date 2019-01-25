import React from 'react';
import { withRouter } from 'react-router-dom';
import { ButtonToolbar, Button } from 'react-bootstrap';

const Menu = ({ history }) => (
    <ButtonToolbar>
        <Button
            bsStyle='primary'
            bsSize='large'
            onClick={() => history.push('/')}
        >
            Main
        </Button>
        <Button
            bsStyle='primary'
            bsSize='large'
            onClick={() => history.push('/employees-list')}
        >
            List of employees
        </Button>
        <Button
            bsStyle='primary'
            bsSize='large'
            onClick={() => history.push('/add-note')}
        >
            Add employee
        </Button>
        <Button
            bsStyle='primary'
            bsSize='large'
            onClick={() => history.push('/settings')}
        >
            Settings
        </Button>
    </ButtonToolbar>
);

export default withRouter(Menu);
