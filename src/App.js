import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Movielist from './Movielist';

import AppBar from 'material-ui/AppBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {/*grey900,amber800,*/black,grey100} from 'material-ui/styles/colors';

import { connect } from 'react-redux';
import { getmovies, markasseen } from './actions';

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: '#CC7B19',
    textColor: grey100,
  },
  appBar: {
    color: black,
  },
});

// **************************** App Class ***
class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: []
    };

    this.getMoviesFromApiAsync();
  }

  //  Action*** GETMOVIES
  getMoviesFromApiAsync () {  //  Reducer** action GETMOVIES
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
    this.props.markasseen(id)
    // this.setState({
    //   movies: this.state.movies.map((movie) => {
    //     if (movie.id === id) {
    //       movie.seen = !movie.seen;
    //     }
    //     return movie;
    //   })
    // });
  }

  //  Render occurs after any reducer produces a new state
  //  USERSTATE holds movie state so correct movies are MARKASSEEN
  //  render does not reload the 'MARK AS SEEN' Button
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
}  //  **** App Class close ******

//  Maps dispatch actions to props
const mapDispatchToProps = (dispatch) => ({
  markasseen: (id) => dispatch(markasseen(id)),
  getmovies: () => dispatch(getmovies())
})

//  Maps state to props
const mapStateToProps = (state) => ({

})
//  connect binds them
export default connect (mapStateToProps, mapDispatchToProps)(App)
