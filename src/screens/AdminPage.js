// SecretPage.js
import React from 'react';
import MarkdownIt from 'markdown-it';
import MdEditor from 'react-markdown-editor-lite';
import axios from 'axios'
import { useState } from 'react';
import 'react-markdown-editor-lite/lib/index.css';

const mdParser = new MarkdownIt();

const AdminPage = () => {
  const[title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleEditorChange = ({ text }) => {
    setContent(text);
  };

  const handleInputChange = (event) => {
    setTitle(event.target.value);
  };

  const handleSave = async () => {
    try {
      console.log('hello')
      console.log(title)
      await axios.post('/api/users/saveNews', { title: title, content: content });
      alert('Markdown content saved successfully');
      setContent("")
      setTitle("")
    } catch (error) {
      console.error('Error saving markdown content', error);
      alert('Failed to save markdown content');
    }
  };


  return (
    <div>
      <h2>Secret Page</h2>
      <p>This page is only accessible to authenticated users.</p>
      <div>
        <input
          type="text"
          value={title || ''}
          onChange={handleInputChange}
          placeholder="Title"
        />
        <MdEditor
          value={content}
          style={{ height: '500px' }}
          renderHTML={(text) => mdParser.render(text)}
          onChange={handleEditorChange}
        />
        <button onClick={handleSave}>Save</button>
      </div>
    </div>
  );
};

export default AdminPage;