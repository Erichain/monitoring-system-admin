import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {
  HashRouter as Router,
} from 'react-router-dom';
import SideBar from './components/shared/SideBar';

ReactDOM.render(
  <Router basename="/">
    <SideBar />
  </Router>,
  document.getElementById('app-container')
);
