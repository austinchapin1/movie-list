import React from 'react';
import Movie from './Movie.jsx';


// Props is array of movie
var MovieList = ({movies, watched}) => (

  <div className='movie-list'>
    <div>
      {movies.map(movie =>
        <Movie movie={movie} />
      )}
    </div>
  </div>
)


export default MovieList;