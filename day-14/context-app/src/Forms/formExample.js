import React from 'react';

class ExampleForm extends React.Component {
    inputRef = React.createRef();
  
    handleSubmit = (event) => {
      event.preventDefault();
      console.log(this.inputRef.current);
      console.log(this.inputRef.current.value);
    };
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <input type="text" ref={this.inputRef} />
          <button>Submit</button>
        </form>
      );
    }
  }
  
  export default ExampleForm;