import { useState } from "react";
import "./Login.scss";

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    alert("Login functionality is not implemented yet.");
  };

  return (
    <div className="login-container">
      <div className="header">Don't have an account yet?</div>
      <div className="title col-4 mx-auto">Daniel Le</div>
      <div className="welcome col-4 mx-auto">Hello, who's there?</div>
      <div className="content-form col-4 mx-auto">
        <div className="form-group">
          <label>Email</label>
          <input
            type={"email"}
            className="form-control"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          ></input>
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type={"password"}
            className="form-control"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          ></input>
        </div>
        <span className="forgot-password">Forgot your password ?</span>
        <div className="form-group">
          <button onClick={() => handleLogin()} className="btn-submit">
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
