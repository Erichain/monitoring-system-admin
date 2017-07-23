import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Component } from 'react';
import Header from './components/shared/Header';
import BarChart from './components/shared/BarChart';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <BarChart />
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app-container')
);
