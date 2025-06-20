import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Register.scss";
import { BsEyeFill, BsEyeSlashFill } from "react-icons/bs";
import { postRegister } from "../../services/apiService";
import { toast } from "react-toastify";

const Register = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUserName] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const handleRegister = async () => {
    if (!email || !password || !username) {
      toast("Please fill in all fields");
      return;
    }
    try {
      var res = await postRegister(email, password, username);
      console.log(res.EC);
      if (res && +res.EC === 0) {
        toast.success(res.EM);
        navigate("/login");
      }
      if (res && +res.EC !== 0) {
        toast.error(res.EM);
        return;
      }
    } catch (error) {
      console.error("Registration failed:", error);
      toast.error("Registration failed. Please try again later.");
    }
  };
  return (
    <>
      <div className="register-container">
        <div className="title col-4 mx-auto">Register</div>
        <div className="welcome col-4 mx-auto">Create your account</div>
        <div className="content-form col-4 mx-auto">
          <div className="form-group">
            <label>Username</label>
            <input
              type={"text"}
              className="form-control"
              value={username}
              onChange={(event) => setUserName(event.target.value)}
            ></input>
          </div>
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
            <label className="d-flex justify-content-between align-items-center">
              <span>Password</span>
              <span
                onClick={() => setShowPassword(!showPassword)}
                style={{
                  fontSize: "1.2rem",
                  cursor: "pointer",
                  color: "#555",
                }}
              >
                {showPassword ? <BsEyeSlashFill /> : <BsEyeFill />}
              </span>
            </label>
            <input
              type={showPassword ? "text" : "password"}
              className="form-control"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            ></input>
          </div>
          <div className="form-group">
            <button onClick={() => handleRegister()} className="btn-submit">
              Register
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
    </>
  );
};
export default Register;
