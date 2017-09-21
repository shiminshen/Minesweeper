import React, { Component } from 'react';

import ControlBar from './ControlBar'
import Table from './Table'

class Minesweeper extends Component {

  constructor(props) {
    super(props);
  
    this.state = {
      rowNum: 10,
      colNum: 10,
      mineNum: 20,
      table: []
    };
  }

  componentDidMount() {
    this.setState({
      table: this.createTable({rowNum: 10, colNum: 10, mineNum: 20})
    })
  }

  createTable = () => {

    let {
      rowNum,
      colNum,
      mineNum
    } = this.state;

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
        table[y][x].value = table[y][x].value === -1 ? -1 : this.countMines(table[y][x], table)
      }
    }
    
    return table
  }

  countMines = (cell, table) => {

    let {
      x,
      y
    } = cell;

    let mineCount = 0
    for (let rowOffset = -1 ; rowOffset <= 1 ; ++rowOffset) {
      for (let colOffset = -1 ; colOffset <= 1 ; ++colOffset) {
        let newX = x+colOffset
        let newY = y+rowOffset
        if (newX > -1 && newY > -1 && newX < table[0].length && newY < table.length && table[newY][newX].value === -1) {
          ++mineCount
        }
      }
    }
    return mineCount
  }

  reset = () => this.setState({ table: this.createTable() })

  open = ({x, y}) => {

    let table = [...this.state.table]
    let cell = table[y][x]

    // open this cell
    if (!cell.isOpen) {
      cell.isOpen = true
    } 

    // open around if the value is 0
    if (cell.value === 0) {

      for (let rowOffset = -1 ; rowOffset <= 1 ; ++rowOffset) {
        for (let colOffset = -1 ; colOffset <= 1 ; ++colOffset) {
          let newX = x+colOffset
          let newY = y+rowOffset
          if (newX > -1 && newY > -1 && newX < table[0].length && newY < table.length && table[newY][newX].value !== -1 && !table[newY][newX].isOpen) {
            this.open({ x: newX, y: newY })
          }
        }
      }
    }

    this.setState({ table })

  }

  changeConfig = (name, value) => this.setState({ [name]: value })

  render() {

    let {
      rowNum,
      colNum,
      mineNum
    } = this.state;

    return (
      <div>
        <ControlBar
          rowNum={rowNum}
          colNum={colNum}
          mineNum={mineNum}
          handleChangeConfig={this.changeConfig}
          handleReset={this.reset}
        />
        <Table
          open={this.open}
          table={this.state.table}
        />
      </div>
    );
  }
}

export default Minesweeper;
