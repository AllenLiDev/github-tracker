import React from 'react';

import axios from 'axios';

export default class Github extends React.Component {
  state = {
    responseData: []
  }

  componentDidMount() {
    let user = 'headhuntar';
    axios.get(`https://api.github.com/users/` + user + "/events")
      .then(res => {
        const responseData = res.data;
        this.setState({ responseData });
      })
  }

  pushEvents() {
    let pushEvents = [];
    this.state.responseData.forEach(event => {
      if (event.type === "PushEvent") {
        pushEvents.push(event.created_at);
      }
    });
    console.log(pushEvents);
  }

  render() {
    this.pushEvents();
    return (
      <ul>
        {/* {this.state.persons.map(person => <li>{person.name}</li>)} */}
      </ul>
    )
  }
}