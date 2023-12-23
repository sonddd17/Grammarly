import React from "react";
import {
  FaFolderPlus,
} from "react-icons/fa6";
import SearchBar from "./SearchBar";
function MyGrammarly() {
  return (
    <div className="content-container">

      <div className="DocumentList">
        <SearchBar />
        <div className="newDocumentItem">
          <div class="upload">
            <FaFolderPlus />
            <a>
              New
            </a>
          </div>
          <div class="box">
            <h3>Title</h3>
            <a>date/month/year</a>
            <div className="text">
              <a>cawefjioqhfuiqhfiuqwhfhqifohqiofhqwiofgqowfhqhofgiuqfguigfoq</a>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
export default MyGrammarly;
