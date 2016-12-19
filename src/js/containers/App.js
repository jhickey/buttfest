import React, {Component, PropTypes} from 'react';
import {Grid, Row, Col} from 'react-bootstrap';
import {connect} from 'react-redux';

import Header from '../components/Header';
import Grill from '../components/Grill';
import DataDogGraphEmbed from '../components/DataDogGraphEmbed';
import {datadogGraphs} from '../constants';


@connect(state => ({
   temperature: state.temperatureMonitor.temperature,
   connected: state.temperatureMonitor.connected,
}))
export default class App extends Component {
    render() {
        const {temperature, connected} = this.props;
        return (
            <div className="main-app-container">
                <Header/>
                <Grid>
                    <Row>
                        <Col lg={6} md={6} sm={12}>
                            <Grill
                                temperature={temperature}
                                connected={connected}
                            />
                        </Col>
                        <Col lg={6} md={6} sm={12}>
                            <DataDogGraphEmbed
                                graph={datadogGraphs.LAST_HOUR}
                            />
                        </Col>
                    </Row>
                </Grid>
            </div>
        );
    }
}
