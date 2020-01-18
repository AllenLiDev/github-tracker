import React from 'react';

export default class SearchBar extends React.Component {
  state = { term: '' };

  onInputChanged = (e) => {
    this.setState({ term: e.target.value });
  }

  onFormSubmit = (e) => {
    e.preventDefault();
    this.props.onFormSubmit(this.state.term);
  }

  render() {
    return (
      <div className='search-bar ui basic segment'>
        <form className="ui form" onSubmit={this.onFormSubmit}>
          <div className="field">
            <label>Github <i className="github icon" />Username</label>
            <input type="text" value={this.state.term} onChange={this.onInputChanged} />
          </div>
        </form>
      </div>
    );
  }
}