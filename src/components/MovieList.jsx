import Movie from './Movie.js';

var MovieList = (props) => {
  if (props.movies.length === 0) {
    return (
      <h5 className="movie-not-found">Movie Not Found!</h5>
    );
  } else {
    return (
      <div className="movie-list">
        {props.movies.map((movie, index) => {
          return (
            <Movie 
              movie={movie} 
              key={index}/>
          )
        })}
      </div>
    );
  }
}

MovieList.propTypes = {
  movies: React.PropTypes.array.isRequired
};

export default MovieList;