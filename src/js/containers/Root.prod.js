import React, {Component, PropTypes} from 'react';
import {Provider} from 'react-redux';
import App from './App';

/**
 * Component is exported for conditional usage in Root.js
 */
module.exports = class Root extends Component {
  static propTypes = {
    store: PropTypes.object
  };

  render() {
    const {store} = this.props;
    return (
      /**
       * Provider is a component provided to us by the 'react-redux' bindings that
       * wraps our app - thus making the Redux store/state available to our 'connect()'
       * calls in component hierarchy below.
       */
      <Provider store={store}>
        <App />
      </Provider>
    );
  }
};
