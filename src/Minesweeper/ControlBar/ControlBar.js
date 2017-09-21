import React, { Component } from 'react';
import Button from 'material-ui/Button';

import './ControlBar.css'

class ControlBar extends Component {

  render() {
    return (
      <div className='control-bar'>
        <Button raised>
          Reset
        </Button>
      </div>
    );
  }
}

export default ControlBar;
