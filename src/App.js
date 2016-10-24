import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import AppBar from 'material-ui/AppBar';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {amber800,black,grey100,grey900} from 'material-ui/styles/colors';


const muiTheme = getMuiTheme({
  palette: {
    primary1Color: '#CC7B19',
    textColor: grey100,
  },
  appBar: {
    color: black,
  },
});

class App extends Component {
  render () {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div className="App">
          <AppBar title="Movied"/>
          <div style={{padding:24}}>
            {/* … Your code here … */}
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
