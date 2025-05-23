import React from "react";

class MyComponent extends React.Component {
  state = {
    name: "Leit",
    address: "123 Main St",
    age: 21,
  };

  handleClick = (event) => {
    console.log("My name is ", this.state.name);
  };

  handleOnMouseOver = (event) => {
    console.log(event);
  };

  //JSX
  render() {
    return (
      <div>
        My name is {this.state.name} and I'm from {this.state.address}
        <button onClick={this.handleClick}>Click me!</button>
        <button onMouseOver={this.handleOnMouseOver}>Hover me!</button>
      </div>
    );
  }
}

export default MyComponent;
