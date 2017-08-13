import * as React from 'react';
import { Component } from 'react';
import {
  Link,
  Route,
} from 'react-router-dom';
import Dashboard from '../dashboard/Dashboard';

interface Props {}

export default class SideBar extends Component<Props> {
  render() {
    return (
      <div>
        <Link to={'/'}>Dashboard</Link>
        <Link to={'/setting'}>setting</Link>

        <Route exact path="/" component={Dashboard}/>
      </div>
    );
  }
};
