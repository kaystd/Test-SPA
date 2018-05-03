import React, { Component } from 'react';
import { Link } from 'react-router';

class Menu extends Component {
  render() {
    return (
      <div>
        <Link to='/'>Main</Link>
        <Link to='/employees-list'>List of employees</Link>
        <Link to='/add-note'>Add note</Link>
        <Link to='/settings'>Settings</Link>
      </div>
    )
  }
}

export default Menu;
