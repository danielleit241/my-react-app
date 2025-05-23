import React from "react";
import AddUserInfo from "./AddUserInfo";
import DisplayInfo from "./DisplayInfo";

class MyComponent extends React.Component {
  state = {
    listUsers: [
      { id: 1, name: "Leit", age: "16" },
      { id: 2, name: "Danile", age: "69" },
      { id: 3, name: "Le", age: "23" },
    ],
  };

  handleAddNewUser = (user) => {
    this.setState({
      listUsers: [user, ...this.state.listUsers],
    });
  };

  //JSX
  //DRY: Don't Repeat Yourself
  render() {
    return (
      <div>
        <AddUserInfo handleAddNewUser={this.handleAddNewUser} />
        <br />
        <br />
        <DisplayInfo listUsers={this.state.listUsers} />
      </div>
    );
  }
}

export default MyComponent;
