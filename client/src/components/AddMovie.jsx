import React from 'react';

// // input and submit button
// // add input value to movie list as object
// // Display only user added movies, not the hardcoded data.

class AddMovie extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: ''
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      value: event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();

    this.props.addMovie(this.state.value)
    this.state.value = '';
  }

  render () {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" placeholder="Add movie title here" value={this.state.value} onChange={this.handleChange} />
        <button type="submit">Add</button>
      </form>
    )
  }
}

export default AddMovie;