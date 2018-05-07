const React = require('react');
const ReactDOM = require('react-dom');
const { Provider } = require('react-redux');
const { createStore } = require('redux');
const reducers = require('./modules');
const routes = require('./routes.js');

module.exports = ReactDOM.render((
  <Provider store={createStore(reducers)}>
    {routes}
  </Provider>
), document.getElementById('app'));