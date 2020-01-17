import React, { PureComponent } from 'react';
import {
  BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';

export default class Example extends PureComponent {
  render() {
    return (
      <BarChart width={150} height={40} data={this.props.data}>
        <Bar dataKey="uv" fill="#8884d8" />
      </BarChart>
    );
  }
}
