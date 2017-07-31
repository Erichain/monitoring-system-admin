import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Component } from 'react';

import Header from './components/shared/Header';
import BarChart from './components/shared/BarChart';
import LineChart from './components/shared/LineChart';
import PieChart from './components/shared/PieChart';
import PolarAreaChart from './components/shared/PolarAreaChart';
import RadarChart from './components/shared/RadarChart';

import {
  fetchBarData,
  fetchLineData,
} from './services/request-service/chart-data-services';

interface Props {}

interface State {
  barData: {},
  lineData: {},
}

const options: object = {
  legend: {
    display: true,
  },
  title: {
    display: true,
    text: 'This is line chart',
  },
  layout: {
    padding: {
      top: 0,
      right: 50,
      bottom: 0,
      left: 50,
    }
  }
};

class App extends Component<Props, State> {
  private state: Partial<State> = {};

  protected setState: any;

  constructor(props: Props) {
    super(props);
  }

  componentDidMount() {
    fetchBarData().then(({ data }) => {
      this.setState({
        barData: data,
      });
    });

    fetchLineData().then(({ data }) => {
      this.setState({
        lineData: data,
      });
    });
  }

  render() {
    const {
      barData,
      lineData,
    }: Partial<State> = this.state;

    return (
      <div>
        <Header />
        <h1>Bar Chart</h1>
        <BarChart
          data={barData}
          options={options}
        />
        <h1>Line Chart</h1>
        <LineChart
          data={lineData}
          options={options}
        />
        <h1>Pie Chart</h1>
        <PieChart />
        <h1>Polar Area Chart</h1>
        <PolarAreaChart />
        <h1>Radar Chart</h1>
        <RadarChart />
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app-container')
);
