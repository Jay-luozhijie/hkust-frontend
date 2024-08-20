import React, { useState, useEffect } from 'react';
import axios from 'axios';

const FileList = () => {
  const [files, setFiles] = useState([]);
  const [error, setError] = useState('');
  const [isRegistrationOpen, setIsRegistrationOpen] = useState(false);

  useEffect(() => {
    const source = axios.CancelToken.source();

    const fetchFiles = async () => {
      try {
        const response = await axios.get('/api/files', { cancelToken: source.token });
        setFiles(response.data);
      } catch (error) {
        if (axios.isCancel(error)) {
          console.log('Request canceled:', error.message);
        } else {
          console.error('Error fetching files:', error);
          setError('无法获取文件列表，请稍后重试');
        }
      }
    };

    fetchFiles();
    return () => {
      source.cancel("Component got unmounted");
    };
  }, []);

  useEffect(() => {
    axios.get('/api/registration/status')
      .then(response => {
        setIsRegistrationOpen(response.data.isOpen);
      })
      .catch(error => {
        console.error('Error fetching registration status:', error);
      });
  }, []);
  
  const handleDownloadAll = async () => {
    try {
      const response = await axios.get('/api/files/download-all', {
        responseType: 'blob',
      });

      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', '表格与简历.zip');
      document.body.appendChild(link);
      link.click();
      link.remove();
    } catch (error) {
      console.error('Error downloading zip file:', error);
      setError('下载ZIP文件失败，请检查网络或联系管理员');
    }
  };

  const toggleRegistration = () => {
    axios.post('/api/registration/toggle', { isOpen: !isRegistrationOpen })
      .then(response => {
        // 直接使用从服务器返回的最新状态更新
        setIsRegistrationOpen(response.data.isOpen);
      })
      .catch(error => {
        console.error('Error updating registration status:', error);
      });
  };  

  return (
    <div style={{ marginTop: '50px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <h1>已上传表格</h1>
      <h5>(附件与表格同名)</h5>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {files.length > 0 ? (
        <ul>
          {files.map((file) => (
            <li key={file}>{file}</li>
          ))}
        </ul>
      ) : <p>没有可下载的文件</p>}
      <button onClick={handleDownloadAll}>下载ZIP文件</button>
      <button onClick={toggleRegistration} style={{ marginTop: '20px' }}>
        {isRegistrationOpen ? '关闭报名入口' : '开启报名入口'}
      </button>
    </div>
  );
};

export default FileList;
