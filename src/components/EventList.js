import React from 'react';

export default class EventList extends React.Component {
  render() {
    return (
      <div>{this.props.data.length} user events in the last 90 days.</div>
    )
  }
}