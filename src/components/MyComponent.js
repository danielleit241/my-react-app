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

  //JSX
  render() {
    return (
      <div>
        My name is {this.state.name} and I'm {this.state.age} years old.
        <button
          onClick={(event) => {
            this.handleClick(event);
          }}
        >
          Click me!
        </button>
        <button onMouseOver={this.handleOnMouseOver}>Hover me!</button>
      </div>
    );
  }
}

export default MyComponent;
