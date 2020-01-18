import React from 'react';

export default class EventList extends React.Component {
  render() {
    return (
      <div className="statistic">
        <div className="value">{this.props.data.length}</div>
        <div className="label">Total Events</div>
      </div>
    )
  }
}