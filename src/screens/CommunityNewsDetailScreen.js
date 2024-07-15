import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import "../css/communityNewsDetail.css"


export default function CommunityNewsDetailScreen(){
    const {id} = useParams();
    const [news, setNews] = useState("");
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [date, setDate] = useState("")
    const [hourMinute, setHourMinute] = useState("")

    useEffect(()=>{
        const fetchNews = async () =>{
            try{
                const response = await axios.get(`/api/users/newsDetail?id=${id}`);
                setNews(response.data);
                const dateString = new Date(response.data.updatedAt);
                setDate(dateString.toISOString().split('T')[0]);
                setHourMinute(dateString.toTimeString().slice(0, 5));
                
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
        <div class="news-container">
            {news ? (
                <div>
                    <div class="news-title-container">
                        <h2 class="newsTitle">{news.title}</h2>
                        <div class="newsDate">{date}</div>
                    </div>
                    <div class="news-content">
                        <ReactMarkdown remarkPlugins={[remarkGfm]}  rehypePlugins={[rehypeRaw]}>{news.content}</ReactMarkdown>
                    </div>
                   
                </div>
            ) : (
                <div>No news details available</div>
            )}
        </div>
    );
}