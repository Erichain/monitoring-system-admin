import * as React from 'react';
import { Component } from 'react';
import CommonChart from './CommonChart';

interface Props {
  width?: number;
  height?: number;
}

export default class LineChart extends Component<Props> {
  props: Props;

  render() {
    return (
      <div className="container-chart">
        <CommonChart
          type={'line'}
        />
      </div>
    );
  }
}
