import * as React from 'react';
import { Component } from 'react';

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
      <div className="navbar navbar-light">
        <div className="navbar-brand">Charts</div>
      </div>
    );
  }
}
