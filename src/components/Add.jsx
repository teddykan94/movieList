class Add extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ''
    }
  }

  submitHandler(event) {
    event.preventDefault();
    this.setState({
      input: document.getElementById('newMovie').value
    }, function() {
      this.props.submit(this.state.input);
      document.getElementById('newMovie').value = '';
    });
  }

  render() {
    return (
      <div 
        className="add">
        
        <form 
          id="add-form" 
          onSubmit={this.submitHandler.bind(this)}>
          
          <input 
            id="newMovie" 
            type='text' 
            placeholder="Add a movie"/>
          
          <button> + </button>
        
        </form>
      
      </div>
    );
  }
}

export default Add;