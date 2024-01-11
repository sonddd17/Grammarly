import React, { useState } from "react";
import "./Auth.css";
const emailSet = "sonddd17@gmail.com"
const passSet = "17102001"
function Login() {
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

  // Function to handle login (just logs the current state)
  const handleLogin = () => {
    console.log('Email:', email, 'Password:', password);
    // Here you can add logic to handle the login
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
        <div className="question">Don't have an account yet?</div>
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
