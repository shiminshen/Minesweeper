import React, { Component } from 'react';
import Button from 'material-ui/Button';
import TextField from 'material-ui/TextField';


import './ControlBar.css'

class ControlBar extends Component {

  handleInputChange = name => e => {
    return this.props.handleChangeConfig(name, e.target.value)
  }

  render() {
    let {
      rowNum,
      colNum,
      mineNum,
      handleReset,
    } = this.props;

    return (
      <div className='control-bar'>
        <TextField
          label='Row'
          value={rowNum}
          onChange={this.handleInputChange('rowNum')}
        />
        <TextField
          label='Column'
          value={colNum}
          onChange={this.handleInputChange('colNum')}
        />
        <TextField
          label='Mine'
          value={mineNum}
          onChange={this.handleInputChange('mineNum')}
        />
        <Button raised onClick={handleReset}>
          Reset
        </Button>
      </div>
    );
  }
}

export default ControlBar;
