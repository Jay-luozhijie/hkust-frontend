import React, { useState } from "react";

function FileUploadField({ label, placeholder, selectedFile, onFileChange, maxSize, setShowModal, setModalMessage }) {
  const [fileName, setFileName] = useState('');
  const [uploadProgress, setUploadProgress] = useState(0);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      // 检查文件大小是否超过限制
      if (file.size > maxSize) {
        setShowModal(true);
        setModalMessage(`文件过大，请选择小于 ${(maxSize / (1024 * 1024)).toFixed(2)}MB 的文件。`);
        return;
      }
      
      onFileChange(file);
      setFileName(file.name);

      // 模拟上传过程
      const simulateUpload = setInterval(() => {
        setUploadProgress((prevProgress) => {
          if (prevProgress >= 100) {
            clearInterval(simulateUpload);
            return 100;
          }
          return prevProgress + 10;
        });
      }, 200);
    }
  };

  return (
    <React.Fragment>
    <div className="details">
      <div className="input-heading">{label}</div>
      <div className="file-upload">
        <div className="file-upload-container">
          <input 
            className="rounded-input"
            type="text"
            placeholder={placeholder}
            value={fileName}
            readOnly
          />
          <button className="upload-button">
          {uploadProgress === 100 ? '上传成功' : '选择文件'}
            <input 
              type="file" 
              className="file-input" 
              onChange={handleFileChange} 
              accept=".pdf,.doc,.docx"
              aria-label="上传文件"
            />
          </button>
        </div>
        </div>

    </div>
            <div className="details">
            <div className="upload-progress">
              <div 
                className="upload-progress-bar" 
                style={{ width: `${uploadProgress}%` }}
              ></div>
            </div>
          </div>
          </React.Fragment>
  );
}

export default FileUploadField;
