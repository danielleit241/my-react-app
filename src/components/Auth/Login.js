import { useState } from "react";
import "./Login.scss";
import { useNavigate } from "react-router-dom";
import { postLogin } from "../../services/apiService";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { doLogin } from "../../redux/action/userAction";
import { ImSpinner3 } from "react-icons/im";

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async () => {
    setIsLoading(true);
    let res = await postLogin(email, password);
    console.log(res.EC);
    if (res && +res.EC === 0) {
      dispatch(doLogin(res));
      toast.success(res.EM);
      setIsLoading(false);
      navigate("/");
    }
    if (res && +res.EC !== 0) {
      toast.error(res.EM);
      setIsLoading(false);
      return;
    }
  };

  const handleRegister = () => {
    navigate("/register");
  };
  return (
    <div className="login-container">
      <div className="header">
        <span>Don't have an account yet?</span>
        <button onClick={() => handleRegister()}>Sign up</button>
      </div>
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
          <button
            onClick={() => handleLogin()}
            className="btn-submit"
            disabled={isLoading}
          >
            {isLoading && <ImSpinner3 className="loader-icon" />}
            <span>Log in</span>
          </button>
        </div>
        <div className="back">
          <span
            className="back-to-home"
            onClick={() => {
              navigate("/");
            }}
          >
            &#60; Go to Homepage
          </span>
        </div>
      </div>
    </div>
  );
};

export default Login;
