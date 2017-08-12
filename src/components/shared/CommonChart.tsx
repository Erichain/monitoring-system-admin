import * as React from 'react';
import * as Chart from 'chart.js';
import { Component } from 'react';
import { findDOMNode } from 'react-dom';

interface Props {
  data: object;
  options: object;
  width?: number;
  type?: string;
}

export default class CommonChart extends Component<Props, States> {
  props: Props;

  static defaultProps: Partial<Props> = {
    data: {},
    type: 'bar',
    options: {},
    width: 60,
  };

  componentWillReceiveProps(nextProps: Props) {
    this.initializeLineChart(nextProps);
  }

  initializeLineChart(nextProps: Props) {
    const chartCtx = findDOMNode(this).querySelector('#chart-ctx');
    const {
      data,
      type,
      options,
    }: Props = nextProps;

    new Chart(chartCtx, {
      type,
      data,
      options,
    });
  }

  render() {
    const { width } = this.props;

    return (
      <div className="chart-container" style={{
        width: `${width}vw`,
      }}>
        <canvas id="chart-ctx" />
      </div>
    );
  }
}
