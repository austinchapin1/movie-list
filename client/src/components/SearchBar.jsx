import React from 'react';


class SearchBar extends React.Component {
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
      value: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.search(this.state.value);

    this.setState({
      value: ''
    })
  }

  render () {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" placeholder="Search.." value={this.state.value} onChange={this.handleChange} />
          <button type="submit" onSubmit={this.handleSubmit}>Go!</button>
        </form>

        {/* Need to have two different buttons
              -One to select only watched movies
              -One to select only unwatched movie

              After search list has been collected, show all?
              Click on watch,
        */}

        {/* <button className="btn" onClick={this.toggleWatch.bind(this)}>
          {this.state.isToggleOn ? 'Have to See!' : 'Watched'}
        </button>
        <button className="btn" onClick={this.toggleWatch.bind(this)}>
          {this.state.isToggleOn ? 'Have to See!' : 'Watched'}
        </button> */}

      </div>
    )
  }
}


export default SearchBar;