import React from 'react';

export default class EventList extends React.Component {
  render() {
    return (
      <div>
        <div className="ui huge header right floated">{this.props.data.length}</div>
        user events in the last 90 days.
      </div>
    )
  }
}