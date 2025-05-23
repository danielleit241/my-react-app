import React from "react";
import AddUserInfo from "./AddUserInfo";
import DisplayInfo from "./DisplayInfo";
import { useState } from "react";

// class MyComponent extends React.Component {
//   state = {
//     listUsers: [
//       { id: 1, name: "Leit", age: "16" },
//       { id: 2, name: "Danile", age: "69" },
//       { id: 3, name: "Le", age: "23" },
//     ],
//   };

//   handleAddNewUser = (user) => {
//     this.setState({
//       listUsers: [user, ...this.state.listUsers],
//     });
//   };

//   handleDeleteUser = (userId) => {
//     let listUsersClone = [...this.state.listUsers];
//     listUsersClone = listUsersClone.filter((item) => item.id !== userId);
//     this.setState({
//       listUsers: listUsersClone,
//     });
//   };

//   //JSX
//   //DRY: Don't Repeat Yourself
//   render() {
//     // const test = { name: "eric", age: 45 };
//     return (
//       <>
//         {/* {JSON.stringify(test)} */}
//         <br />
//         <AddUserInfo handleAddNewUser={this.handleAddNewUser} />
//         <br />
//         <br />
//         <DisplayInfo
//           listUsers={this.state.listUsers}
//           handleDeleteUser={this.handleDeleteUser}
//         />
//       </>
//     );
//   }
// }

const MyComponent = () => {
  const [listUsers, setListUsers] = useState([
    { id: 1, name: "Leit", age: "16" },
    { id: 2, name: "Danile", age: "69" },
    { id: 3, name: "Le", age: "23" },
  ]);

  const handleAddNewUser = (user) => {
    setListUsers([user, ...listUsers]);
  };

  const handleDeleteUser = (userId) => {
    let listUsersClone = [...listUsers];
    listUsersClone = listUsersClone.filter((item) => item.id !== userId);
    setListUsers(listUsersClone);
  };

  return (
    <>
      <br />
      <AddUserInfo handleAddNewUser={handleAddNewUser} />
      <br />
      <br />
      <DisplayInfo listUsers={listUsers} handleDeleteUser={handleDeleteUser} />
    </>
  );
};

export default MyComponent;
