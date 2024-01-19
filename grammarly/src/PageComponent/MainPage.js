import "../App.css";

import {
  FaHouseChimney,
  FaRegCircleUser,
  FaTrashCan,
  FaPowerOff,
  FaRegStar,
} from "react-icons/fa6";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"; // import React Router components
import axios from "axios";
import app_logo from '../assets/logo-color.png'
import { useEffect, useState } from "react"; // import useState hook
import MyGrammarly from "./MyGrammarly";
import Trash from "./Trash";
import Account from "./Account";
import Premium from "./Premium";
import Login from "../Auth/Login";
import App from "../App";

function MainPage(props) {
  const [activeItem, setActiveItem] = useState(
    localStorage.getItem("activeItem") || "MyGrammarly"
  );

  useEffect(() => {
    localStorage.setItem("activeItem", activeItem);
  }, [activeItem]);

  // create a state variable to store the active item name


  function handleClick(itemName) {
    if (itemName === "Logout") {
      Logout();
      console.log(itemName)
    } else {
      // set the state to the item name
      setActiveItem(itemName);
      console.log(itemName);
    }
  }

  function Logout() {
    axios({
      method: "POST",
      url:"http://127.0.0.1:5000/logout",
    })
    .then((response) => {
        props.token()
        props.removeToken()
        localStorage.removeItem('email')
        
    }).catch((error) => {
        if (error.response) {
            console.log(error.response)
            console.log(error.response.status)
            console.log(error.response.headers)
        }
    })
  }

  return (
    <div className="container">
      <BrowserRouter>
        {" "}
        <div className="Menu">
          <div className="logo">
            <img
              src={app_logo}
              alt="App icon"
            ></img>
          </div>
          <div
            className={`item ${activeItem === "MyGrammarly" ? "active" : ""}`} // use a template literal and a ternary operator to conditionally apply the active class
            onClick={() => handleClick("MyGrammarly")}
          >
            <FaHouseChimney />
            <Link to={{ pathname: "/MyGrammarly" }}>Homepage</Link>
          </div>
          <div
            className={`item ${activeItem === "Trash" ? "active" : ""}`}
            onClick={() => handleClick("Trash")}
          >
            <FaTrashCan />
            <Link to={{ pathname: "/trash" }}>Trash</Link>
          </div>
          <div
            className={`item ${activeItem === "Account" ? "active" : ""}`}
            onClick={() => handleClick("Account")}
          >
            <FaRegCircleUser />
            <Link to={{ pathname: "/account" }}>Account</Link>
          </div>

          <div
            className={`item ${activeItem === "Premium" ? "active" : ""}`}
            onClick={() => handleClick("Premium")}
          >
            <FaRegStar />
            <Link to={{ pathname: "/Premium" }}>Premium</Link>
          </div>

          <div
            className={`item ${activeItem === "Logout" ? "active" : ""}`}
            onClick={() => handleClick("Logout")}
          >
            <FaPowerOff />
            <div className="logOut-text">Log out</div>
          </div>

        </div>
        <div className="PageContent">
          <Routes>
            <Route path="/" element={<MyGrammarly />} />
            <Route path="/MyGrammarly" element={<MyGrammarly />} />
            <Route path="/Trash" element={<Trash />} />
            <Route path="/Account" element={<Account />} />
            <Route path="/Premium" element={<Premium />} />
            <Route path="/App" element={<App />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default MainPage;
