import React, { Component } from 'react';
import { Link } from 'react-router';

class Menu extends Component {
  render() {
    const style = {margin: '5px'};
    return (
      <div>
        <Link className="btn btn-dark" style={style} to='/'>Main</Link>
        <Link className="btn btn-dark" style={style} to='/employees-list'>List of employees</Link>
        <Link className="btn btn-dark" style={style} to='/add-note'>Add note</Link>
        <Link className="btn btn-dark" style={style} to='/settings'>Settings</Link>
      </div>
    )
  }
}

export default Menu;
