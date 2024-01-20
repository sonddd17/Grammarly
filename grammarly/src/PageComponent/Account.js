import React, { useState, useEffect } from "react";
import axios from "axios";
import "../App.css";
import Menu from "./Menu";

function Account() {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const userId = localStorage.getItem("user_id");
    if (userId) {
      fetchUserData(userId);
    }
  }, []);

  const fetchUserData = async (userId) => {
    try {
      const response = await axios.get(`http://127.0.0.1:5000/myaccount/${userId}`, {
        withCredentials: true,
      });
      setUserData(response.data);
    } catch (error) {
      console.error("Error fetching user data", error);
    }
  };

  return (
    <div className="container">
      <Menu />
      <div className="Account-container">
        <h1>Account Setting</h1>
        <hr></hr>
        <h2>Profile</h2>
        <div className="Name">
          <a>Name</a>
          <div className="userinfo">
            <a>{userData?.name || "John Doe"}</a>
          </div>
        </div>
        <div className="Email">
          <a>Email</a>
          <div className="userinfo">
            <a>{userData?.email || "john.doe@gmail.com"}</a>
          </div>
        </div>
        <div className="Password">
          <a>Password</a>
          <div className="userinfo">
            <a>{userData?.password || ""}</a>
          </div>
        </div>

        <div className="AboutYou">
          <h2>About You</h2>
        </div>

        <div>Premium: {userData?.tier === "premium" ? "Active" : "Not Active"}</div>
      </div>
    </div>
  );
}

export default Account;


