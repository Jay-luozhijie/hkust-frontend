import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';

export default function CommunityNewsDetailScreen(){
    const {id} = useParams();
    const [news, setNews] = useState("");
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(()=>{
        const fetchNews = async () =>{
            try{
                const response = await axios.get(`/api/users/newsDetail?id=${id}`);
                console.log(id)
                console.log(news)
                setNews(response.data);
            } catch(err){
                setError('Error fetching news details');
            } finally{
                setLoading(false)
            }
        };
        fetchNews();
    }, [id]);
    // const news = await axios.get(`/api/users/newsDetail?id=${id}`);
    return (
        <div>
            {news ? (
                <div>
                <h2>{news.title}</h2>
                <ReactMarkdown>{news.content}</ReactMarkdown>
                <p><strong>Published at:</strong> {news.updatedAt}</p>
                </div>
            ) : (
                <div>No news details available</div>
            )}
        </div>
    );
}