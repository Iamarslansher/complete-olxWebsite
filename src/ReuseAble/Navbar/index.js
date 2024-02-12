import React, { useEffect, useState } from "react";
import "./index.css";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setToTheme } from "../../store/themeSlice";
import { MdDarkMode } from "react-icons/md";
import { MdLightMode } from "react-icons/md";

function Navbar() {
  const navigate = useNavigate();
  const [profile, setProfile] = useState("");
  const [url, setUrl] = useState("");
  const [mood, setMood] = useState(true);

  const dispatch = useDispatch();
  const cartNum = useSelector((state) => state.cartReducer.addToCart);

  const profileSrc = { url };
  const avatarSrc =
    "https://mir-s3-cdn-cf.behance.net/project_modules/disp/20f0cd40760693.578c9a46841f5.gif";

  const logOut = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't to log out!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Log Out!",
          text: "",
          icon: "success",
        });
        navigate("/signup");
      }
    });
  };

  useEffect(() => {
    getProfile();
  }, []);

  const getProfile = () => {
    const profilePic = JSON.parse(localStorage.getItem("user"));
    setProfile(profilePic);
    setUrl(profilePic.profileImgUrl);
  };

  const darkMood = () => {
    dispatch(
      setToTheme({
        backgroundColor: "black",
        color: "white",
      })
    );
    setMood(false);
  };

  const lightMood = () => {
    dispatch(
      setToTheme({
        backgroundColor: "white",
        color: "black",
      })
    );
    setMood(true);
  };

  return (
    <>
      <div className="navbar-contaniner">
        <div className="nav-contant">
          <div>
            <img
              width={80}
              src="https://logos-world.net/wp-content/uploads/2022/04/OLX-Symbol.png"
              alt=""
            />
          </div>

          <div className="inputField">
            <input className="input" type="text" placeholder="Search item" />
            <button className="inputFieldBtn">search</button>
          </div>

          <div className="logOut-div">
            <button className="logOut-div" onClick={logOut}>
              log out
            </button>
          </div>
          <div className="addItem">
            <button className="addItemBtn" onClick={() => navigate("/additem")}>
              Add Card
            </button>
          </div>

          <div className="addItem">
            <img
              width={55}
              src="https://www.ifuelinteractive.com/wp-content/uploads/2018/04/anim-cart.gif"
              alt=""
              className="cartImg"
              title="Cart"
              onClick={() => navigate("/cart")}
            />
            <p className="cartNum">{cartNum.length}</p>
          </div>
          <div>
            {mood ? (
              <MdDarkMode className="darkMood" onClick={darkMood} />
            ) : (
              <MdLightMode className="darkMood" onClick={lightMood} />
            )}
          </div>

          <div className="avtar-div">
            <img
              className="avtar-img"
              onClick={() => navigate("/profile")}
              src={url}
              alt=""
              title="Profile"
            />
          </div>
        </div>
      </div>
      <div className="navbar-links">
        <a className="navbar-link" href="-">
          Mobiles
        </a>
        <a className="navbar-link" href="-">
          Cars
        </a>
        <a className="navbar-link" href="-">
          Houses
        </a>
        <a className="navbar-link" href="-">
          Jobs
        </a>
        <a className="navbar-link" href="-">
          Audio-Video
        </a>
        <a className="navbar-link" href="-">
          Lands & Plots
        </a>
        <a className="navbar-link" href="-">
          Motorcycles
        </a>
        <a className="navbar-link" href="-">
          Tablets
        </a>
        <a className="navbar-link" href="-">
          Services
        </a>
        <a className="navbar-link" href="-">
          Fashion
        </a>
      </div>
    </>
  );
}

export default Navbar;
