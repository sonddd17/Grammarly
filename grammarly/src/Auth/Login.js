import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Auth.css";

function Login() {
  // Pre-set credentials
  /*const emailSet = "sonddd17@gmail.com";
  const passSet = "17102001";*/
  const navigate = useNavigate();

  // State variables for email and password
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Function to update state for email
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  // Function to update state for password
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  // Function to handle login
  const handleLogin = () => {
    // Sending a POST request to the login endpoint
    axios({
      method: "POST",
      url: "http://127.0.0.1:5000/login",
      data: {
        email: email,
        password: password,
      },
    })
      .then((response) => {
        // If login is successful
        console.log(response);
        
        alert("Successfully Login");
        // Navigate to the main page
        navigate("/mainpage");
        const user_id = response.data.id;
        localStorage.setItem("user_id", user_id);
        localStorage.setItem("email", email);
        
      })
      .catch((error) => {
        // If there's an error
        if (error.response) {
          console.log(error.response);
          console.log(error.response.status);
          console.log(error.response.headers);
          // If the error status is 401 (Unauthorized)
          if (error.response.status === 401) {
            alert("Invalid credentials");
          }
        }
      });
    // Clear the login form
    setEmail("");
    setPassword("");
  };

  // Function to switch to the sign up page
  const onSwitchToSignUp = () => {
    navigate("/register");
  };

  return (
    <div className="page">
      <div className="cover">
        <h1>Login</h1>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={handleEmailChange}
        ></input>
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={handlePasswordChange}
        ></input>
        <div className="login-btn" onClick={handleLogin}>Login</div>
        <div className="question">
          <span className="switch-btn" onClick={onSwitchToSignUp}>
          Don't have an account ? Sign Up
          </span>
        </div>
        <p className="text">Or login using</p>
        <div className="altLogin">
          <div className="facebook"></div>
          <div className="google"></div>
        </div>
      </div>
    </div>
  );
}

export default Login;
