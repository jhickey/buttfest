import  React, {Component, PropTypes} from 'react';
import {Panel} from 'react-bootstrap';

export default Graphic =>  class extends Component {

  static propTypes = {
    title: PropTypes.string.isRequired,
    temperature: PropTypes.number,
    connected: PropTypes.bool,
    lastUpdate: PropTypes.instanceOf(Date)
  };

  getColor(temp) {
    const t = -30 + (60 * temp / (250));
    // Map the temperature to a 0-1 range
    let a = (t + 30) / 60;

    /*eslint-disable*/
    a = (a < 0) ? 0 : ((a > 1) ? 1 : a);
    /*eslint-enable*/

    // Scrunch the green/cyan range in the middle
    const sign = (a < 0.5) ? -1 : 1;
    a = sign * Math.pow(2 * Math.abs(a - 0.5), 0.35) / 2 + 0.5;

    // Linear interpolation between the cold and hot
    const h0 = 259;
    const h1 = 12;
    const h = (h0) * (1 - a) + (h1) * (a);
    return 'hsl(' + [h, '75%', '50%'] + ')';
  }

  render() {
    const {temperature = 0, connected, title} = this.props;
    const color = this.getColor(temperature);
    return (
      <Panel
        header={connected ? title : `${title}: Temperature monitor disconnected, awaiting reconnect...`}
        bsStyle={connected ? 'success' : 'danger'}
      >
        <Graphic
          temperature={temperature}
          connected={connected}
          color={color}
        />
      </Panel>
    );
  }
};
