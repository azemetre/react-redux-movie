import { combineReducers } from 'redux';

const { reducer: movies } = require('./movies');

module.exports = combineReducers({
  movies
  // insert future reducers here
});