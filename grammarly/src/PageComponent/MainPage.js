import "../App.css";

import {
  FaHouseChimney,
  FaRegCircleUser,
  FaTrashCan,
  FaAppStore,
  FaRegStar,
} from "react-icons/fa6";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"; // import React Router components

import { useState } from "react"; // import useState hook
import MyGrammarly from "./MyGrammarly";
import Trash from "./Trash";
import Account from "./Account";
import Premium from "./Premium";
function MainPage() {
  const [activeItem, setActiveItem] = useState("MyGrammarly"); // create a state variable to store the active item name
  function handleClick(itemName) {
    // set the state to the item name
    setActiveItem(itemName);
    console.log(itemName);
  }

  
  return (
    <div className="container">
      <BrowserRouter>
        {" "}
        <div className="Menu">
          <div className="logo">
            <img
              src="logo192.png"
              alt="hahahaha something went wrong and i don't know"
            ></img>
          </div>
          <div
            className={`item ${activeItem === "MyGrammarly" ? "active" : ""}`} // use a template literal and a ternary operator to conditionally apply the active class
            onClick={() => handleClick("MyGrammarly")}
          >
            <FaHouseChimney />
            <Link to={{ pathname: "/MyGrammarly" }}>MyGrammarly</Link>
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
        </div>
        <div className="PageContent">
          <Routes>
            <Route path="/" element={<MyGrammarly />} />
            <Route path="/MyGrammarly" element={<MyGrammarly />} />
            <Route path="/Trash" element={<Trash />} />
            <Route path="/Account" element={<Account />} />
            <Route path="/Premium" element={<Premium />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default MainPage;
