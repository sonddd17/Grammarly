import React from "react";
import {
  FaFolder,
  FaFolderPlus,
  FaMagnifyingGlass,
  FaPager,
} from "react-icons/fa6";
import SearchBar from "./SearchBar";
import Menu from "./Menu";
function Trash() {
  return (
    <div className="container">
      <Menu />
      <div className="content-container">
        <div className="DocumentList">
          <SearchBar />
          <div className="newDocumentItem">
          <div className="box">
              <h3>Title</h3>
              <a>date/month/year</a>
              <div className="text">
                <a>cawefjioqhfuiqhfiuqwhfhqifohqiofhqwiofgqowfhqhofgiuqfguigfoq</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Trash;
