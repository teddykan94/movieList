import Movie from './Movie.js';

var MovieList = props => {
  if (props.movies.length === 0) {
    return React.createElement(
      "h5",
      { className: "movie-not-found" },
      "Movie Not Found!"
    );
  } else {
    return React.createElement(
      "div",
      { className: "movie-list" },
      props.movies.map((movie, index) => {
        return React.createElement(Movie, {
          movie: movie,
          key: index });
      })
    );
  }
};

MovieList.propTypes = {
  movies: React.PropTypes.array.isRequired
};

export default MovieList;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL01vdmllTGlzdC5qc3giXSwibmFtZXMiOlsiTW92aWUiLCJNb3ZpZUxpc3QiLCJwcm9wcyIsIm1vdmllcyIsImxlbmd0aCIsIm1hcCIsIm1vdmllIiwiaW5kZXgiLCJwcm9wVHlwZXMiLCJSZWFjdCIsIlByb3BUeXBlcyIsImFycmF5IiwiaXNSZXF1aXJlZCJdLCJtYXBwaW5ncyI6IkFBQUEsT0FBT0EsS0FBUCxNQUFrQixZQUFsQjs7QUFFQSxJQUFJQyxZQUFhQyxLQUFELElBQVc7QUFDekIsTUFBSUEsTUFBTUMsTUFBTixDQUFhQyxNQUFiLEtBQXdCLENBQTVCLEVBQStCO0FBQzdCLFdBQ0U7QUFBQTtBQUFBLFFBQUksV0FBVSxpQkFBZDtBQUFBO0FBQUEsS0FERjtBQUdELEdBSkQsTUFJTztBQUNMLFdBQ0U7QUFBQTtBQUFBLFFBQUssV0FBVSxZQUFmO0FBQ0dGLFlBQU1DLE1BQU4sQ0FBYUUsR0FBYixDQUFpQixDQUFDQyxLQUFELEVBQVFDLEtBQVIsS0FBa0I7QUFDbEMsZUFDRSxvQkFBQyxLQUFEO0FBQ0UsaUJBQU9ELEtBRFQ7QUFFRSxlQUFLQyxLQUZQLEdBREY7QUFLRCxPQU5BO0FBREgsS0FERjtBQVdEO0FBQ0YsQ0FsQkQ7O0FBb0JBTixVQUFVTyxTQUFWLEdBQXNCO0FBQ3BCTCxVQUFRTSxNQUFNQyxTQUFOLENBQWdCQyxLQUFoQixDQUFzQkM7QUFEVixDQUF0Qjs7QUFJQSxlQUFlWCxTQUFmIiwiZmlsZSI6Ik1vdmllTGlzdC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBNb3ZpZSBmcm9tICcuL01vdmllLmpzJztcblxudmFyIE1vdmllTGlzdCA9IChwcm9wcykgPT4ge1xuICBpZiAocHJvcHMubW92aWVzLmxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVybiAoXG4gICAgICA8aDUgY2xhc3NOYW1lPVwibW92aWUtbm90LWZvdW5kXCI+TW92aWUgTm90IEZvdW5kITwvaDU+XG4gICAgKTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb3ZpZS1saXN0XCI+XG4gICAgICAgIHtwcm9wcy5tb3ZpZXMubWFwKChtb3ZpZSwgaW5kZXgpID0+IHtcbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPE1vdmllIFxuICAgICAgICAgICAgICBtb3ZpZT17bW92aWV9IFxuICAgICAgICAgICAgICBrZXk9e2luZGV4fS8+XG4gICAgICAgICAgKVxuICAgICAgICB9KX1cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuTW92aWVMaXN0LnByb3BUeXBlcyA9IHtcbiAgbW92aWVzOiBSZWFjdC5Qcm9wVHlwZXMuYXJyYXkuaXNSZXF1aXJlZFxufTtcblxuZXhwb3J0IGRlZmF1bHQgTW92aWVMaXN0OyJdfQ==