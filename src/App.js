import React, { Component } from 'react';
import './App.css';

import Toolbar from 'material-ui/Toolbar'
import Typography from 'material-ui/Typography';

import Minesweeper from './Minesweeper'


class App extends Component {
  render() {
    return (
      <div className="App">
        <Toolbar>
          <Typography type='title'>
            Minesweeper
          </Typography>
        </Toolbar>
        <Minesweeper/>
      </div>
    );
  }
}

export default App;
