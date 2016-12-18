import {Record} from 'immutable';

const AsyncRecord = Record({
    loading: false,
    loaded: false,
    error: null,
    data: null
});

export default class Asynchronous extends AsyncRecord {
    isLoading() {
        return this.get('loading');
    }
    isLoaded() {
        return this.get('loaded');
    }
    hasError() {
        return !!this.get('error');
    }
    getErrorMessage() {
        return this.get('error') && this.get('error').message ? this.get('error').message : 'Unknown error';
    }
    getData() {
        return this.get('data');
    }
}
