import React from "react";
import { FaFolderPlus, FaPenFancy, FaTrash, FaFileArrowUp, FaCircleCheck, FaFileImage, FaPaperPlane, FaTrashCan } from "react-icons/fa6";
import SearchBar from "./SearchBar";
import { useState } from "react";

import "../Styles/Uploader.css"

import AWS from "aws-sdk"

function MyGrammarly() {
  
  // ---- File upload to S3 ----
  // Create state to store file
  const [file, setFile] = useState(null);

  // Upload function
  const uploadFile = async () => {

    // Define bucket name and region
    const S3_BUCKET = "grosana-bucket";
    const REGION = "ap-southeast-1"

    // Define access key to communicate with AWS
    AWS.config.update({
      accessKeyId: "AKIARLPZBW5ZAQESIAVQ",
      secretAccessKey: "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",
    });

    // Define S3 instance
    const s3 = new AWS.S3({
      params: { Bucket: S3_BUCKET },
      region: REGION,
    })

    // Define file parameters
    const params = {
      Bucket: S3_BUCKET,
      Key: file.name,
      Body: file,
    };

    // Upload file to S3
    var upload = s3.putObject(params).on("httpUploadProgress", (event) => {
      console.log(
        "Uploading " + parseInt((event.loaded * 100) / event.total) + "%" 
      );
    }).promise()

    await upload.then((err, data) => {
      console.log(err);
      alert("File uploaded successfully.");
    });
  };

  // Handle file and store it to file state
  const handleFileChange = (e) => {
    const file = e.target.files[0] // Upload file
    setFile(file) // Change file state
  };


  return (
    <div className="content-container">
      <div className="DocumentList">
        <SearchBar />
        <div className="newDocumentItem">
          <div className="file-upload-container">
            <div className="file-upload">
              <form
                onClick={() => document.querySelector(".input-field").click()}
                >
                <input 
                  type="file" 
                  className='input-field' hidden 
                  onChange={handleFileChange}/>

                {file ? 
                  <>
                    <FaCircleCheck onClick={() => uploadFile} color="#8ee2ce" size={60} />
                    <br/>
                    <p>Click below button to upload image...</p>
                  </>
                : 
                  <>
                    <FaFileArrowUp size={60} />
                    <br/>
                    <p> Browse Files to upload</p>
                  </>
                } 
              </form>
            </div>

            <section className='selected-file-row'>
              <span className='upload-content'>
                <FaFileImage />
                {file == null ? "" : file.name}
              </span>

              <FaTrashCan onClick={() => setFile(null)} color="#d52424"/>
            </section>

            <button className='upload-btn' onClick={uploadFile}>
                <FaPaperPlane color='#ffffff' />
                <p>Upload file</p>
            </button>
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
