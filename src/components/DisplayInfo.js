import React from "react";

class DisplayInfo extends React.Component {
  state = {
    isShow: true,
  };

  handleShowHide = (event) => {
    this.setState({
      isShow: !this.state.isShow,
    });
  };

  render() {
    const { listUsers } = this.props;
    //const listUsers = this.props.listUsers;
    return (
      <div>
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
          <div>
            {listUsers.map((user) => {
              return (
                <div key={user.id} className={+user.age > 18 ? "green" : "red"}>
                  <div>My name is {user.name}</div>
                  <div>My age is {user.age}</div>
                  <hr />
                </div>
              );
            })}
          </div>
        )}
      </div>
    );
  }
}

export default DisplayInfo;
