import React, { Component } from 'react';
import './Cell.css'

class Cell extends Component {
  
  render() {
    let {
      value
    } = this.props;

    return (
      <div className='cell'>
        {value}
      </div>
    );
  }
}

export default Cell;
