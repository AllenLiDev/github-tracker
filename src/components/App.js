import React from 'react';
import SearchBar from './SearchBar';
import Github from '../apis/Github';
import EventList from './EventList';
import EventChart from './EventChart';
import RepoList from './RepoList';
import EventActivity from './EventActivity';

export default class App extends React.Component {
  state = { user: [], userData: [] };

  onTermSubmit = (user) => {
    Github.get('users/' + user + '/events')
      .then(res => {
        let filteredData = [];
        const data = res.data;
        for (const { type, repo, created_at } of data) {
          filteredData.push({ type: type, repo: repo.name, date: created_at });
        }
        this.setState({ user: user, userData: filteredData });
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

  userActiveDays = () => {
    let map = new Map();
    for (const { date } of this.state.userData) {
      let eventDate = new Date(date).toDateString();
      if (map.has(eventDate)) {
        map.set(eventDate, map.get(eventDate) + 1);
      } else {
        map.set(eventDate, 1);
      }
    }
    let days = map.size;
    return days;
  }

  render() {
    const usernameEntered = this.state.userData;
    let content;
    if (usernameEntered.length > 0) {
      content =
        <>
          <div className="row">
            <div className="column">
              <div className="ui center aligned huge header">
                {this.state.user} GitHub <i className="github icon" />Activity In Last 90 Days
            </div>
            </div>
          </div>
          <div className="row">
            <div className="column">
              <div className="ui two statistics">
                <EventList data={this.state.userData} />
                <EventActivity data={this.userActiveDays()} />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="column">
              <div className="ui center aligned huge header">
                Activity By Type
              </div>
            </div>
          </div>
          <div className="row">
            <EventChart data={this.userEventTypes()} />
          </div>
          <div className="row">
            <div className="column">
              <div className="ui center aligned huge header">
                Most Active Repos
              </div>
            </div>
          </div>
          <div className="row">
            <RepoList data={this.userTopRepos()} />
          </div>
        </>
    } else {
      content =
        <div className="row">
          <div className="column">
            <div className="ui center aligned huge header">
              Enter a GitHub <i className="github icon" />Username
        </div>
          </div>
        </div>;
    }

    return (
      <div className="ui grid container">
        <div className="row">
          <div className="column">
            <SearchBar onFormSubmit={this.onTermSubmit} />
          </div>
        </div>
        {content}
      </div>
    );
  }
}