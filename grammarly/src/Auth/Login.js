import React from "react";
import "./Auth.css";

function Login() {
  return (
    <div className="page">
      <div className="cover">
        <h1>Login</h1>
        <input type="email" placeholder="Email"></input>
        <input type="password" placeholder="Password"></input>
        <div className="login-btn">Login</div>
        <div className="question">Don't have account yet?</div>
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
