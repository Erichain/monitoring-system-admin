import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Component } from 'react';

import Header from './components/shared/Header';
import BarChart from './components/shared/BarChart';
import LineChart from './components/shared/LineChart';
import PieChart from './components/shared/PieChart';
import PolarAreaChart from './components/shared/PolarAreaChart';
import RadarChart from './components/shared/RadarChart';

import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.css';
import './styles/app.scss';

import {
  fetchBarData,
  fetchLineData,
  fetchPolarAreaData,
} from './services/request-service/chart-data-services';

interface Props {}

interface State {
  barData: {},
  lineData: {},
  polarAreaData: {},
}

const options: object = {
  legend: {
    display: true,
  },
  title: {
    display: true,
    text: 'chart title',
  },
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

    fetchPolarAreaData().then(({ data }) => {
      this.setState({
        polarAreaData: data,
      });
    });
  }

  render() {
    const {
      barData,
      lineData,
      polarAreaData,
    }: Partial<State> = this.state;

    return (
      <div className="container">
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
        <PolarAreaChart
          data={polarAreaData}
          options={options}
        />
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
