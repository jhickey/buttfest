import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from '../ducks';
import asyncMiddleware from '../middleware/asyncMiddleware';
import socketMiddleware from '../middleware/socketMiddleware';

const finalCreateStore = compose(
    applyMiddleware(asyncMiddleware(), socketMiddleware('temperature'))
)(createStore);

module.exports = function configureStore(initialState) {
  return finalCreateStore(rootReducer, initialState);
};
