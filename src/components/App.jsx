import MovieList from './MovieList.js';
import Search from './Search.js';
import Add from './Add.js';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      listOfMovies: [],
      availableMovies: [],
    };
  }

  search(query) {
    if (query === '') {
      this.setState({
        availableMovies: this.state.listOfMovies
      })
    }
    var pattern = new RegExp(query, 'i');
    // This is to create pattern matching for all posible cases in a string and ignore case.
    // Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp
    var filtered = _.filter(this.state.listOfMovies ,function(data) {
      return pattern.test(data.Title);
    });
    this.setState({
      availableMovies: filtered
    });
  }

  addMovie(movieTitle) {
    var newMovie = {
      Title: movieTitle
    };
    var newState = this.state.listOfMovies.concat(newMovie);
    this.setState({
      listOfMovies: newState,
      availableMovies: newState
    });
  }

  render() {
    return (
      <div>
        <Add submit={this.addMovie.bind(this)}/>
        <Search movies={this.state.listOfMovies} searchFunction={this.search.bind(this)}/>
        <MovieList movies={this.state.availableMovies} />
      </div>
    )
  }
};

export default App;