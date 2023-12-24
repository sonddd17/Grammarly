import React from "react";
import "./Auth.css";
function Register() {
  
  return (
    <div className="page">
      <div className="cover">
        <h1>Register</h1>
        <input type="email" placeholder="Email"></input>
        <input className = "pass" type="password" placeholder="Password"></input>
        <input className = "re-pass" type="password" placeholder="Re-enter Password"></input>
        <div className="login-btn">Register</div>
        
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