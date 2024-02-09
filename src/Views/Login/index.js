import React from "react";
import "./index.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../../config/firebase";

import { FaFacebookF, FaGithub, FaGoogle } from "react-icons/fa";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitValues = async () => {
    if (!email || !password) {
      return alert("Please fill all");
    } else {
      await login({ email, password }, navigate);
      // navigate("/maindashbord");
    }
  };

  return (
    <div className="login-container">
      <div className="login-contant">
        <div className="login-contant-left">
          <h1>Log In</h1>
          <h2 className="login-links">
            <FaFacebookF className="login-link" />
            <FaGithub className="login-link" />
            <FaGoogle className="login-link" />
          </h2>
          <div className="loginInput-fields">
            <input
              className="loginInput"
              type="email"
              placeholder="Enter Your Email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              className="loginInput"
              type="password"
              placeholder="Enter Your Password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <button className="loginBtn" onClick={submitValues}>
              login
            </button>
          </div>
        </div>
        <div className="login-contant-right">
          <div className="">
            <h2>
              Don't have <span className="signup-info">Account...</span>
            </h2>
            <p className="signup-para">
              Do not have an account so Please click here.
            </p>
            <button className="signupBtn" onClick={() => navigate("/signup")}>
              Signup
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
