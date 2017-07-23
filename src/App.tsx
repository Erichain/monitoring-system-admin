import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Component } from 'react';
import Banner from './components/Banner';

class App extends Component {
  render() {
    return (
      <div>
        <Banner />
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app-container')
);
