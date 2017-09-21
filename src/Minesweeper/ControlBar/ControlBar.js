import React, { Component } from 'react';
import Button from 'material-ui/Button';

import './ControlBar.css'

class ControlBar extends Component {

  render() {
    let {
      handleReset
    } = this.props;

    return (
      <div className='control-bar'>
        <Button raised onClick={handleReset}>
          Reset
        </Button>
      </div>
    );
  }
}

export default ControlBar;
