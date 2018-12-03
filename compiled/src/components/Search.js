class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchStorage: ''
    };
  }

  getQuery(event) {
    this.setState({
      searchStorage: event.target.value
    }, function () {
      this.props.searchFunction(this.state.searchStorage);
    });
  }

  noSubmit(event) {
    event.preventDefault();
  }

  render() {
    return React.createElement(
      "div",
      {
        className: "search" },
      React.createElement(
        "form",
        {
          id: "search-form",
          onSubmit: this.noSubmit },
        React.createElement("input", {
          className: "search-storage",
          type: "text",
          placeholder: "Search for a movie",
          onChange: this.getQuery.bind(this) })
      )
    );
  }
};

Search.propTypes = {
  movies: React.PropTypes.array.isRequired
};

export default Search;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1NlYXJjaC5qc3giXSwibmFtZXMiOlsiU2VhcmNoIiwiUmVhY3QiLCJDb21wb25lbnQiLCJjb25zdHJ1Y3RvciIsInByb3BzIiwic3RhdGUiLCJzZWFyY2hTdG9yYWdlIiwiZ2V0UXVlcnkiLCJldmVudCIsInNldFN0YXRlIiwidGFyZ2V0IiwidmFsdWUiLCJzZWFyY2hGdW5jdGlvbiIsIm5vU3VibWl0IiwicHJldmVudERlZmF1bHQiLCJyZW5kZXIiLCJiaW5kIiwicHJvcFR5cGVzIiwibW92aWVzIiwiUHJvcFR5cGVzIiwiYXJyYXkiLCJpc1JlcXVpcmVkIl0sIm1hcHBpbmdzIjoiQUFBQSxNQUFNQSxNQUFOLFNBQXFCQyxNQUFNQyxTQUEzQixDQUFxQztBQUNuQ0MsY0FBWUMsS0FBWixFQUFtQjtBQUNqQixVQUFNQSxLQUFOO0FBQ0EsU0FBS0MsS0FBTCxHQUFhO0FBQ1hDLHFCQUFlO0FBREosS0FBYjtBQUdEOztBQUVEQyxXQUFTQyxLQUFULEVBQWdCO0FBQ2QsU0FBS0MsUUFBTCxDQUFjO0FBQ1pILHFCQUFlRSxNQUFNRSxNQUFOLENBQWFDO0FBRGhCLEtBQWQsRUFFRyxZQUFXO0FBQ1osV0FBS1AsS0FBTCxDQUFXUSxjQUFYLENBQTBCLEtBQUtQLEtBQUwsQ0FBV0MsYUFBckM7QUFDRCxLQUpEO0FBS0Q7O0FBRURPLFdBQVNMLEtBQVQsRUFBZ0I7QUFDZEEsVUFBTU0sY0FBTjtBQUNEOztBQUVEQyxXQUFTO0FBQ1AsV0FDRTtBQUFBO0FBQUE7QUFDRSxtQkFBVSxRQURaO0FBR0U7QUFBQTtBQUFBO0FBQ0UsY0FBRyxhQURMO0FBRUUsb0JBQVUsS0FBS0YsUUFGakI7QUFJRTtBQUNFLHFCQUFVLGdCQURaO0FBRUUsZ0JBQUssTUFGUDtBQUdFLHVCQUFZLG9CQUhkO0FBSUUsb0JBQVUsS0FBS04sUUFBTCxDQUFjUyxJQUFkLENBQW1CLElBQW5CLENBSlo7QUFKRjtBQUhGLEtBREY7QUFrQkQ7QUF2Q2tDLENBd0NwQzs7QUFFRGhCLE9BQU9pQixTQUFQLEdBQW1CO0FBQ2pCQyxVQUFRakIsTUFBTWtCLFNBQU4sQ0FBZ0JDLEtBQWhCLENBQXNCQztBQURiLENBQW5COztBQUlBLGVBQWVyQixNQUFmIiwiZmlsZSI6IlNlYXJjaC5qcyIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIFNlYXJjaCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBzZWFyY2hTdG9yYWdlOiAnJ1xuICAgIH1cbiAgfVxuXG4gIGdldFF1ZXJ5KGV2ZW50KSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBzZWFyY2hTdG9yYWdlOiBldmVudC50YXJnZXQudmFsdWVcbiAgICB9LCBmdW5jdGlvbigpIHtcbiAgICAgIHRoaXMucHJvcHMuc2VhcmNoRnVuY3Rpb24odGhpcy5zdGF0ZS5zZWFyY2hTdG9yYWdlKTtcbiAgICB9KTtcbiAgfVxuXG4gIG5vU3VibWl0KGV2ZW50KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBcbiAgICAgICAgY2xhc3NOYW1lPVwic2VhcmNoXCI+XG4gICAgICAgIFxuICAgICAgICA8Zm9ybSBcbiAgICAgICAgICBpZD1cInNlYXJjaC1mb3JtXCIgXG4gICAgICAgICAgb25TdWJtaXQ9e3RoaXMubm9TdWJtaXR9PlxuICAgICAgICAgIFxuICAgICAgICAgIDxpbnB1dCBcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInNlYXJjaC1zdG9yYWdlXCIgXG4gICAgICAgICAgICB0eXBlPVwidGV4dFwiIFxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJTZWFyY2ggZm9yIGEgbW92aWVcIiBcbiAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmdldFF1ZXJ5LmJpbmQodGhpcyl9IC8+XG4gICAgICAgIFxuICAgICAgICA8L2Zvcm0+XG4gICAgICBcbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn07XG5cblNlYXJjaC5wcm9wVHlwZXMgPSB7XG4gIG1vdmllczogUmVhY3QuUHJvcFR5cGVzLmFycmF5LmlzUmVxdWlyZWRcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFNlYXJjaDsiXX0=