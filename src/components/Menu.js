import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Menu extends Component {
  render() {
    const style = {margin: '5px'};
    return (
      <div>
        <Link className="" style={style} to='/'>Main</Link>
        <Link className="" style={style} to='/employees-list'>List of employees</Link>
        <Link className="" style={style} to='/add-note'>Add note</Link>
        <Link className="" style={style} to='/settings'>Settings</Link>
      </div>
    )
  }
}

export default Menu;
