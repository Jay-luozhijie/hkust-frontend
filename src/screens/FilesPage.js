import React, { useState, useEffect } from 'react';
import axios from 'axios';

const FileList = () => {
  const [files, setFiles] = useState([]);

  useEffect(() => {
    const fetchFiles = async () => {
      try {
        const response = await axios.get('/api/files');
        setFiles(response.data);
      } catch (error) {
        console.error('Error fetching files:', error);
      }
    };

    fetchFiles();
  }, []);

  const handleDownloadAll = async () => {
    try {
      const response = await axios.get('/api/files/download-all', {
        responseType: 'blob',
      });

      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', 'files.zip');
      document.body.appendChild(link);
      link.click();
      link.remove();
    } catch (error) {
      console.error('Error downloading zip file:', error);
    }
  };

  return (
    <div>
      <h1>Uploaded Files</h1>
      <ul>
        {files.map((file, index) => (
          <li key={index}>{file}</li>
        ))}
      </ul>
      <button onClick={handleDownloadAll}>Download All as ZIP</button>
    </div>
  );
};

export default FileList;
