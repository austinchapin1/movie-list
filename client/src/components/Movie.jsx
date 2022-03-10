import React from 'react';
import App from "./App.jsx"
import MovieList from './MovieList.jsx';

// Props is individual movie
// var Movie = ({movie}) => (
//   <div>
//     <div>{movie.title}</div>
//     <button>Watched</button>
//   </div>
// )

class Movie extends React.Component {
  constructor(props) {
    super(props);


    this.state = {
      isToggle: true
    }

    this.handleClick = this.handleClick.bind(this);
  }


  handleClick() {
   console.log(this.props);
   this.props.toggleWatched()
  }

  render () {
    return (
      <div className="movie-div">
        <div className="movie-title">{this.props.movie.title}</div>
        <button className="btn" onClick={this.handleClick}>
          {this.state.isToggleOn ? 'Watched' : 'Have to See!'}
        </button>
      </div>
    )
  }

}


export default Movie