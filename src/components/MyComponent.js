import React from "react";

class MyComponent extends React.Component {
  state = {
    name: "Leit",
    address: "123 Main St",
    age: 21,
  };

  //JSX
  render() {
    return (
      <div>
        My name is {this.state.name} and I'm from {this.state.address}
      </div>
    );
  }
}

export default MyComponent;
