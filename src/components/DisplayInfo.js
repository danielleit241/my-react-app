import React from "react";
import "./DisplayInfo.scss";
import logo from "../logo.svg";

class DisplayInfo extends React.Component {
  constructor(props) {
    console.log(">>> call constructor");
    super(props);
    this.state = {
      isShow: true,
    };
  }

  componentDidMount() {
    console.log(">>> componentDidMount");
    setTimeout(() => {
      document.title = "DisplayInfo";
    }, 3000);
  }

  componentDidUpdate(prevProps, prevState) {
    console.log(">>> componentDidUpdate", this.props, prevProps);
    if (this.props.listUsers !== prevProps.listUsers) {
      if (this.props.listUsers.length === 5) {
        alert("You have 5 users");
      }
    }
  }

  handleShowHide = (event) => {
    this.setState({
      isShow: !this.state.isShow,
    });
  };

  render() {
    console.log(">>> call render");
    const { listUsers } = this.props;
    //const listUsers = this.props.listUsers;
    return (
      <div className="display-info-container">
        {/* <img src={logo} /> */}
        <div>
          <span
            onClick={(event) => {
              this.handleShowHide(event);
            }}
          >
            {this.state.isShow ? "Hide" : "Show"} list users:
          </span>
        </div>
        {this.state.isShow && (
          <>
            {listUsers.map((user) => {
              return (
                <div key={user.id} className={+user.age > 18 ? "green" : "red"}>
                  <div>My name is {user.name}</div>
                  <div>My age is {user.age}</div>
                  <div>
                    <button
                      onClick={() => this.props.handleDeleteUser(user.id)}
                    >
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
  }
}

export default DisplayInfo;
