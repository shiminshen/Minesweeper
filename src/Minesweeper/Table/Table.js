import React, { Component } from 'react';
import Cell from './Cell'

class Table extends Component {


  render() {
    let {
      table,
      open
    }= this.props;

    return (
      <div>
        { 
          table.map(row => {

            return (
              <div>
                { 
                  row.map(cell => (<Cell 
                    {...cell}
                    handleClick={open}
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
