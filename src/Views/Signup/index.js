import React from "react";
import "./index.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { signup } from "../../config/firebase";
import { FaFacebookF, FaGithub, FaGoogle } from "react-icons/fa";

function Signup() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [conformPassword, setConformPassword] = useState("");

  const submitValues = async () => {
    if (!name || !email || !password || !conformPassword) {
      return alert("Please fill required fields..");
    } else if (password !== conformPassword) {
      return alert("Password don't match");
    } else {
      await signup({ name, email, password }, navigate);
      // navigate("/maindashbord");
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-contant">
        <div className="signup-contant-left">
          <h1>Sign Up</h1>
          <h2 className="signup-links">
            <FaFacebookF className="signup-link" />
            <FaGithub className="signup-link" />
            <FaGoogle className="signup-link" />
          </h2>
          <div className="signupInput-field">
            <input
              className="signupInput"
              type="text"
              placeholder="Enter Your Name"
              onChange={(e) => setName(e.target.value)}
            />
            <input
              className="signupInput"
              type="email"
              placeholder="Enter Your Email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              className="signupInput"
              type="password"
              placeholder="Enter Your Password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <input
              className="signupInput"
              type="password"
              placeholder="Conform Password"
              onChange={(e) => setConformPassword(e.target.value)}
            />
            <button className="signupBtn" onClick={submitValues}>
              signup
            </button>
          </div>
        </div>
        <div className="signup-contant-right">
          <div>
            <h2>
              Already <span className="login-info-heading">Account...</span>
            </h2>
            <p className="login-info-para">
              If you have an already account so click here.
            </p>
            <button className="loginBtn" onClick={() => navigate("/login")}>
              Log in
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
