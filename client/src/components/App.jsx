import React from 'react';
import MovieList from './MovieList.jsx'
import Movie from './Movie.jsx';
import SearchBar from './SearchBar.jsx';
import AddMovie from './AddMovie.jsx';
import ExampleData from './ExampleData.js';
import WatchedButtons from './WatchedButtons.jsx'


class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      unwatchedMovies: [],
      watchedMovies: [],
      movieList: [],
    }


    this.search = this.search.bind(this);
    this.addMovie = this.addMovie.bind(this);
    this.toggleWatch = this.toggleWatch.bind(this);
    this.toggleMovies = this.toggleMovies.bind(this);
  }


  search (searchValue) {
    var allMovies = [...this.state.unwatchedMovies, ...this.state.watchedMovies];
    // Filter allMovies, return list of titles that include what is current in input val
    var searchList = allMovies.filter( movie => {
      return movie.title.toLowerCase().includes(searchValue)
     })
    // Set State to filtered list, re-render
    this.setState({
      movieList: searchList.length ? searchList : [{title: 'Sorry, nothing by that title'}]
    })
  }



  addMovie (movieName) {
    // Don't allow multiples of movie names
    // Filter through ALL movies, watched and unwatched
    var allMovies = [...this.state.unwatchedMovies, ...this.state.watchedMovies];
    allMovies.forEach( movie => {
      if (movie.title.toLowerCase().includes(movieName.toLowerCase())) {
        alert(`${movieName} already exists!`)
      }
    })
    // Create movie object, add to list, update state
    var movieObj = {title: movieName, toggleWatch: true};
    var movieAdded = [...this.state.unwatchedMovies, movieObj];

    this.setState({
      unwatchedMovies: movieAdded,
      movieList: movieAdded
    })
  }





// INDIVIDUAL MOVIE TOGGLE
  toggleWatch(idx) {
    var movieObj = this.state.movieList[idx];

    movieObj.toggleWatch = !movieObj.toggleWatch;

    if (!movieObj.toggleWatch) {
      var filtered = this.state.unwatchedMovies.filter( movie => {
        return movie.title !== movieObj.title;
      })
      console.log(filtered);
      this.setState({
        unwatchedMovies: filtered,
        watchedMovies: [...this.state.watchedMovies, movieObj]
      })
    } else {
      var filtered = this.state.watchedMovies.filter( movie => {
        return movie.title !== movieObj.title
      })
      this.setState({
        unwatchedMovies: [...this.state.unwatchedMovies, movieObj],
        watchedMovies: filtered
      })
    }
  }


// LIST OF MOVIES TOGGLE
  toggleMovies (predicate) {
    if (predicate) {
      this.setState({
        movieList: this.state.unwatchedMovies
      })
    } else {
      this.setState({
        movieList: this.state.watchedMovies
      })
    }
  }



  render() {
    return (
      <div>
        <h1>Movie List</h1>
        <AddMovie addMovie={this.addMovie}/>
        <br/>
        <SearchBar search={this.search}/>
        <br/>
        <WatchedButtons toggleMovies={this.toggleMovies}/>
        <br/>
        <MovieList movies={this.state.movieList} toggle={this.toggleWatch}/>
      </div>
    );
  }
}


export default App;