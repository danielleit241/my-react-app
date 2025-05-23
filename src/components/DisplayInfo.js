import React, { useEffect, useState } from "react";
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

  const [isShowHideListUser, setShowHideListUser] = useState(true);

  const handleShowHideListUsers = () => {
    setShowHideListUser(!isShowHideListUser);
  };

  console.log(">>> call render");
  
  useEffect(() => {
    setTimeout(() => {
      document.title = "React Hooks";
    }, 3000);
    if (listUsers.length === 0) {
      alert("No user found");
    }
    console.log(">>> call useEffect");
  }, [listUsers]);



  return (
    <div className="display-info-container">
      <div>
        <span onClick={() => handleShowHideListUsers()}>
          {isShowHideListUser ? "Hide" : "Show"} list users
        </span>
      </div>
      {isShowHideListUser && (
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
