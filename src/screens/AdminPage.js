import React from 'react';
import MarkdownIt from 'markdown-it';
import MdEditor from 'react-markdown-editor-lite';
import axios from 'axios';
import { useState } from 'react';
import 'react-markdown-editor-lite/lib/index.css';
import NewsSelect from '../components/NewsSelect';
import adminPage from '../css/AdminPage.css'

const COMMUNITY_NEWS = 0
const ALUMNI_ACTIVITIES = 1
const NEW = 0
const EDIT = 1

const mdParser = new MarkdownIt();

const AdminPage = () => {
  const [title, setTitle] = useState('');
  const [img_url, setImgUrl] = useState('');
  const [content, setContent] = useState('');
  const newsTypeArr = ['社团新闻', '校友活动']
  const purposeArr = ['新建', '编辑']
  const [comNews, setComNews] = useState(COMMUNITY_NEWS)
  const [aluAct, SetAluAct] = useState(ALUMNI_ACTIVITIES)
  const [purpose, setPurpose] = useState(NEW)
  const [newsId, setNewsId] = useState(1)

  const handleEditorChange = ({ text }) => {
    setContent(text);
  };

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };
  const handleImgUrlChange = (event) => {
    setImgUrl(event.target.value);
  };

  const handleSave = async () => {
    try {
      
      if (comNews===1){//this is community news
        let post_url = '/api/users/saveNews'
        console.log('社团消息')
        await axios.post(post_url, { title: title, content: content });
        alert('Markdown content saved successfully');
        setContent('');
        setTitle('');
      } else {

        let post_url = '/api/users/saveAlumniAct'
        await axios.post(post_url, { title: title, content: content, img_url:img_url });
        alert('Markdown content saved successfully');
        setContent('');
        setTitle('');
      }
      
    } catch (error) {
      console.error('Error saving markdown content', error);
      alert('Failed to save markdown content');
    }
  };


  const handleComNewsChange = () => {
      setComNews(1)
      SetAluAct(0)
  }

  const handleAluActChange = () => {
      setComNews(0)
      SetAluAct(1)
  }

  const handlePurposeTypeChange = (state) => {
    
  }


  return (
    <div>
      <h2 class="adminPage">Admin Page</h2>
      <div>
        <div class="btn-group">
          <a href="#" onClick={() => handleComNewsChange()} class={`btn  ${comNews? 'active':''}`}>社团新闻</a>
          <a href="#" onClick={() => handleAluActChange()} class={`btn  ${aluAct? 'active':''}`}>校友活动</a>
        </div>
      </div>


      <div class="content">
        <input class="newsTitle"
          type="text"
          value={title || ''}
          onChange={handleTitleChange}
          placeholder="Title"
        />

        {aluAct === 1 && (
        <input class="imageUrl"
          type="text"
          value={img_url || ''}
          onChange={handleImgUrlChange}
          placeholder="Image URL"
        />)}
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
