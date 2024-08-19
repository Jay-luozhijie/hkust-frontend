import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import styles from "../css/communityNewsDetail.css"



export default function ActivitiesDetailScreen(){
    const {id} = useParams();
    const [news, setNews] = useState("");
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [date, setDate] = useState("")
    const [hourMinute, setHourMinute] = useState("")

    useEffect(()=>{
        const fetchNews = async () =>{
            try{
                console.log(id)
                const response = await axios.get(`/api/users/activitiesDetail?id=${id}`);
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
        <div className="newsContainer">
            {news ? (
                <div>
                    <div className="newsTitleContainer">
                        <h2 className="newsTitle">{news.title}</h2>
                        <div className="newsDate">{date}</div>
                    </div>
                    <div className="newsContent">
                        <ReactMarkdown remarkPlugins={[remarkGfm]}  rehypePlugins={[rehypeRaw]}>{news.content}</ReactMarkdown>
                    </div>
                   
                </div>
            ) : (
                <div>No news details available</div>
            )}
        </div>
    );
}