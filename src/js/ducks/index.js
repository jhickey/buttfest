import {combineReducers} from 'redux';
import temperatureMonitor from './temperatureMonitor';

const rootReducer = combineReducers({
    temperatureMonitor
});

export default rootReducer;
