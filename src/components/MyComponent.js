import React from "react";
import UserInfo from "./UserInfo";
import DisplayInfo from "./DisplayInfo";

class MyComponent extends React.Component {
  //JSX
  render() {
    const myInfor = ["Leit", 21];
    return (
      <div>
        <UserInfo />
        <br />
        <br />
        <DisplayInfo name="Daniel Le" age="21" />
        <hr />
        <DisplayInfo name={myInfor[0]} age={myInfor[1]} />
      </div>
    );
  }
}

export default MyComponent;
