import React from 'react';

export default class EventActivity extends React.Component {
  render() {
    return (
      <div className="statistic">
        <div className="value">{this.props.data} / 90 </div>
        <div className="label">Active Days</div>
      </div>
    );
  }
}