import React, { useState } from "react";
import Register from "./Auth/Register.js";
import Login from "./Auth/Login.js";
import MainPage from "./PageComponent/MainPage";
import useToken from "./Auth/useToken";
import "./App.css";

function App() {
  const { token, setToken, removeToken } = useToken();

  const [showRegister, setShowRegister] = useState(false);

  const handleLoginSuccess = (newToken) => {
    setToken(newToken);
  };

  const handleRegisterSuccess = () => {
    setShowRegister(false);
  };

  return (
    <div>
      {token === null || token === undefined ? (
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
      )}
    </div>
  );
}

export default App;
