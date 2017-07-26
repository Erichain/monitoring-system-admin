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
} from './services/request-service/chart-data-services';

interface Props {}

interface State {
  barData: {},
}

const options = {};

class App extends Component<Props, object> {
  constructor(props: Props) {
    super(props);
  }

  componentDidMount() {
    fetchBarData().then(data => {
      this.setState({
      });
      console.log(data)
    });
  }

  render() {
    return (
      <div>
        <Header />
        <h1>Bar Chart</h1>
        <BarChart
          options={options}
        />
        <h1>Line Chart</h1>
        <LineChart />
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
