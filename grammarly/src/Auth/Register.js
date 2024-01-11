import React, { useState } from "react";
import "./Auth.css";

function Register() {
  // State variables for email, password, and re-entered password
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [reEnteredPassword, setReEnteredPassword] = useState("");

  // Function to update state for email
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  // Function to update state for password
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  // Function to update state for re-entered password
  const handleReEnteredPasswordChange = (event) => {
    setReEnteredPassword(event.target.value);
  };

  // Function to handle registration (just logs the current state)
  const handleRegister = () => {
    console.log(
      "Email:",
      email,
      "Password:",
      password,
      "Re-entered Password:",
      reEnteredPassword
    );
    // Here you can add logic to handle the registration
  };

  return (
    <div className="page">
      <div className="cover">
        <h1>Register</h1>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={handleEmailChange}
        ></input>
        <input
          className="pass"
          type="password"
          placeholder="Password"
          value={password}
          onChange={handlePasswordChange}
        ></input>
        <input
          className="re-pass"
          type="password"
          placeholder="Re-enter Password"
          value={reEnteredPassword}
          onChange={handleReEnteredPasswordChange}
        ></input>
        <div className="login-btn" onClick={handleRegister}>
          Register
        </div>

        <p className="text">Or Register using</p>
        <div className="altLogin">
          <div className="facebook"></div>
          <div className="google"></div>
        </div>
      </div>
    </div>
  );
}

export default Register;
