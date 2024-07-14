import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Autoplay } from 'swiper/modules';
import homeScreenImage from '../img/hkust_background.png';
import homePageBackground from "../img/homepage-background.png"
import '../css/homeScreen.css';
import backgroundImage from '../img/Group12.png'; // 确保路径正确

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
                <div style={{
                  left: '142px',
                  top: '70px',
                  position: 'absolute',
                  color: 'white',
                  fontSize: '64px', // 默认大部分文本的字体大小
                  fontFamily: 'OPPO Sans',
                  fontWeight: '400',
                  wordWrap: 'break-word',
                  lineHeight: '1.3',  // 调整行间距
                  textAlign: 'left'  // 设置文本左对齐
                }}>
                  通过知识传递、人脉拓展和竞赛实践，<br/>
                  赋能未来量化金融领袖<br/>
                <span style={{ 
                  position: 'absolute',
                  top: '170px', // 根据需要调整此值以向上移动文本
                  fontSize: '40px',
                  width: '100%' // 确保宽度足够包含文本
                }}>
                  HKUST Quant Trading Society
                </span>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <img class="layer1" src={homeScreenImage} alt="HKUST Background" />
              <div class="layer2 swiper-cover"></div>
              <div class="layer3">
                <div style={{
                  left: '142px',
                  top: '70px',
                  position: 'absolute',
                  color: 'white',
                  fontSize: '64px', // 默认大部分文本的字体大小
                  fontFamily: 'OPPO Sans',
                  fontWeight: '400',
                  wordWrap: 'break-word',
                  lineHeight: '1.3',  // 调整行间距
                  textAlign: 'left'  // 设置文本左对齐
                }}>
                  通过知识传递、人脉拓展和竞赛实践，<br/>
                  赋能未来量化金融领袖<br/>
                  <span style={{ 
                    position: 'absolute',
                    top: '170px', // 根据需要调整此值以向上移动文本
                    fontSize: '40px',
                    width: '100%' // 确保宽度足够包含文本
                  }}>
                    HKUST Quant Trading Society
                  </span>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <img class="layer1" src={homeScreenImage} alt="HKUST Background" />
              <div class="layer2 swiper-cover"></div>
              <div class="layer3">
                <div style={{
                  left: '142px',
                  top: '70px',
                  position: 'absolute',
                  color: 'white',
                  fontSize: '64px', // 默认大部分文本的字体大小
                  fontFamily: 'OPPO Sans',
                  fontWeight: '400',
                  wordWrap: 'break-word',
                  lineHeight: '1.3',  // 调整行间距
                  textAlign: 'left'  // 设置文本左对齐
                }}>
                  通过知识传递、人脉拓展和竞赛实践，<br/>
                  赋能未来量化金融领袖<br/>
                  <span style={{ 
                    position: 'absolute',
                    top: '170px', // 根据需要调整此值以向上移动文本
                    fontSize: '40px',
                    width: '100%' // 确保宽度足够包含文本
                  }}>
                    HKUST Quant Trading Society
                  </span>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <img class="layer1" src={homeScreenImage} alt="HKUST Background" />
              <div class="layer2 swiper-cover"></div>
              <div class="layer3">
                <div style={{
                  left: '142px',
                  top: '70px',
                  position: 'absolute',
                  color: 'white',
                  fontSize: '64px', // 默认大部分文本的字体大小
                  fontFamily: 'OPPO Sans',
                  fontWeight: '400',
                  wordWrap: 'break-word',
                  lineHeight: '1.3',  // 调整行间距
                  textAlign: 'left'  // 设置文本左对齐
                }}>
                  通过知识传递、人脉拓展和竞赛实践，<br/>
                  赋能未来量化金融领袖<br/>
                  <span style={{ 
                    position: 'absolute',
                    top: '170px', // 根据需要调整此值以向上移动文本
                    fontSize: '40px',
                    width: '100%' // 确保宽度足够包含文本
                  }}>
                    HKUST Quant Trading Society
                  </span>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <img class="layer1" src={homeScreenImage} alt="HKUST Background" />
              <div class="layer2 swiper-cover"></div>
              <div class="layer3">
                <div style={{
                  left: '142px',
                  top: '70px',
                  position: 'absolute',
                  color: 'white',
                  fontSize: '64px', // 默认大部分文本的字体大小
                  fontFamily: 'OPPO Sans',
                  fontWeight: '400',
                  wordWrap: 'break-word',
                  lineHeight: '1.3',  // 调整行间距
                  textAlign: 'left'  // 设置文本左对齐
                }}>
                  通过知识传递、人脉拓展和竞赛实践，<br/>
                  赋能未来量化金融领袖<br/>
                  <span style={{ 
                    position: 'absolute',
                    top: '170px', // 根据需要调整此值以向上移动文本
                    fontSize: '40px',
                    width: '100%' // 确保宽度足够包含文本
                  }}>
                    HKUST Quant Trading Society
                  </span>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
        <div style={{
  position: 'relative', // 设置为相对定位，作为图片的定位基准
  paddingTop: '70px', // 增加上边距
  paddingBottom: '20px', // 增加底部边距
  marginLeft: '100px',
  minHeight: '600px', // 设置一个最小高度
}}>
  <div style={{
    maxWidth: '890px',
    width: 'auto',
    flexGrow: 0,
    padding: '20px', // 文本内边距
    color: '#252525',
    fontSize: '22px',
    fontFamily: 'OPPO Sans',
    fontWeight: '400',
    lineHeight: '1.4', // 行高
    textAlign: 'left' // 文本左对齐
  }}>
    <div style={{ color: '#9A1E23', fontSize: '64px', marginBottom: '10px' }}>
      香港科技大学量化交易协会
    </div>
    <div style={{ color: '#003974', fontSize: '40px', marginBottom: '20px' }}>
      HKUST Quant Trading Society
    </div>
    <div style={{ marginTop: '70px', paddingBottom: '50px' }}>
      <span>我们是</span>
      <span style={{ color: '#9A1E23' }}>香港科技大学量化交易协会（港科宽图）</span>
      <span>，成立于2023年9月。作为香港科技大学金融数学硕士课程（MAFM）的学生社团，我们致力于帮助学生进入量化行业并建立有效的人脉。我们的校友网络涵盖超过10,000名香港科技大学毕业生。此外，我们计划举办面向全校学生的交易比赛，发掘人才并孵化未来的量化基金。</span><br/><br/>
      <span>香港科技大学数学系自2006年成立以来，每年招收约800名本科生、硕士生和博士生。作为系里支持的学生领袖平台，我们的校友网络覆盖超过10,000名学生和校友。</span>
    </div>
  </div>
  <div style={{
    position: 'absolute', // 设置绝对定位
    right: 0, // 右对齐
    top: 30, // 从顶部开始
    width: '700px', 
    minHeight: '600px', // 设置图像区域的最小高度
    background: `url(${backgroundImage}) no-repeat center center`, // 使用导入的图片作为背景
    backgroundSize: 'cover', // 覆盖整个容器
    zIndex: -1
  }}></div>
</div>

        </div>
  );
}
export default HomeScreen;