import React from "react";
import "./index.css";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { uploadImage } from "../../config/firebase";
import { updateprofile } from "../../config/firebase";

function Profile() {
  const navigate = useNavigate();
  const [userData, setUserData] = useState(null);
  const [name, setName] = useState("");
  const [profileImage, setProfileImage] = useState(null);
  const [profile, setProfile] = useState("");

  useEffect(() => {
    getUserData();
  }, []);

  const getUserData = () => {
    const crntUser = JSON.parse(localStorage.getItem("user"));

    setUserData(crntUser);
    setName(crntUser.name);
  };

  const updateProfile = async () => {
    const copy = { ...userData, name };
    await updateprofile(
      { profileImage, name, id: userData.uid },
      copy,
      navigate
    );
  };

  const handleImageUpload = async (e = {}) => {
    const imageFile = e.target.files[0];
    uploadImage({ imageFile, id: userData.uid });
  };

  useEffect(() => {
    getProfile();
  }, []);

  const getProfile = () => {
    const localProfileGet = JSON.parse(localStorage.getItem("user"));
    setProfile(localProfileGet.profileImgUrl);
  };

  if (!userData) {
    return <h2>loading</h2>;
  }

  return (
    <div className="profile-container">
      <div className="profile-contant">
        <div className="imgDiv">
          <img className="img" src={profile} alt="" />
        </div>
        <h4>Hey Sir {name}.</h4>
        <p>
          <b>Email</b>
          <br />
          <input contentEditable={false} type="email" value={userData.email} />
        </p>
        <p>
          <b>User Name</b>
          <br />
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </p>
        <hr />
        <label htmlFor="update">Update Profile</label>
        <br />
        <input type="file" onChange={handleImageUpload} />
        <hr />

        <button onClick={updateProfile}>Update</button>
      </div>
    </div>
  );
}

export default Profile;
