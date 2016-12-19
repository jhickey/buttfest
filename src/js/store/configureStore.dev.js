import {createStore, applyMiddleware, compose} from 'redux';
import rootReducer from '../ducks';
import createLogger from 'redux-logger';
import DevTools from '../containers/DevTools';
import asyncMiddleware from '../middleware/asyncMiddleware';
import socketMiddleware from '../middleware/socketMiddleware';
/**
 * Entirely optional, this tiny library adds some functionality to
 * your DevTools, by logging actions/state to your console. Used in
 * conjunction with your standard DevTools monitor gives you great
 * flexibility!
 */
const logger = createLogger();

const finalCreateStore = compose(
    applyMiddleware(asyncMiddleware(), socketMiddleware('temperature'), logger),
    DevTools.instrument()
)(createStore);

module.exports = function configureStore(initialState) {
    const store = finalCreateStore(rootReducer, initialState);

    // Hot reload reducers (requires Webpack or Browserify HMR to be enabled)
    if (module.hot) {
        module.hot.accept('../ducks', () =>
            store.replaceReducer(require('../ducks'))
        );
    }

    return store;
};
