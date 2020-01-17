import React from 'react';
import SearchBar from './SearchBar';
import Github from '../apis/Github';
import EventList from './EventList';

export default class App extends React.Component {
  state = { userData: [] };

  onTermSubmit = (user) => {
    Github.get(user + '/events')
      .then(res => {
        const events = res.data;
        this.setState({ userData: events });
      })
  };

  render() {
    return (
      <div className="ui container">
        <SearchBar onFormSubmit={this.onTermSubmit} />
        <EventList eventList={this.state.userData} />
      </div>
    );
  }
}