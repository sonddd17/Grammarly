import React from "react";
import "../App.css";
import { FaMagnifyingGlass } from "react-icons/fa6";
function SearchBar() {
  return (
    <div className="searchBox">
        <input className="searchText" type="text" placeholder="Search Here ... "></input>
        <label className="icon">
            <FaMagnifyingGlass/>
        </label>
    </div>
  );
}
export default SearchBar;
