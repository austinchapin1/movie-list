import React from 'react';
import Movie from './Movie.jsx';


var MovieList = ({movies, toggle}) => (

  <div className='movie-list'>
    <div>
      {movies.map((movie, idx) =>
      // Pass down props to movie. Wrapped toggle function from App with anon func and passed in movie idx
       <Movie movie={movie} key={movie.title} toggle={()=>{toggle(idx)}} idx={idx}/>
      )}
    </div>
  </div>
)

export default MovieList;

