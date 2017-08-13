import * as React from 'react';
import { Component } from 'react';
import CommonChart from './CommonChart';

interface Props {
  data: object;
  options: object;
  width?: number;
}

export default class RadarChart extends Component<Props> {
  props: Props;

  render() {
    const {
      data,
      options,
      width,
    }: Props = this.props;

    return (
      <CommonChart
        type={'radar'}
        data={data}
        options={options}
        width={width}
      />
    );
  }
}
