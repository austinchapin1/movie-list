import React from 'react';


var WatchedButtons = ( { toggleMovies } ) => (

  <div>
    <button onClick={()=>(toggleMovies(true))}>
    Unwatched
    </button>
    <button onClick={()=>(toggleMovies(false))}>
    Watched
    </button>
  </div>
)



export default WatchedButtons;