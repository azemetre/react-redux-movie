const React = require('react');
const { connect } = require('react-redux');
const { Link } = require('react-router');

const { fetchMoviesActionCreator } = require('../../modules/movies');
const styles = require('./movies.css');
const url = `http://localhost:3000`;

class Movies extends React.Component {
  componentDidMount() {
    fetch(`${url}/movies`)
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
        <section className={params.id ? styles.listHidden : styles.list}>
          {movies.map((movie, index) => (
            <Link
              key={index}
              to={`/movies/${index + 1}`}>
              <div className={styles.movie} 
                style={{backgroundImage: `url(${movie.cover})`}} />
            </Link>
          ))}
        </section>
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