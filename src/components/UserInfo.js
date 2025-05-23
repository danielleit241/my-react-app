import React from "react";

class UserInfo extends React.Component {
  state = {
    name: "Leit",
    address: "123 Main St",
    age: 21,
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
    console.log(this.state);
  };

  render() {
    return (
      <div>
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
      </div>
    );
  }
}

export default UserInfo;
