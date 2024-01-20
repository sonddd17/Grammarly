import "../App.css";

import {
  FaHouseChimney,
  FaRegCircleUser,
  FaTrashCan,
  FaPowerOff,
  FaRegStar,
} from "react-icons/fa6";
import { BrowserRouter, Routes, Route, Link, useNavigate } from "react-router-dom"; // import React Router components
import axios from "axios";
import app_logo from '../assets/logo-color.png'
import { useEffect, useState } from "react"; // import useState hook
import MyGrammarly from "./MyGrammarly";
import Trash from "./Trash";
import Account from "./Account";
import Premium from "./Premium";
import Login from "../Auth/Login";
import App from "../App";
import Menu from "./Menu";

function MainPage() {
  /*const navigate = useNavigate();
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
      // If login is successful
      console.log(response);
      alert("Successfully Logout");
      // Navigate to the login page
      navigate("/login");
        
    }).catch((error) => {
        if (error.response) {
            console.log(error.response)
            console.log(error.response.status)
            console.log(error.response.headers)
        }
    })
  }*/

  return (
    <div className="container">
      
      <Menu />
        
        
      
      
    </div>
  );
}

export default MainPage;
