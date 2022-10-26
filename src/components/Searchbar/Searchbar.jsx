import { Component } from 'react';

export class Searchbar extends Component {
  state = {
    guery: '',
  };

  handleChange = event => {
    const { value } = event.target;
    this.setState({
      guery: value,
    });
  };

  onSubmit = event => {
    event.preventDefault();
    this.props.handleSubmit(this.state.guery);
  };

  render() {
    return (
      <header className="searchbar">
        <form onSubmit={this.onSubmit} className="form">
          <button type="submit" className="button">
            <span className="button-label">Search</span>
          </button>
          <input
            onChange={this.handleChange}
            className="input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}
