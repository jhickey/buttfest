import  React, {Component, PropTypes} from 'react';

import {Navbar} from 'react-bootstrap';

export default class Header extends Component {

  static propTypes = {
    temperature: PropTypes.number
  };

  render() {
    return (
      <Navbar inverse collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#">Buttfest 2016!</a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
      </Navbar>
    );
  }
}
