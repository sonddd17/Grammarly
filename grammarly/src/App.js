import React, { useState } from "react";
import Register from "./Auth/Register.js";
import Login from "./Auth/Login.js";
import MainPage from "./PageComponent/MainPage";
import useToken from "./Auth/useToken";
import "./App.css";

function App() {
  const { token, setToken, removeToken } = useToken();

  return (
    <div>
      {token === null || token === undefined ? (
        <Login onLoginSuccess={setToken} />
      ) : (
        <MainPage token={token} setToken={setToken} />
      )}
    </div>
  );
}

export default App;
