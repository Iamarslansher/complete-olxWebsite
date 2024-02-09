import React from "react";
import "./index.css";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";

function Dashbord() {
  const navigate = useNavigate();
  const [time, setTime] = useState();
  let contant = "";
  let getDate = new Date();
  getDate = getDate.getHours();
  // console.log(getDate);

  if (getDate >= 1 && getDate < 12) {
    contant = "Good Morning";
  } else if (getDate >= 12 && getDate < 7) {
    contant = "Good Afternoon";
  } else {
    contant = "Good Evening";
  }

  const getingCurrntTime = () => {
    const currntTime = new Date().toLocaleTimeString();
    setTime(currntTime);
  };
  setInterval(getingCurrntTime, 1000);
  return (
    <div className="dashbord-container">
      <div className="dashbord-contant">
        <h1 className="dashbord-timer">{time}</h1>
        <h2 className="dashbord-dialoge">
          Hello Sir, <span>{contant}!</span>
        </h2>
        <div className="btn-div">
          <Button
            variant="outline-info"
            className="dashbord-login"
            onClick={() => navigate("/login")}
          >
            Log in
          </Button>
          <Button
            variant="secondary"
            className="dashbord-signup"
            onClick={() => navigate("/signup")}
          >
            Sign up
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Dashbord;
