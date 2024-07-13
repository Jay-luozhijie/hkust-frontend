import React from 'react';
import { useNavigate  } from 'react-router-dom';

const NewsItem = ({ news }) => {
  const navigate = useNavigate ();

  const handleItemClick = () => {
    // Redirect to a specific route, passing item._id as a parameter
    navigate(`/communityNews/${news._id}`);
  };

  return (
    <div className="news-item" key={news._id} onClick={handleItemClick} style={{ cursor: 'pointer' }}>
      <span className="news-detail">{news.title}</span>
      <span className="news-time">{news.updatedAt}</span>
    </div>
  );
};

export default NewsItem;