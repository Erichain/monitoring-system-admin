import * as React from 'react';
import { Component } from 'react';
import CommonChart from './CommonChart';

interface Props {
  data: object;
  options: object;
  width?: number;
}

export default class BarChart extends Component<Props> {
  props: Props;

  render() {
    const {
      data,
      options,
    } = this.props;

    return (
      <CommonChart
        data={data}
        options={options}
      />
    );
  }
}