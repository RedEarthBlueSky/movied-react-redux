import React, {Component} from 'react';
import RaisedButton from 'material-ui/RaisedButton'

let style={
	display: 'flex',
	flexDirection: 'column',
	margin: 10,
}

class MovieListItem extends Component {

	render() {
		return <div style={style}>
			<img src={`https://image.tmdb.org/t/p/w300${this.props.posterPath}`} />
			<RaisedButton label="Mark as seen" primary={true} />
		</div>
	}
}

export default MovieListItem