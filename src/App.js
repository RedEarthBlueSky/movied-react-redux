import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Movielist from './Movielist';

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

  constructor() {
    super();
    this.state = {
      movies: []
    };

    this.getMoviesFromApiAsync();
  }

  getMoviesFromApiAsync () {
    return fetch('https://movied.herokuapp.com/discover')
      .then((response) => response.json())
      .then(movies => {
        movies = movies.map(movie => {
          movie.seen=false;
          return movie;
        });
        return this.setState({ movies });
      })
      .catch((error) => {
        console.error(error);
      });
  }

  markAsSeen (id) {
    this.setState({
      movies: this.state.movies.map((movie) => {
        if (movie.id === id) {
          movie.seen = !movie.seen;
        }
        return movie;
      })
    });
  }

  render () {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div className="App">
          <AppBar title="Movied"/>
            <div style={{padding:24}}>
              <Movielist movies={this.state.movies}
                seenHandler={this.markAsSeen.bind(this)}
              ></Movielist>

            </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
