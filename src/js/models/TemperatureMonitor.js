import {Record} from 'immutable';

const TemperatureMonitorRecord = Record({
    connected: true,
    error: null,
    temperature: null
});

export default class TemperatureMonitor extends TemperatureMonitorRecord{
    setTemperature(temperature) {
        return this.set('temperature', temperature);
    }
    setConnectionStatus(connected) {
        return this.set('connected', connected);
    }
    setError(error) {
        return this.set('error', error);
    }
}