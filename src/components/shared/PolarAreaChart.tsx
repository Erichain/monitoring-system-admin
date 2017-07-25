import * as React from 'react';
import { Component } from 'react';
import CommonChart from './CommonChart';

interface Props {}

export default class BarChart extends Component<Props> {
  props: Props;

  render() {
    return (
      <CommonChart
        type={'polarArea'}
      />
    );
  }
}
