import React, { useState } from "react";
import Register from "./Auth/Register.js";
import Login from "./Auth/Login.js";
import MainPage from "./PageComponent/MainPage";

import "./App.css";
import "./configs/aws-exports.js";

function App() {
  

  return (
    <div>


      {/* {token === null || token === undefined ? (
        showRegister ? (
          <Register onRegisterSuccess={handleRegisterSuccess} />
        ) : (
          <Login onLoginSuccess={handleLoginSuccess} onSwitchToSignUp={() => setShowRegister(true)} />
        )
      ) : (
        <MainPage token={token} setToken={setToken} />
      )}

      {!token && (
        <div className="question">
          {showRegister ? "Already have an account? " : "Don't have an account yet? "}
          <span
            className="switch-btn"
            onClick={() => setShowRegister((prev) => !prev)}
          >
            {showRegister ? "Login" : "Sign Up"}
          </span>
        </div>
      )} */}
    </div>
  );
}

export default App;
