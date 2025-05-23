import React from "react";

class AddUserInfo extends React.Component {
  state = {
    name: "",
    address: "123 Main St",
    age: "",
  };

  handleOnChangeName = (event) => {
    this.setState({
      name: event.target.value,
    });
  };

  handleOnChangeAge = (event) => {
    this.setState({
      age: event.target.value,
    });
  };

  handleOnSumit = (event) => {
    event.preventDefault();
    this.props.handleAddNewUser({
      id: Math.floor(Math.random() * 100 + 1) + "-random",
      name: this.state.name,
      age: this.state.age,
    });
  };

  render() {
    return (
      <>
        My name is {this.state.name} and I'm {this.state.age} years old.
        <form onSubmit={(event) => this.handleOnSumit(event)}>
          <label>Your Name: </label>
          <input
            value={this.state.name}
            type="text"
            onChange={(event) => this.handleOnChangeName(event)}
          />
          <label>Your Age: </label>
          <input
            value={this.state.age}
            type="text"
            onChange={(event) => this.handleOnChangeAge(event)}
          />
          <button>Submit</button>
        </form>
      </>
    );
  }
}

export default AddUserInfo;
