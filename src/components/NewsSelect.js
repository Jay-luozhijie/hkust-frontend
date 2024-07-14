import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

const COMMUNITY_NEWS = 0;
const ALUMNI_ACTIVITIES = 1;

const NewsSelect = ({ newsType }) => {
  const [newsList, setNewsList] = useState([]);
  const [selectedNews, setSelectedNews] = useState("");
  const [loading, setLoading] = useState(false);

  const loadNews = async () => {
    try {
      setLoading(true);
      const req_string = newsType === COMMUNITY_NEWS 
        ? `/api/users/news?fetchAll=1` 
        : `/api/users/alumniActivities?fetchAll=1`;
      const response = await axios.get(req_string);
      setNewsList(response.data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching news data:', error);
      setLoading(false);
    }
  };

  useEffect(() => {
    loadNews();
  }, [newsType]);

  const handleSelectChange = (event) => {
    setSelectedNews(event.target.value);
  };

  return (
    <div className="container mt-4">
      <div className="form-group">
        <select
          className="form-select"
          aria-label="Default select example"
          value={selectedNews}
          onChange={handleSelectChange}
          size={newsList.length > 10 ? "10" : newsList.length}
          style={{ height: newsList.length > 10 ? '200px' : 'auto', overflowY: newsList.length > 10 ? 'auto' : 'hidden' }}
        >
          {newsList.map((newsItem) => (
            <option key={newsItem.id} value={newsItem.id}>
              {newsItem.title}, {newsItem.updatedAt}
            </option>
          ))}
        </select>
      </div>
      {loading && <div>Loading...</div>}
    </div>
  );
};

export default NewsSelect;