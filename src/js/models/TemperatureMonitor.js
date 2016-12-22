import {Record} from 'immutable';

const Monitors = Record({
  ambient: null,
  internal: null
});

const TemperatureMonitorRecord = Record({
  connected: true,
  error: null,
  temperatures: new Monitors(),
  internalTemperature: null,
  lastUpdate: null
});

export default class TemperatureMonitor extends TemperatureMonitorRecord {
  setTemperature(temperature, type = 'ambient') {
    console.log('***', temperature, type);
    return this
      .setIn(['temperatures', type], temperature)
      .set('lastUpdate', new Date());
  }

  setConnectionStatus(connected) {
    return this.set('connected', connected);
  }

  setError(error) {
    return this.set('error', error);
  }
}
