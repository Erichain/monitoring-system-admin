import * as React from 'react';
import { Component } from 'react';
import CommonChart from './CommonChart';

interface Props {
  width?: number;
}

export default class BarChart extends Component<Props> {
  props: Props;

  static defaultProps: Partial<Props> = {
    width: 50,
  };

  render() {
    const { width } = this.props;

    return (
      <div
        className="container-chart"
        style={{
          width: `${width}vw`,
        }}
      >
        <CommonChart />
      </div>
    );
  }
}