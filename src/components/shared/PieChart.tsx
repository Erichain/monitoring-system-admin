import * as React from 'react';
import { Component } from 'react';
import CommonChart from './CommonChart';

interface Props {}

export default class BarChart extends Component<Props> {
  props: Props;

  static defaultProps: Partial<Props> = {
    width: 50,
  };

  render() {
    return (
      <div className="container-chart">
        <CommonChart
          type={'pie'}
        />
      </div>
    );
  }
}
