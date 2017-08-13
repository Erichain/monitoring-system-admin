import * as React from 'react';
import { render } from 'react-dom';
import {
  HashRouter as Router,
} from 'react-router-dom';
import SideBar from './components/page-parts/SideBar';

render(
  <Router basename="/">
    <SideBar />
  </Router>,
  document.getElementById('app-container')
);
