import * as React from 'react';
import { Component } from 'react';
import * as Chart from 'chart.js';

interface Props {
  name: string;
  data: object;
}

export default class Banner extends Component<Props, object> {
  constructor(props: Props) {
    super(props);
  }

  render() {
    return (
      <div>HAHAHAH!!!</div>
    );
  }
}
