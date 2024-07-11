import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Autoplay } from 'swiper/modules';
import homeScreenImage from '../img/hkust_background.png';
import '../css/homeScreen.css';

function HomeScreen() {
  return (
      <div>
        <Swiper  style={{height:'782px'}}
        className="homeSwiper"
        effect={'coverflow'}
        grabCursor={false}
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
          delay: 30000, // 自动播放延迟时间（毫秒）
          disableOnInteraction: false, // 用户交互后不禁用自动播放
        }}
        loop={true} // 启用循环播放
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Autoplay]}>
          <SwiperSlide >
            <div>
              <img class="layer1" src={homeScreenImage} alt="HKUST Background" />
              <div class="layer2 swiper-cover"></div>
              <div class="layer3">
                <span class="swiper-text size-1">通过知识传递、人脉拓展和竞赛实践，</span><br></br>
                <span class="swiper-text-1 size-1">赋能未来量化金融领袖</span><br></br>
                <span class="swiper-text-2 size-2">HKUST Quant Trading Society</span>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <img class="layer1" src={homeScreenImage} alt="HKUST Background" />
              <div class="layer2 swiper-cover"></div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <img class="layer1" src={homeScreenImage} alt="HKUST Background" />
              <div class="layer2 swiper-cover"></div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <img class="layer1" src={homeScreenImage} alt="HKUST Background" />
              <div class="layer2 swiper-cover"></div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <img class="layer1" src={homeScreenImage} alt="HKUST Background" />
              <div class="layer2 swiper-cover"></div>
            </div>
          </SwiperSlide>
        </Swiper>
       
      </div>
    
  );
}
export default HomeScreen;