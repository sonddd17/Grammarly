import word_doc from '../../assets/word_doc.png'
import React from 'react';
import { FaDownload, FaTrashCan } from "react-icons/fa6";


function DocumentCard({ doc , onDelete  }) {
    if (!doc) return null;

    const MIME_TYPE_DOCX = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
    //Delete content
    const deleteDocument = () => {
        // Perform deletion logic (e.g., API call)
        // On successful deletion:
        onDelete(doc.id); // Call the onDelete callback passed from parent
    };
    // Download document
    const downloadDocument = () => {

        // MIME type for .docx
        const blob = new Blob(
            [doc.fetchedFile],
            {
                type: MIME_TYPE_DOCX
            });

        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = doc.fileName; // Set the downloaded filename
        document.body.appendChild(link);
        link.click();
        link.remove();
        URL.revokeObjectURL(url); // Clean up to avoid memory leaks
    };

    // Extract file extension
    const getFileExtension = (filename) => {
        return filename.slice(((filename.lastIndexOf(".") - 1) >>> 0) + 2);
    }

    // Shorten the long filename
    const truncateText = (text, limit) => {
        const extension = getFileExtension(text);
        if (text.length <= limit) return text;
        return text.substring(0, limit) + '...' + ' .' + extension;
    };


    const shortFileName = truncateText(doc.fileName, 30);

    return (
        <div className="document-card">
            <div className="content">
                <img src={word_doc} width='48' alt='Word document icon' />
                <div className="document-info">
                    <h3>{shortFileName}</h3>
                    {/* Button for performing an action with the document */}
                </div>
            </div>
            <div className="textButton">
                <button className="icon-button" onClick={downloadDocument}>
                    <FaDownload size={24} />
                </button>
                <button className="icon-button" onClick={deleteDocument}>
                    <FaTrashCan size={24} />
                </button>
            </div>


        </div>
    );
};

export default DocumentCard;
