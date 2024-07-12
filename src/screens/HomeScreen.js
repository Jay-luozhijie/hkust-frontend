import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Autoplay } from 'swiper/modules';
import homeScreenImage from '../img/hkust_background.png';
import homePageBackground from "../img/homepage-background.png"
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
                <div class="text-box">
                  <span class="swiper-text size-1 ">通过知识传递、人脉拓展和竞赛实践，</span><br></br>
                  <span class="swiper-text size-1">赋能未来量化金融领袖</span><br></br>
                  <span class="swiper-text size-2">HKUST Quant Trading Society</span>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <img class="layer1" src={homeScreenImage} alt="HKUST Background" />
              <div class="layer2 swiper-cover"></div>
              <div class="layer3">
                <div class="text-box">
                  <span class="swiper-text size-1 ">通过知识传递、人脉拓展和竞赛实践，</span><br></br>
                  <span class="swiper-text size-1">赋能未来量化金融领袖</span><br></br>
                  <span class="swiper-text size-2">HKUST Quant Trading Society</span>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <img class="layer1" src={homeScreenImage} alt="HKUST Background" />
              <div class="layer2 swiper-cover"></div>
              <div class="layer3">
                <div class="text-box">
                  <span class="swiper-text size-1 ">通过知识传递、人脉拓展和竞赛实践，</span><br></br>
                  <span class="swiper-text size-1">赋能未来量化金融领袖</span><br></br>
                  <span class="swiper-text size-2">HKUST Quant Trading Society</span>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <img class="layer1" src={homeScreenImage} alt="HKUST Background" />
              <div class="layer2 swiper-cover"></div>
              <div class="layer3">
                <div class="text-box">
                  <span class="swiper-text size-1 ">通过知识传递、人脉拓展和竞赛实践，</span><br></br>
                  <span class="swiper-text size-1">赋能未来量化金融领袖</span><br></br>
                  <span class="swiper-text size-2">HKUST Quant Trading Society</span>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <img class="layer1" src={homeScreenImage} alt="HKUST Background" />
              <div class="layer2 swiper-cover"></div>
              <div class="layer3">
                <div class="text-box">
                  <span class="swiper-text size-1 ">通过知识传递、人脉拓展和竞赛实践，</span><br></br>
                  <span class="swiper-text size-1">赋能未来量化金融领袖</span><br></br>
                  <span class="swiper-text size-2">HKUST Quant Trading Society</span>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
        <div class="home-page-container" style={{height:"734px", overflow: "hidden", position: "relative", margin:"0"}}>
          <div class="homePageIntro" style={{width:"500px", marginLeft:"200px"}}>
            香港科技大学量化交易协会
            HKUST Quant Trading Society
            
            我们是香港科技大学量化交易协会（港科宽图），成立于2023年9月。作为香港科技大学金融数学硕士课程（MAFM）的学生社团，我们致力于帮助学生进入量化行业并建立有效的人脉。我们的校友网络涵盖超过10,000名香港科技大学毕业生。此外，我们计划举办面向全校学生的交易比赛，发掘人才并孵化未来的量化基金。

            香港科技大学数学系自2006年成立以来，每年招收约800名本科生、硕士生和博士生。作为系里支持的学生领袖平台，我们的校友网络覆盖超过10,000名学生和校友。
            
          </div>
          <div class="homePageBackground" style={{overflow: "hidden"}}>
              <img src={homePageBackground} ></img>
          </div>
        </div>
      </div>
    
  );
}
export default HomeScreen;