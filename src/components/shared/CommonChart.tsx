import * as React from 'react';
import * as Chart from 'chart.js';
import { Component } from 'react';
import { findDOMNode } from 'react-dom';

interface Props {
  data: object;
  options: object;
  type?: string;
}

interface States {}

export default class CommonChart extends Component<Props, States> {
  props: Props;

  static defaultProps: Partial<Props> = {
    data: {},
    type: 'bar',
    options: {},
  };

  componentDidMount() {
    this.initializeLineChart();
  }

  initializeLineChart() {
    const chartElem = findDOMNode(this);
    const {
      data,
      type,
    } = this.props;

    new Chart(chartElem, {
      type,
      data,
    });
  }

  render() {
    return (
      <canvas />
    );
  }
}
