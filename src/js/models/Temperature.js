import Asynchronous from './Asynchronous';

export default class Temperature extends Asynchronous {
    getTemperature() {
        return this.get(['data', 'temperature']);
    }
}
