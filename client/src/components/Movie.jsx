import React from 'react';
import App from "./App.jsx"
import MovieList from './MovieList.jsx';

var Movie = (props) => (

  <div className="movie-div">
    <div className="movie-title">{props.movie.title}</div>
    {/* Props.toggle already bound to specific movie object */}
    <button className="btn" onClick={props.toggle}>
      {/* Ternary based on true/false of toggle property on movie object */}
      {props.movie.toggleWatch ? 'Have to See!' : 'Watched'}
    </button>
  </div>
)

export default Movie