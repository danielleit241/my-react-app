import React from "react";

class MyComponent extends React.Component {
  state = {
    name: "Leit",
    address: "123 Main St",
    age: 21,
  };

  handleClick = (event) => {
    this.setState({
      name: "Daniel",
      age: Math.floor(Math.random() * 100 + 1),
    });
    // this.setState({
    //   age: Math.floor(Math.random() * 100 + 1),
    // });
  };

  handleOnMouseOver = (event) => {
    console.log(event);
  };

  handleOnChangeInput = (event) => {
    console.log(event.target.value);
    this.setState({
      name: event.target.value,
    });
  };

  handleOnSumit = (event) => {
    event.preventDefault();
    console.log(this.state);
  };

  //JSX
  render() {
    return (
      <div>
        My name is {this.state.name} and I'm {this.state.age} years old.
        <form onSubmit={(event) => this.handleOnSumit(event)}>
          <input
            type="text"
            onChange={(event) => this.handleOnChangeInput(event)}
          />
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default MyComponent;
