import React from "react";
import UserInfo from "./UserInfo";
import DisplayInfo from "./DisplayInfo";

class MyComponent extends React.Component {
  state = {
    listUsers: [
      { id: 1, name: "Leit", age: 16 },
      { id: 2, name: "Danile", age: 69 },
      { id: 3, name: "Le", age: 23 },
    ],
  };
  //JSX
  //DRY: Don't Repeat Yourself
  render() {
    return (
      <div>
        <UserInfo />
        <br />
        <br />
        <DisplayInfo listUsers={this.state.listUsers} />
      </div>
    );
  }
}

export default MyComponent;
