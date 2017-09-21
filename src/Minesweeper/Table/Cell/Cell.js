import React, { Component } from 'react';
import './Cell.css'

class Cell extends Component {

  render() {
    let {
      x,
      y,
      isOpen,
      hasFlag,
      value,
      handleClick,
      handleContextMenu
    } = this.props;

    let classType = isOpen ? 'open' : 'close'

    return (
      <div className={ `cell ${classType}` } onClick={() => handleClick({x, y})} onContextMenu={handleContextMenu({x, y})}>
        {hasFlag ? 'f': isOpen ? value : ''}
      </div>
    );
  }
}

export default Cell;
