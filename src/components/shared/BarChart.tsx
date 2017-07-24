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

  static defaultProps: Partial<Props> = {
    width: 50,
  };

  render() {
    const {
      width,
      data,
      options,
    } = this.props;

    return (
      <div
        className="container-chart"
        style={{
          width: `${width}vw`,
        }}
      >
        <CommonChart
          data={data}
          options={options}
        />
      </div>
    );
  }
}