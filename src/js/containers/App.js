import React, {Component, PropTypes} from 'react';
import {Grid, Row, Col} from 'react-bootstrap';
import {connect} from 'react-redux';

import Header from '../components/Header';
import Grill from '../components/Grill';
import Graph from '../components/Graph';


@connect(state => ({
  temperature: state.temperatureMonitor.temperature,
  connected: state.temperatureMonitor.connected,
  lastUpdate: state.temperatureMonitor.lastUpdate
}))
export default class App extends Component {

  static propTypes = {
    temperature: PropTypes.number,
    connected: PropTypes.bool,
    lastUpdate: PropTypes.instanceOf(Date)
  };

  render() {
    const {temperature, connected, lastUpdate} = this.props;
    return (
      <div className="main-app-container">
        <Header/>
        <Grid>
          <Row>
            <Col lg={5} md={5} sm={12}>
              <Grill
                temperature={temperature}
                connected={connected}
                lastUpdate={lastUpdate}
              />
            </Col>
            <Col lg={7} md={7} sm={12}>
              <Graph/>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}
