import React, { Component, PropTypes } from 'react';
import MovieListItem from './MovieListItem'

let ulStyle = {
  display: 'flex',
  flexWrap: 'wrap'
}

class Movielist extends Component {

  render() {

    //  Reducer***
    let seenHandler = this.props.seenHandler;

    let movies = this.props.movies;
    let movieItems = movies.map(function(movie) {
      return <MovieListItem key={`movie-${movie.id}`}
        posterPath={movie.poster_path}
        movieId={movie.id}
        seenHandler={seenHandler}
        seen={movie.seen} />;
    });
    //  Reducer***  END

  	return (
  		<ul style={ulStyle}>
        {movieItems}
  		</ul>
  	);
  }
}

Movielist.propTypes = {
  movies: PropTypes.array.isRequired
}

export default Movielist;
