import React, { Component } from 'react';
import './Cell.css'

class Cell extends Component {
  
  render() {
    let {
      x,
      y,
      isOpen,
      value,
      handleClick
    } = this.props;

    let classType = isOpen ? 'open' : 'close'

    return (
      <div className={ `cell ${classType}` } onClick={() => handleClick({x, y})}>
        {isOpen ? value : ''}
      </div>
    );
  }
}

export default Cell;
