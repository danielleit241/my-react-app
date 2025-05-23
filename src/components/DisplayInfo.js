import React from "react";

class DisplayInfo extends React.Component {
  render() {
    const { listUsers } = this.props;
    //const listUsers = this.props.listUsers;
    return (
      <div>
        {listUsers.map((user) => {
          return (
            <div key={user.id}>
              <div>My name is {user.name}</div>
              <div>My age is {user.age}</div>
              <hr />
            </div>
          );
        })}
      </div>
    );
  }
}

export default DisplayInfo;
