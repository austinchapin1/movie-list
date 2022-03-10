import React from 'react';
import MovieList from './MovieList.jsx'
import Movie from './Movie.jsx';
import SearchBar from './SearchBar.jsx';
import AddMovie from './AddMovie.jsx';
import ExampleData from './ExampleData.js';


class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      allMovies: [],
      movieList: []
    }

    this.search = this.search.bind(this);
    this.addMovie = this.addMovie.bind(this);
    this.toggleWatched = this.toggleWatched.bind(this);
  }

  search (searchValue) {

    var searchList = this.state.allMovies.filter( movie => {
      return movie.title.toLowerCase().includes(searchValue)
     })

    this.setState({
      movieList: searchList.length ? searchList : [{title: 'Sorry, nothing by that title'}]
    })

    console.log(searchList)
  }



  addMovie (movieName) {
    // check if movie exists, if so dont add it
    // this.state.allMovies.
    // if (this.state.allMovies) {}
    var movieObj = {title: movieName};

    var temp = this.state.allMovies;

    temp.push(movieObj);

    this.setState({
      allMovies: temp
    })
  }

  toggleWatched () {
    console.log('hello')
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
  }


  render() {
    return (
      <div>
        <h1>Movie List</h1>
        <AddMovie addMovie={this.addMovie}/>
        <br/>
        <SearchBar search={this.search}/>
        <br/>
        <MovieList movies={this.state.movieList} watched={this.toggleWatched.bind(this)}/>
      </div>
    );
  }
}




// use input from onSubmit to
// .filter movieList with .contains searchtext?
//  On submit - take value for event.target.value
// loop over MoviesList and check if title contains searchvalue
// if it does, add to movieList - before invoking setState so as to only rerender once

// handleSubmit() {

//   // value = event.target.value;
//   // alert(this.state.value)
//   event.preventDefault();

//   this.setState({
//     movieList: videos
//   })
// }
export default App;