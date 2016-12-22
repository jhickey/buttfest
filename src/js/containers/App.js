import React, {Component, PropTypes} from 'react';
import {Grid, Row, Col} from 'react-bootstrap';
import {connect} from 'react-redux';

import Header from '../components/Header';
import Grill from '../components/Grill';
import Pig from '../components/Pig';
import Graph from '../components/Graph';


@connect(state => ({
  ambientTemperature: state.temperatureMonitor.temperatures.ambient,
  internalTemperature: state.temperatureMonitor.temperatures.internal,
  connected: state.temperatureMonitor.connected,
  lastUpdate: state.temperatureMonitor.lastUpdate
}))
export default class App extends Component {

  static propTypes = {
    ambientTemperature: PropTypes.number,
    internalTemperature: PropTypes.number,
    connected: PropTypes.bool,
    lastUpdate: PropTypes.instanceOf(Date)
  };

  render() {
    const {ambientTemperature, internalTemperature, connected, lastUpdate} = this.props;
    return (
      <div className="main-app-container">
        <Header/>
        <Grid>
          <Row>
            <Col lg={5} md={5} sm={12}>
              <Grill
                title="Ambient grill temperature"
                temperature={ambientTemperature}
                connected={connected}
                lastUpdate={lastUpdate}
              />
              <Pig
                title="Internal meat temperature"
                temperature={internalTemperature}
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
