import "../App.css";

import {
  FaHouseChimney,
  FaRegCircleUser,
  FaTrashCan,
  FaPowerOff,
  FaRegStar,
  FaPeopleGroup
} from "react-icons/fa6";
import { BrowserRouter, Routes, Route, Link, useNavigate } from "react-router-dom"; // import React Router components
import axios from "axios";
import app_logo from '../assets/logo-color.png'
import { useEffect, useState } from "react"; // import useState hook
import AboutUs from "./about_us/AboutUs";


function Menu() {
    const navigate = useNavigate();
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
          localStorage.clear();
            
        }).catch((error) => {
            if (error.response) {
                console.log(error.response)
                console.log(error.response.status)
                console.log(error.response.headers)
            }
        })
    }

    

    return (
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
            className={`item ${activeItem === "AboutUs" ? "active" : ""}`}
            onClick={() => handleClick("AboutUs")}
          >
            <FaPeopleGroup />
            <Link to="/about_us">About us</Link>
          </div>

          <div
            className={`item ${activeItem === "SubscriptionPlan" ? "active" : ""}`}
            onClick={() => handleClick("SubscriptionPlan")}
          >
            <FaRegStar />
            <Link to="/subscription_plan">Upgrade</Link>
          </div>


          <div
            className={`item ${activeItem === "Logout" ? "active" : ""}`}
            onClick={() => handleClick("Logout")}
          >
            <FaPowerOff />
            <div className="logOut-text">Log out</div>
          </div>

        </div>
    );
    

}

export default Menu;
