import React, { useState } from "react";

// class AddUserInfo extends React.Component {
//   state = {
//     name: "",
//     address: "123 Main St",
//     age: "",
//   };

//   handleOnChangeName = (event) => {
//     this.setState({
//       name: event.target.value,
//     });
//   };

//   handleOnChangeAge = (event) => {
//     this.setState({
//       age: event.target.value,
//     });
//   };

//   handleOnSumit = (event) => {
//     event.preventDefault();
//     this.props.handleAddNewUser({
//       id: Math.floor(Math.random() * 100 + 1) + "-random",
//       name: this.state.name,
//       age: this.state.age,
//     });
//   };

//   render() {
//     return (
//       <>
//         My name is {this.state.name} and I'm {this.state.age} years old.
//         <form onSubmit={(event) => this.handleOnSumit(event)}>
//           <label>Your Name: </label>
//           <input
//             value={this.state.name}
//             type="text"
//             onChange={(event) => this.handleOnChangeName(event)}
//           />
//           <label>Your Age: </label>
//           <input
//             value={this.state.age}
//             type="text"
//             onChange={(event) => this.handleOnChangeAge(event)}
//           />
//           <button>Submit</button>
//         </form>
//       </>
//     );
//   }
// }

const AddUserInfo = (props) => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  const handleOnChangeName = (event) => {
    setName(event.target.value);
  };

  const handleOnChangeAge = (event) => {
    setAge(event.target.value);
  };

  const handleOnSumit = (event) => {
    event.preventDefault();
    props.handleAddNewUser({
      id: Math.floor(Math.random() * 100 + 1) + "-random",
      name: name,
      age: age,
    });
  };

  return (
    <>
      My name is {name} and I'm {age} years old.
      <form onSubmit={(event) => handleOnSumit(event)}>
        <label>Your Name: </label>
        <input
          value={name}
          type="text"
          onChange={(event) => handleOnChangeName(event)}
        />
        <label>Your Age: </label>
        <input
          value={age}
          type="text"
          onChange={(event) => handleOnChangeAge(event)}
        />
        <button>Submit</button>
      </form>
    </>
  );
};

export default AddUserInfo;
