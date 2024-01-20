import { React, useState, useEffect } from "react";
import { FaFolderPlus, FaPenFancy, FaTrash, FaFileArrowUp, FaCircleCheck, FaFileImage, FaPaperPlane, FaTrashCan } from "react-icons/fa6";
import SearchBar from "./SearchBar";
import DocumentCard from "./homepage/DocumentCard";
import "../Styles/Uploader.css";
import "../Styles/DocumentCard.css";
import S3Singleton from "../models/S3Singleton";
import { S3_BUCKET } from "../models/S3Singleton";
import Menu from "./Menu";
import '../Styles/Homepage.css'

function MyGrammarly() {

  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [fetchedDocs, setFetchedDocs] = useState([]);

  // ---- File upload to S3 ----
  // Create state to store file
  const [file, setFile] = useState(null);

  // Upload function
  const uploadFile = async () => {
    const instance = await S3Singleton.getInstance()
    const request = instance.putObject({
      Bucket: S3_BUCKET,
      Key: file.name,
      Body: file,
    }).on("httpUploadProgress", (event) => {
      console.log("Uploading " + parseInt((event.loaded * 100) / event.total) + "%");
    }).promise()

    await request.then((data) => {
      // Add the file to the list of uploaded files
      setUploadedFiles(prevFiles => [...prevFiles, file.name]);
      setFile(null)
      alert("File uploaded successfully.");
    }).catch((err) => {
      console.log(err);
      alert("Error occurred during file upload.");
    });
  };

  // Handle file and store it to file state
  const handleFileChange = (e) => {
    const file = e.target.files[0] // Upload file
    setFile(file) // Change file state
  };

  const fetchFile = (fileName) => {
    return new Promise(async (resolve, reject) => {
      try {
        const s3 = await S3Singleton.getInstance();
        s3.getObject(
          {
            Bucket: S3_BUCKET,
            Key: fileName,
          },
          (err, data) => {
            if (err) {
              console.log(err);
              reject(err);
              return;
            }
            if (data) {
              const document = data.Body.toString('binary');
              resolve(document);
            }
          }
        );
      } catch (e) {
        console.log(e);
        reject(e);
      }
    });
  }
  function generateUniqueId() {
    return Date.now().toString(36) + Math.random().toString(36).substring(2);
  }
  const handleDelete = (id) => {
    // Logic to handle deletion
    setFetchedDocs(fetchedDocs.filter(doc => doc.id !== id));
  };
  const fetchAllFiles = async (uploadedFiles) => {
    const fetchedFiles = [];
    for (const fileName of uploadedFiles) {
      try {
        const fetchedFile = await fetchFile(fileName);
        fetchedFiles.push({ id: generateUniqueId(), fileName, fetchedFile });
      } catch (e) {
        console.log(`Error fetching file ${fileName}: `, e);
      }
    }
    return fetchedFiles;
  }

  const fetchAndDisplayFiles = async () => {
    const files = await fetchAllFiles(uploadedFiles);
    setFetchedDocs(files);
  };


  useEffect(() => {
    if (uploadedFiles.length > 0) {
      fetchAndDisplayFiles();
    }
  }, [uploadedFiles]);


  return (
    <div className="root">
      <Menu />
      <div className="content-container">
        <div className="DocumentList">
          <SearchBar />
          <div className="newDocumentItem">
            <div className="file-upload-container">
              <div className="file-upload">
                <form onClick={() => document.querySelector(".input-field").click()}>
                  <input
                    type="file"
                    className='input-field' hidden
                    onChange={handleFileChange} />

                  {file ?
                    <>
                      <FaCircleCheck onClick={() => uploadFile} color="#8ee2ce" size={60} />
                      <br />
                      <p>Click below button to upload image...</p>
                    </>
                    :
                    <>
                      <FaFileArrowUp size={60} />
                      <br />
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

                <FaTrashCan onClick={() => setFile(null)} color="#d52424" />
              </section>

              <button className='upload-btn' onClick={uploadFile}>
                <FaPaperPlane color='#ffffff' />
                <p>Upload file</p>
              </button>
            </div>

            {/* Show fetched document as card view */}
            <div className="documents-container">
              {fetchedDocs.map(doc => (
                <DocumentCard key={doc.id} doc={doc} onDelete={handleDelete} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>

  );
}
export default MyGrammarly;
