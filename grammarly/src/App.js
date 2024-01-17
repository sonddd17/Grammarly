import React, { useState } from "react";
import Register from "./Auth/Register.js";
import Login from "./Auth/Login.js";
import MainPage from "./PageComponent/MainPage";
import "./App.css";
import "./configs/aws-exports.js";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
  };

  return (
    <div>
      {isLoggedIn ? (
        <MainPage />
      ) : (
        <Login onLoginSuccess={handleLoginSuccess} />
      )}
    </div>
  );
}

export default App;
