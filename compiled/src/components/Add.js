class Add extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ''
    };
  }

  submitHandler(event) {
    event.preventDefault();
    this.setState({
      input: document.getElementById('newMovie').value
    }, function () {
      this.props.submit(this.state.input);
      document.getElementById('newMovie').value = '';
    });
  }

  render() {
    return React.createElement(
      'div',
      {
        className: 'add' },
      React.createElement(
        'form',
        {
          id: 'add-form',
          onSubmit: this.submitHandler.bind(this) },
        React.createElement('input', {
          id: 'newMovie',
          type: 'text',
          placeholder: 'Add a movie' }),
        React.createElement(
          'button',
          null,
          ' + '
        )
      )
    );
  }
}

export default Add;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0FkZC5qc3giXSwibmFtZXMiOlsiQWRkIiwiUmVhY3QiLCJDb21wb25lbnQiLCJjb25zdHJ1Y3RvciIsInByb3BzIiwic3RhdGUiLCJpbnB1dCIsInN1Ym1pdEhhbmRsZXIiLCJldmVudCIsInByZXZlbnREZWZhdWx0Iiwic2V0U3RhdGUiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwidmFsdWUiLCJzdWJtaXQiLCJyZW5kZXIiLCJiaW5kIl0sIm1hcHBpbmdzIjoiQUFBQSxNQUFNQSxHQUFOLFNBQWtCQyxNQUFNQyxTQUF4QixDQUFrQztBQUNoQ0MsY0FBWUMsS0FBWixFQUFtQjtBQUNqQixVQUFNQSxLQUFOO0FBQ0EsU0FBS0MsS0FBTCxHQUFhO0FBQ1hDLGFBQU87QUFESSxLQUFiO0FBR0Q7O0FBRURDLGdCQUFjQyxLQUFkLEVBQXFCO0FBQ25CQSxVQUFNQyxjQUFOO0FBQ0EsU0FBS0MsUUFBTCxDQUFjO0FBQ1pKLGFBQU9LLFNBQVNDLGNBQVQsQ0FBd0IsVUFBeEIsRUFBb0NDO0FBRC9CLEtBQWQsRUFFRyxZQUFXO0FBQ1osV0FBS1QsS0FBTCxDQUFXVSxNQUFYLENBQWtCLEtBQUtULEtBQUwsQ0FBV0MsS0FBN0I7QUFDQUssZUFBU0MsY0FBVCxDQUF3QixVQUF4QixFQUFvQ0MsS0FBcEMsR0FBNEMsRUFBNUM7QUFDRCxLQUxEO0FBTUQ7O0FBRURFLFdBQVM7QUFDUCxXQUNFO0FBQUE7QUFBQTtBQUNFLG1CQUFVLEtBRFo7QUFHRTtBQUFBO0FBQUE7QUFDRSxjQUFHLFVBREw7QUFFRSxvQkFBVSxLQUFLUixhQUFMLENBQW1CUyxJQUFuQixDQUF3QixJQUF4QixDQUZaO0FBSUU7QUFDRSxjQUFHLFVBREw7QUFFRSxnQkFBSyxNQUZQO0FBR0UsdUJBQVksYUFIZCxHQUpGO0FBU0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVRGO0FBSEYsS0FERjtBQW1CRDtBQXRDK0I7O0FBeUNsQyxlQUFlaEIsR0FBZiIsImZpbGUiOiJBZGQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBBZGQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgaW5wdXQ6ICcnXG4gICAgfVxuICB9XG5cbiAgc3VibWl0SGFuZGxlcihldmVudCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBpbnB1dDogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25ld01vdmllJykudmFsdWVcbiAgICB9LCBmdW5jdGlvbigpIHtcbiAgICAgIHRoaXMucHJvcHMuc3VibWl0KHRoaXMuc3RhdGUuaW5wdXQpO1xuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25ld01vdmllJykudmFsdWUgPSAnJztcbiAgICB9KTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBcbiAgICAgICAgY2xhc3NOYW1lPVwiYWRkXCI+XG4gICAgICAgIFxuICAgICAgICA8Zm9ybSBcbiAgICAgICAgICBpZD1cImFkZC1mb3JtXCIgXG4gICAgICAgICAgb25TdWJtaXQ9e3RoaXMuc3VibWl0SGFuZGxlci5iaW5kKHRoaXMpfT5cbiAgICAgICAgICBcbiAgICAgICAgICA8aW5wdXQgXG4gICAgICAgICAgICBpZD1cIm5ld01vdmllXCIgXG4gICAgICAgICAgICB0eXBlPSd0ZXh0JyBcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiQWRkIGEgbW92aWVcIi8+XG4gICAgICAgICAgXG4gICAgICAgICAgPGJ1dHRvbj4gKyA8L2J1dHRvbj5cbiAgICAgICAgXG4gICAgICAgIDwvZm9ybT5cbiAgICAgIFxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBBZGQ7Il19