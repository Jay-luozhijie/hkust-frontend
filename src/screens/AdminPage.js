
import React, { useEffect } from 'react';
import MarkdownIt from 'markdown-it';
import MdEditor from 'react-markdown-editor-lite';
import axios from 'axios';
import { useState } from 'react';
import 'react-markdown-editor-lite/lib/index.css';
import '../css/AdminPage.css'
// import {imgbox} from 'imgbox-js'
import ImgboxUploader from '../components/ImgBoxUploader';

const COMMUNITY_NEWS = 1
const ALUMNI_ACTIVITIES = 0
const NEW = 0
const EDIT = 1
const DELETE = 2


const mdParser = new MarkdownIt();

const parseTime = (updatedAt) => {
  const dateString = new Date(updatedAt);
  return (<span>{dateString.toISOString().split('T')[0]} {dateString.toTimeString().slice(0, 5)}</span>);
}


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
  const [editMode, setEditMode] = useState(NEW)
  const [selectedTitle, setSelectedTitle] = useState('Select the news');
  const [newsData, setNewsData] = useState([]);
  const [selectedId, setSelectedId] = useState(0);


  useEffect(() => {
    fetchNewsData(); 
  }, [comNews, aluAct]);

  const fetchNewsData = async () => {
    try {
      if (comNews === 1){
        const response = await axios.get(`/api/users/news?isAll=1`);
        setNewsData(response.data);
      } else{
        const response = await axios.get(`/api/users/AlumniAct?isAll=1`);
        setNewsData(response.data);
      }
    } catch (error) {
      console.error('Error fetching news data', error);
    }
  };

  // useEffect(() => {
  //   fetchActData();
  // }, [aluAct]);
  
  // const fetchActData = async () => {
  //   try {
  //     const response = await axios.get(`/api/users/AlumniAct?isAll=1`);
  //     setNewsData(response.data);
  //   } catch (error) {
  //     console.error('Error fetching act data', error);
  //   }
  // };


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

  

  const handleDelete = async () => {
    try {
      
      if (comNews===1){//this is community news
        await axios.delete(`/api/users/news/${selectedId}`);
        setSelectedTitle("")
        fetchNewsData();
      } else {
        console.log("delete posintg")
        await axios.delete(`/api/users/AlumniAct/${selectedId}`);
        setSelectedTitle("")
        fetchNewsData();
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

  const handlePurposeChange = (purpose) => {
    setPurpose(purpose);
    if (purpose === NEW){
      setEditMode(NEW)
    } else {
      setEditMode(DELETE)
    }
  }

  const handlePurposeTypeChange = (state) => {
    
  }

  const handleSelect = (title) => {
    setSelectedTitle(title);
  };

  const handleSelectId = (id) => {
    setSelectedId(id)
  }


  return (
    <div>
      <h2 class="adminPage">Admin Page</h2>
      <div class="btn-group">
        <a href="#" onClick={() => handlePurposeChange(NEW)} class={`btn  ${purpose===NEW? 'active':''}`}>NEW</a>
        <a href="#" onClick={() => handlePurposeChange(DELETE)} class={`btn  ${purpose===DELETE? 'active':''}`}>DELETE</a>
      </div>
      <div class="btn-group">
        <a href="#" onClick={() => handleComNewsChange()} class={`btn  ${comNews? 'active':''}`}>社团新闻</a>
        <a href="#" onClick={() => handleAluActChange()} class={`btn  ${aluAct? 'active':''}`}>校友活动</a>
      </div>

      {editMode === NEW && (
        <div>
          <div class="imgboxContainer">
            <ImgboxUploader />
          </div>
          <div class="content">
            <input class="inputNewsTitle"
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
      )}
      {editMode === DELETE && (
        <div>
          <div class="dropdown dropdownDeleteBtn">
            <a class="btn btn-secondary dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              {selectedTitle}
            </a>

            <ul class="dropdown-menu custom-dropdown-menu">
              {newsData.map((item) => (
                <li id={item._id}>
                  <a
                    className="dropdown-item"
                    href="#"
                    onClick={() => {
                      handleSelect(item.title)
                      handleSelectId(item._id)
                      }
                    }
                  >
                    {item.title}, {parseTime(item.updatedAt)}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <button class="deleteBtn" onClick={handleDelete}>Delete</button>
        </div>
      )}
      
    </div>
      
  );
};

export default AdminPage;

