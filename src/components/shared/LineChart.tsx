import * as React from 'react';
import { Component } from 'react';
import CommonChart from './CommonChart';

interface Props {
  data: object;
  options: object;
  width?: number;
}

export default class LineChart extends Component<Props> {
  props: Props;

  render() {
    const { data, options }: Props = this.props;

    return (
      <CommonChart
        type={'line'}
        data={data}
        options={options}
      />
    );
  }
}
