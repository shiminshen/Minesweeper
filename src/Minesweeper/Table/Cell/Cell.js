import React, { Component } from 'react';
import '../../../../node_modules/font-awesome/css/font-awesome.min.css'
import './Cell.css'

class Cell extends Component {

  showValue() {

  }

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
        {hasFlag ? (<i className="fa fa-flag" aria-hidden="true"></i>) : !isOpen ? '' : value === -1 ? (<i className="fa fa-bomb" aria-hidden="true"></i>) : value }
      </div>
    );
  }
}

export default Cell;
