import React from 'react';
import SearchBar from './SearchBar';
import Github from '../apis/Github';
import EventList from './EventList';
import EventChart from './EventChart';
import RepoList from './RepoList';

export default class App extends React.Component {
  state = { userData: [] };

  onTermSubmit = (user) => {
    Github.get(user + '/events')
      .then(res => {
        let filteredData = [];
        const data = res.data;
        for (const { type, repo, created_at } of data) {
          filteredData.push({ type: type, repo: repo.name, date: created_at });
        }
        this.setState({ userData: filteredData });
      })
  };

  userEventTypes = () => {
    let map = new Map();
    let results = [];
    let regex = /event/gi;
    for (const { type } of this.state.userData) {
      if (map.has(type)) {
        map.set(type, map.get(type) + 1);
      } else {
        map.set(type, 1);
      }
    }
    map.forEach((value, key) => {
      results.push({ name: key.replace(regex, ''), uv: value });
    });
    return results;
  }

  userTopRepos = () => {
    let map = new Map();
    let results = [];
    for (const { repo } of this.state.userData) {
      if (map.has(repo)) {
        map.set(repo, map.get(repo) + 1);
      } else {
        map.set(repo, 1);
      }
    }
    map.forEach((value, key) => {
      results.push({ name: key, uv: value });
    });
    results.sort((a, b) => {
      return b.uv - a.uv
    })
    return results;
  }

  render() {
    return (
      <div className="ui container">
        <SearchBar onFormSubmit={this.onTermSubmit} />
        <EventList data={this.state.userData} />
        <EventChart data={this.userEventTypes()} />
        <RepoList data={this.userTopRepos()} />
      </div>
    );
  }
}