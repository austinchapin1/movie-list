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
    // Why does this work with setState?
    this.state.value = '';

    // this.setState({
    //   value: ''
    // })
  }

  render () {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" placeholder="Search.." value={this.state.value} onChange={this.handleChange} />
        <button type="submit">Go!</button>
      </form>
    )
  }
}


export default SearchBar;