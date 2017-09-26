import React, { Component } from 'react';
import Button from 'material-ui/Button';
import TextField from 'material-ui/TextField';

import Dialog, {
  DialogTitle,
} from 'material-ui/Dialog';


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
      gameOver,
      handleRestart,
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
        <Button color='accent' onClick={handleRestart}>
          Restart
        </Button>
        <Dialog open={gameOver}>
          <DialogTitle>You {gameOver === 1 ? 'Win' : 'Lose'}</DialogTitle>
          <Button color='accent' onClick={handleRestart}>
            Restart
          </Button>
        </Dialog>
      </div>
    );
  }
}

export default ControlBar;
