import React, {Component} from 'react';
import RaisedButton from 'material-ui/RaisedButton'

let style={
	display: 'flex',
	flexDirection: 'column',
	margin: 10,
}

class MovieListItem extends Component {

	render() {
		let movieId = this.props.movieId;
		let seenHandler = this.props.seenHandler;

		let button;

		//  Action****  MARKASSEEN
		//  Creat a second button to implement on MARKASSEEN to watch again
		if (!this.props.seen) {
			button = <RaisedButton
									label="Mark as seen"
									primary={true}
									onClick={() => seenHandler(movieId)}/>
		}

		return <div style={style}>
			<img
			  alt="movie"
				//  Reducer***  This property updated in reducer and a further
				//  action sent to make this state persist in browser
				style={{
					opacity: this.props.seen ? 0.5 : 1,
					transition: 'opacity .5s'
				}}
				src={`https://image.tmdb.org/t/p/w300${this.props.posterPath}`} />
			{button}
		</div>
	}
}

export default MovieListItem
