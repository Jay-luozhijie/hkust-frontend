import React, { useEffect, useState } from 'react';
import { useNavigate  } from 'react-router-dom';

const NewsItem = ({ news }) => {
  const navigate = useNavigate ();
  const [date, setDate] = useState("")
  const [hourMinute, setHourMinute] = useState("")

  useEffect(() => {
    if (news && news.updatedAt) {
      const dateString = new Date(news.updatedAt);
      setDate(dateString.toISOString().split('T')[0]);
      setHourMinute(dateString.toTimeString().slice(0, 5));
    }
  }, [news]);

  const handleItemClick = () => {
    // Redirect to a specific route, passing item._id as a parameter
    navigate(`/communityNews/${news._id}`);
  };

  return (
    <div className="news-item" key={news._id} onClick={handleItemClick} style={{ cursor: 'pointer' }}>
      <span className="news-detail">{news.title}</span>
      <span className="news-time">{date} {hourMinute}</span>
    </div>
  );
};

export default NewsItem;