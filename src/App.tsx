import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Component } from 'react';
import Header from './components/shared/Header';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app-container')
);
