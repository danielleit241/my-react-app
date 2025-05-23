import React from "react";
import "./DisplayInfo.scss";
import logo from "../logo.svg";

//stateless vs. stateful
// class DisplayInfo extends React.Component {
//   render() {
//     console.log(">>> call render");
//     const { listUsers } = this.props;
//     //const listUsers = this.props.listUsers;
//     return (
//       <div className="display-info-container">
//         {true && (
//           <>
//             {listUsers.map((user) => {
//               return (
//                 <div key={user.id} className={+user.age > 18 ? "green" : "red"}>
//                   <div>My name is {user.name}</div>
//                   <div>My age is {user.age}</div>
//                   <div>
//                     <button
//                       onClick={() => this.props.handleDeleteUser(user.id)}
//                     >
//                       <span>Delete</span>
//                     </button>
//                   </div>
//                   <hr />
//                 </div>
//               );
//             })}
//           </>
//         )}
//       </div>
//     );
//   }
// }
const DisplayInfo = (props) => {
  const { listUsers } = props;
  return (
    <div className="display-info-container">
      {true && (
        <>
          {listUsers.map((user) => {
            return (
              <div key={user.id} className={+user.age > 18 ? "green" : "red"}>
                <div>My name is {user.name}</div>
                <div>My age is {user.age}</div>
                <div>
                  <button onClick={() => props.handleDeleteUser(user.id)}>
                    <span>Delete</span>
                  </button>
                </div>
                <hr />
              </div>
            );
          })}
        </>
      )}
    </div>
  );
};

export default DisplayInfo;
