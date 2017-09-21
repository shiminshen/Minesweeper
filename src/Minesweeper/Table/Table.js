import React, { Component } from 'react';
import Cell from './Cell'

class Table extends Component {


  render() {
    let {
      table,
      open,
      setFlag
    }= this.props;

    return (
      <div>
        { 
          table.map((row, rIdx)=> {

            return (
              <div key={rIdx}>
                { 
                  row.map(cell => (<Cell 
                    {...cell}
                    key={cell.x}
                    handleClick={open}
                    handleContextMenu={setFlag}
                  />))
                }
              </div>
            )
          })
        }
      </div>

    );
  }
}

export default Table;
