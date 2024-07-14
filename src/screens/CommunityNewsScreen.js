import React, { useEffect, useState } from 'react';
import '../css/communityNews.css';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Autoplay } from 'swiper/modules';
import communityNewsImg1 from '../img/community-news-pc1.png';
import communityNewsImg2 from '../img/community-news-pc2.png';
import communityNewsImg3 from '../img/community-news-pc3.png';
import communityNewsImg4 from '../img/community-news-pc4.png';
import communityNewsImg5 from '../img/community-news-pc5.png';
import Rectangle91 from '../img/Rectangle91.png';
import Rectangle92 from '../img/Rectangle92.png';
import Rectangle93 from '../img/Rectangle93.png';
import Vector47 from '../img/Vector47.png';
import Vector48 from '../img/Vector48.png';
import axios from 'axios';
import NewsItem from '../components/NewsItem';



const activityData = [
  { id: 1, title: '科大打两局哈市离开的3423', time: '24-07-11 14:20', imgSrc: Rectangle91 },
  { id: 2, title: '科大打两局哈市离开的3423', time: '24-07-11 14:20', imgSrc: Rectangle92 },
  { id: 3, title: '科大打两局哈市离开的3423', time: '24-07-11 14:20', imgSrc: Rectangle93 },
  { id: 4, title: '科大打两局哈市离开的3423', time: '24-07-11 14:20', imgSrc: Rectangle91 },
  { id: 5, title: '科大打两局哈市离开的3423', time: '24-07-11 14:20', imgSrc: Rectangle92 }
]

function CommunityNewsScreen() {
  const [newsData, setNewsData] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  useEffect(() => {
    fetchNewsData(pageNumber);
  }, [pageNumber]);

  const fetchNewsData = async (page) => {
    try {
      const response = await axios.get(`/api/users/news?page=${page}&limit=4`);
      console.log(response.data)
      setNewsData(response.data);
    } catch (error) {
      console.error('Error fetching news data', error);
    }
  };

  const handlePrevClick = () => {
    if (pageNumber > 1) {
      setPageNumber(pageNumber - 1);
    }
  };

  const handleNextClick = () => {
    setPageNumber(pageNumber + 1);
  };


  return (
    <div className="community-news-wrap">
      <div className='banner-container'>
        <Swiper
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={'auto'}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          autoplay={{
            delay: 3000, // 自动播放延迟时间（毫秒）
            disableOnInteraction: false, // 用户交互后不禁用自动播放
          }}
          loop={true} // 启用循环播放
          pagination={{
            clickable: true,
          }}
          modules={[EffectCoverflow, Pagination, Autoplay]}
          className='banner-swiper'
        >
          <SwiperSlide>
            <img src={communityNewsImg1} className='image'/>
          </SwiperSlide>
          <SwiperSlide>
            <img src={communityNewsImg2} className='image'/>
          </SwiperSlide>
          <SwiperSlide>
            <img src={communityNewsImg3} className='image'/>
          </SwiperSlide>
          <SwiperSlide>
            <img src={communityNewsImg4} className='image'/>
          </SwiperSlide>
          <SwiperSlide>
            <img src={communityNewsImg5} className='image'/>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className='news-container'>
        <div className='news-image'>
          <img src={communityNewsImg1} className='image'/>
        </div>
        <div className='news-content'>
          <div className='header'>
            <span className='title'>社团新闻</span>
            <div className='page-btns'>
              <div className='perv-btn' onClick={handlePrevClick}> <img src={Vector48} className='image'/></div>
              <div className='next-btn'onClick={handleNextClick}> <img src={Vector47} className='image'/></div>
            </div>
          </div>
          <div className='news-list'>
          {newsData.map((item) => (
            <NewsItem key={item._id} news={item} />
          ))}
          </div>
        </div>
      </div>
      
      <div className='activity-container'>
        <div className='header'>
          <span className='title'>校友活动</span>
          <div className='page-btns'>
            <div className='perv-btn'> <img src={Vector48} className='image'/></div>
            <div className='next-btn'> <img src={Vector47} className='image'/></div>
          </div>
        </div>
        <div className='activity-list'>
          <Swiper watchSlidesProgress={true} slidesPerView={3} spaceBetween={50}>
            {activityData.map((item) => (
              <SwiperSlide key={item.id}>
                <div className='activity-item'>
                  <img src={item.imgSrc} className='image'/>
                  <div className='activity-info'>
                    <div className='title'>{item.title}</div>
                    <div className='time'>{item.time}</div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}

export default CommunityNewsScreen;
