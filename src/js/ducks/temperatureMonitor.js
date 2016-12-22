import {socketActionTypes} from '../constants';
import TemperatureMonitor from '../models/TemperatureMonitor';

const initialState = new TemperatureMonitor();

export default function reducer(state = initialState, action) {
  const handlers = {
    [socketActionTypes.SOCKET_DATA]: action => {
      const {temperature, type} = action.payload;
      return state.setTemperature(temperature, type);
    },
    [socketActionTypes.SOCKET_ERROR]: action => {
      return state
        .setError(action.payload)
        .setConnectionStatus(false);
    },
    [socketActionTypes.SOCKET_RECONNECT]: () => state.setConnectionStatus(true)
  };
  return handlers[action.type] ? handlers[action.type](action) : state;
}
