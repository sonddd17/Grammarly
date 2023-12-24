import React from "react";
import { FaFolderPlus, FaPenFancy, FaTrash } from "react-icons/fa6";
import SearchBar from "./SearchBar";
function MyGrammarly() {
  return (
    <div className="content-container">
      <div className="DocumentList">
        <SearchBar />
        <div className="newDocumentItem">
          <div className="upload">
            <FaFolderPlus />
            <a>New</a>
          </div>
          <div className="box">
            <div className="textContent">
              <h3>Title</h3>
              <h4>date/month/year</h4>
              <a>
                
              </a>
            </div>
            <div className="editOption">
              <div className="trash-btn">
                <FaTrash />
              </div>
              <div className="edit-btn">
                <FaPenFancy />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default MyGrammarly;
