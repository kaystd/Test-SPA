import React, { Component } from 'react';

import Menu from './Menu';

class Main extends Component {
  render() {
    return (
      <div>
        <Menu />
        <h1 className="display-3">Welcome</h1>
      </div>
    )
  }
}

export default Main;
