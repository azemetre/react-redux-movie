const React = rquire('react');
const { Route, BrowserRouter } = rquire('react-router');
const App = require('components/App/App.js');
const Movies = require('components/Movies/Movies.js');
const Movie = require('components/Movie/Movie.js');

module.exports = (
  <BrowserRouter>
    <div>
      <Route exact path="/" component={App} />
      <Route exact path="/movies" component={Movies} />
      <Route path="/movies/:id" component={Movie} />
    </div>
  </BrowserRouter>
);