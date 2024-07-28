import React, { useState } from 'react';
import axios from 'axios';

const ImgBoxUploader = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [imageURL, setImageURL] = useState('');
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(imageURL).then(() => {
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000); // Reset after 2 seconds
    });
  };


  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = async () => {
    if (!selectedFile) return;

    const formData = new FormData();
    formData.append('file', selectedFile);

    try {
      const response = await axios.post('/api/users/generateImageUrl', formData);
      setImageURL(response.data.secure_url);
    } catch (error) {
      console.error('Error uploading the image', error);
    }
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload}>generate image url</button>
      {imageURL && (
        <div>
          <p>double click to copy:</p>
          <a
            href={imageURL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => {
              e.preventDefault();
              handleCopy();
            }}
            style={{ cursor: 'default', textDecoration: 'none', color: 'inherit' }}
          >
            {imageURL}
          </a>
          {isCopied && <span style={{ marginLeft: '10px', color: 'green' }}>Copied!</span>}
        </div>
      )}
    </div>
  );
};

export default ImgBoxUploader;
