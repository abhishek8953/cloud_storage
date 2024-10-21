import { useState, useEffect } from 'react';
import axios from 'axios';

const FolderUpload = () => {
  const [selectedFiles, setSelectedFiles] = useState([]);

  // Track file changes
  const handleFileChange = (e) => {
    const files = Array.from(e.target.files)  // All selected files
    setSelectedFiles(files);
    
  };

  // Monitor selected files state (for debugging)
  useEffect(() => {
    console.log('Selected files:', selectedFiles);
  }, [selectedFiles]);

  const handleUpload = async () => {
    const formData = new FormData();

    // Append each file to FormData with its path
    selectedFiles.forEach((file) => {
      formData.append('files', file, file.webkitRelativePath);
    });

    try {
      const res = await axios.post('http://localhost:5000/upload-folder', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log('Folder uploaded successfully:', res.data);
    } catch (err) {
      console.error('Error uploading folder:', err);
    }
  };

  return (
    <div>
      <input type="file" webkitdirectory="true" multiple onChange={handleFileChange} directory=""/>
      <button onClick={handleUpload}>Upload Folder</button>
     
    </div>
  );
};





export {FolderUpload}