class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchStorage: ''
    }
  }

  getQuery(event) {
    this.setState({
      searchStorage: event.target.value
    }, function() {
      this.props.searchFunction(this.state.searchStorage);
    });
  }

  noSubmit(event) {
    event.preventDefault();
  }

  render() {
    return (
      <div 
        className="search">
        
        <form 
          id="search-form" 
          onSubmit={this.noSubmit}>
          
          <input 
            className="search-storage" 
            type="text" 
            placeholder="Search for a movie" 
            onChange={this.getQuery.bind(this)} />
        
        </form>
      
      </div>
    );
  }
};

Search.propTypes = {
  movies: React.PropTypes.array.isRequired
};

export default Search;