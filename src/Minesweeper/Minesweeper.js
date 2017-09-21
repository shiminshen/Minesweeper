import React, { Component } from 'react';
import Cell from './Cell'

class Minesweeper extends Component {

  constructor(props) {
    super(props);
  
    this.state = {
      table: this.createTable({rowNum: 10, colNum: 10, mineNum: 10})
    };
  }

  createTable = ({ rowNum, colNum, mineNum }) => {

    let table = []

    // initialize the table
    for( let y = 0 ; y < rowNum ; ++y) {
      let row = []
      for( let x = 0 ; x < colNum ; ++x) {
        row.push({
          x,
          y,
          value: 0,
          isOpen: false,
          hasFlag: false,
        })
      }
      table.push(row)
    }

    // insert mines
    for( let m = 0 ; m < mineNum ; ++m ) {
      let cell = table[Math.floor(Math.random()*rowNum)][Math.floor(Math.random()*colNum)]

      if (cell.value === -1) {
        --m
      } else {
        cell.value = -1
      }
    }

    // update values
    for( let y = 0 ; y < rowNum ; ++y) {
      for( let x = 0 ; x < colNum ; ++x) {
        table[y][x].value = this.countMines(table[y][x], table)
      }
    }
    

    return table
  }

  countMines = (cell, table) => {

    let {
      x,
      y
    } = cell;

    console.log(this)

    let mineCount = 0
    for (var rowOffset = -1 ; rowOffset <= 1 ; ++rowOffset) {
      for (var colOffset = -1 ; colOffset <= 1 ; ++colOffset) {
        let newX = x+colOffset
        let newY = y+rowOffset
        if (newX > -1 && newY > -1 && newX < table[0].length && newY < table.length && table[newY][newX].value === -1) {
          ++mineCount
        }
      }
    }
    return mineCount
  }

  render() {

    return (
      <div>
        { 
          this.state.table.map(row => {

            return (
              <div>
                { 
                  row.map(cell => (<Cell 
                    {...cell}
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

export default Minesweeper;
