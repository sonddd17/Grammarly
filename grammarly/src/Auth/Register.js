import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Auth.css";

function Register() {
  const navigate = useNavigate();
  // State variables for name, email, password, and re-entered password
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [reEnteredPassword, setReEnteredPassword] = useState("");

  // State variable for validation errors
  const [validationErrors, setValidationErrors] = useState({});

  const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+])(?=.*[a-zA-Z]).{8,}$/;

  // Function to update state for name
  const handleNameChange = (event) => {
    setName(event.target.value);
  };

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
    // Reset validation errors
    setValidationErrors({});

    // Validate input fields
    const errors = {};
    if (!name.trim()) {
      errors.name = "Name is required";
    }
    if (!email.trim()) {
      errors.email = "Email is required";
    }
    if (!password.trim()) {
      errors.password = "Password is required";
    }
    if (password !== reEnteredPassword) {
      errors.reEnteredPassword = "Passwords do not match";
    }
    // Check password strength
    if (!passwordRegex.test(password)) {
      errors.password = "Password must contain at least 8 characters, 1 uppercase letter, 1 lowercase letter, 1 digit, and 1 special character";
    }
    // If there are validation errors, update the state and return
    if (Object.keys(errors).length > 0) {
      setValidationErrors(errors);
      return;
    }
    // Sending a POST request to the sign up endpoint
    axios({
      method: "POST",
      url: "http://127.0.0.1:5000/signup",
      data: {
        name: name,
        email: email,
        password: password,
      },
    })
      .then((response) => {
        console.log(response);
        alert("Successfully registered! Please log in.");
        navigate("/Login");
      })
      .catch((error) => {
        // If there's an error
        if (error.response) {
          console.log(error.response);
          console.log(error.response.status);
          console.log(error.response.headers);
          // If the error status is 401 (Unauthorized)
          if (error.response.status === 409) {
            alert("Email has been taken");
          }
        }
      });
    // Clear the registration form
    setName("");
    setEmail("");
    setPassword("");
    setReEnteredPassword("");

    // Here you can add logic to handle the registration
  };

  // Function to switch to sign in page
  const onSwitchToSignIn = () => {
    navigate("/login");
  };

  return (
    <div className="page">
      <div className="cover">
        <h1>Register</h1>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={handleNameChange}
        ></input>
        {validationErrors.name && <p className="error-text">{validationErrors.name}</p>}
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={handleEmailChange}
        ></input>
        {validationErrors.email && <p className="error-text">{validationErrors.email}</p>}
        <input
          className="pass"
          type="password"
          placeholder="Password"
          value={password}
          onChange={handlePasswordChange}
        ></input>
        {validationErrors.password && <p className="error-text">{validationErrors.password}</p>}
        <input
          className="re-pass"
          type="password"
          placeholder="Re-enter Password"
          value={reEnteredPassword}
          onChange={handleReEnteredPasswordChange}
        ></input>
        {validationErrors.reEnteredPassword && (
          <p className="error-text">{validationErrors.reEnteredPassword}</p>
        )}
        <div className="login-btn" onClick={handleRegister}>
          Register
        </div>
        <div className="question">
          <span className="switch-btn" onClick={onSwitchToSignIn}>
          Already have an account ? Sign In
          </span>
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
