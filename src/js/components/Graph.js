import  React, {Component} from 'react';
import {Panel, FormGroup, FormControl} from 'react-bootstrap';
import {datadogGraphs} from '../constants';
import DatadogGraphEmbed from './DataDogGraphEmbed';

export default class Grill extends Component {
  constructor() {
    super();
    this.state = {
      currentGraph: datadogGraphs.LAST_HOUR
    };
  }

  handleChangeGraph(e) {
    this.setState({
      currentGraph: e.target.value
    });
  }

  render() {
    const {currentGraph} = this.state;
    return (
      <Panel
        header="Temperature over time"
      >
        <FormGroup controlId="formControlsSelect">
          <FormControl componentClass="select" onChange={::this.handleChangeGraph}>
            <option value={datadogGraphs.LAST_HOUR}>1 Hour</option>
            <option value={datadogGraphs.LAST_4_HOURS}>4 Hours</option>
            <option value={datadogGraphs.LAST_DAY}>1 Day</option>
          </FormControl>
        </FormGroup>
        <DatadogGraphEmbed graph={currentGraph}/>
      </Panel>
    );
  }
}
