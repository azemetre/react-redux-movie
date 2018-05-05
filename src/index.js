const React = require('react');
const ReactDOM = require('react-dom');
const { Provider, CreateStore } = require('react-redux');
const reducers = require('./modules');
const routes = require('./routes');

module.exports = ReactDOM.render((
  <Provider store={createStore(reducers)}>
    {routes}
  </Provider>
), document.getElementById('app'));