import "./App.css";

import {
  FaHouseChimney,
  FaRegCircleUser,
  FaTrashCan,
  FaAppStore,
  FaRegStar,
} from "react-icons/fa6";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"; // import React Router components

import { useState } from "react"; // import useState hook
import MyGrammarly from "./PageComponent/MyGrammarly";
import Trash from "./PageComponent/Trash";
import Account from "./PageComponent/Account";
function App() {
  const [activeItem, setActiveItem] = useState("MyGrammarly"); // create a state variable to store the active item name

  function handleClick(itemName) {
    // set the state to the item name
    setActiveItem(itemName);
    console.log(itemName);
  }

  

  function Apps() {
    return <div>Apps page</div>;
  }

  function Premium() {
    return <div>Premium page</div>;
  }

  return (
    <div className="container">
      <BrowserRouter>
        {" "}
        <div className="Menu">
          <div className="logo">
            <img
              src="logo.png"
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
            className={`item ${activeItem === "Apps" ? "active" : ""}`}
            onClick={() => handleClick("Apps")}
          >
            <FaAppStore />
            <Link to={{ pathname: "/apps" }}>Apps</Link>
          </div>
          <div
            className={`item ${activeItem === "Premium" ? "active" : ""}`}
            onClick={() => handleClick("Premium")}
          >
            <FaRegStar />
            <Link to={{ pathname: "/premium" }}>Premium</Link>
          </div>
        </div>
        <div className="PageContent">
          <Routes>
            <Route path="/" element={<MyGrammarly />} />
            <Route path="/MyGrammarly" element={<MyGrammarly />} />
            <Route path="/Trash" element={<Trash />} />
            <Route path="/Account" element={<Account />} />
            <Route path="/Apps" element={<Apps />} />
            <Route path="/Premium" element={<Premium />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
