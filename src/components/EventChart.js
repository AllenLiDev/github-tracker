import React, { PureComponent } from 'react';
import {
  BarChart, Bar, LabelList, XAxis
} from 'recharts';
import ResponsiveContainer from 'recharts/lib/component/ResponsiveContainer';

export default class Example extends PureComponent {
  render() {
    return (
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={this.props.data}>
          <XAxis dataKey="name" />
          <Bar dataKey="uv" fill="#8884d8">
            <LabelList dataKey="uv" position="top" />
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    );
  }
}
