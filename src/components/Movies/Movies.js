const React = require('react');
const { connect } = require('react-redux');
const { Link } = require('react-router');

const { fetchMoviesActionCreator } = require('../../modules/movies');
const styles = require('./movies.css');

// implement local api in future
const movies = require('../../movies.json');

class Movies extends React.Component {
  componentDidMount() {
    fetch('/src/movies.json')
      .then(res => res.json())
      .then((movies) => {
        this.props.fetchMovies(movies);
      });
  }

  render() {
    const { 
      children,
      movies = [],
      params = {}
    } = this.props;

    return (
      <div className={styles.movies}>
        <div className={params.id ? styles.listHidden : styles.list}>
          {movies.map((movie, index) => (
            <Link
              key={index}
              to={`/movies/${index + 1}`}>
              <div className={styles.movie} 
                style={{backgroundImage: `url(${movie.cover})`}} />
            </Link>
          ))}
        </div>
        {children}
      </div>
    );
  }
}

module.exports = connect(({movies}) => ({
  movies: movies.all
}), {
  fetchMovies: fetchMoviesActionCreator
})(Movies);