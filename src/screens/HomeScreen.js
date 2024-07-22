import React from 'react';
import { useTranslation } from 'react-i18next';
import i18n from 'i18next';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Autoplay } from 'swiper/modules';
import { useMediaQuery } from 'react-responsive';
import breakpoints from '../config/breakpoints';
import '../css/homeScreen.scss';
import backgroundImage from '../img/Group12.png';

// 引入所有幻灯片图片
import slide1ScreenImage from '../img/homeslides/slide1.png';
import slide2ScreenImage from '../img/homeslides/slide2.png';
import slide3ScreenImage from '../img/homeslides/slide3.png';
import slide4ScreenImage from '../img/homeslides/slide4.png';
import slide5ScreenImage from '../img/homeslides/slide5.png';
import slide6ScreenImage from '../img/homeslides/slide6.png';

const slideImages = [
  slide1ScreenImage, slide2ScreenImage, slide3ScreenImage,
  slide4ScreenImage, slide5ScreenImage, slide6ScreenImage
];

function parseNewlines(text, isMobile) {
  if (isMobile) {
    return text.split('\n').map((line, index) => (
      <React.Fragment key={index}>
        {line}
        {index < text.split('\n').length - 1 && <br />}
      </React.Fragment>
    ));
  } else {
    return text.replace(/\n/g, ' '); // 在桌面模式下，换行符被替换为空格
  }
}

function SlideContent({ slideIndex, isMobile }) {
  const { t } = useTranslation();
  const isEnglish = i18n.language === 'en';
  const fontSizeMain = isMobile ? '22px' : '50px';
  const fontSizeSub = isMobile ? '18px' : '30px';
  const textAlign = isMobile ? 'right' : 'left';
  const textPosition1 = isMobile ? { right: '20px', top: isEnglish ? '80px' : '80px' } : { left: '142px', top: '70px' };
  const textPosition2 = isMobile ? { right: '20px', top: isEnglish ? '140px' : '120px' } : { left: '142px', top: '140px' };
  const textPosition3 = isMobile ? { right: '20px', top: isEnglish ? '210px' : '160px' } : { left: '142px', top: '220px' };
  const paddingLeft = isMobile ? '0px' : '150px';
  const paddingRight = isMobile ? '15px' : '0px';

  return (
    <div>
      <img className="layer1" src={slideImages[slideIndex]} alt={t('hkust_background')} />
      <div className="layer2 swiper-cover"></div>
      <div className="layer3">
        <div style={{
          color: 'white',
          fontSize: fontSizeMain,
          fontFamily: 'customOPPOSans',
          fontWeight: '400',
          wordWrap: 'break-word',
          lineHeight: '1.3',
          width: '100%',
          textAlign: textAlign,
          paddingLeft: paddingLeft,
          paddingRight: paddingRight,
          ...textPosition1
        }}>
          {parseNewlines(t('slide_text_line1'), isMobile)}
        </div>
        <div style={{
          color: 'white',
          fontSize: fontSizeMain,
          fontFamily: 'customOPPOSans',
          fontWeight: '400',
          wordWrap: 'break-word',
          lineHeight: '1.3',
          width: '100%',
          textAlign: textAlign,
          paddingLeft: paddingLeft,
          paddingRight: paddingRight,
          ...textPosition2
        }}>
          {parseNewlines(t('slide_text_line2'), isMobile)}
        </div>
        <div style={{
          color: 'white',
          fontSize: fontSizeSub,
          fontFamily: 'customOPPOSans',
          fontWeight: '400',
          wordWrap: 'break-word',
          lineHeight: '1.3',
          width: '100%',
          textAlign: textAlign,
          paddingLeft: paddingLeft,
          paddingRight: paddingRight,
          ...textPosition3
        }}>
          {t('hkust_quant_trading_society')}
        </div>
      </div>
    </div>
  );
}

function HomeScreen() {
  const { t } = useTranslation();
  const isMobile = useMediaQuery({ query: breakpoints.mobile });
  const isEnglish = i18n.language === 'en'; // 如果i18n未在这个文件中引入，需要添加相应的import语句

  const imageStyle = isMobile 
    ? {
        position: 'absolute',
        left: '10px',  // 手机模式下的左右位置调整
        top: isEnglish ? '850px' : '580px',  // 手机模式下的上下位置调整
        width: '500px', // 手机模式下的宽度调整
        minHeight: '400px', // 手机模式下的最小高度调整
        background: `url(${backgroundImage}) no-repeat center center`,
        backgroundSize: 'cover',
        zIndex: -1
      }
    : {
        top: 30,
        width: '700px',
        minHeight: '600px',
        background: `url(${backgroundImage}) no-repeat center center`,
        backgroundSize: 'cover',
        zIndex: -1
      };

  const containerStyle1 = {
    position: 'relative',
    paddingTop: isMobile ? '50px' : '70px',
    paddingBottom: isMobile ? '400px' : '20px',
    marginLeft: isMobile ? '10px' : '100px',
    minHeight: '600px',
    overflow: 'hidden',
  };
  const titleStyle1 = {
    color: '#9A1E23',
    fontSize: isMobile ? '30px' : '64px',
    marginBottom: '10px'
  };
  const titleStyle2 = {
    color: '#003974',
    fontSize: isMobile ? '20px' : '40px',
    marginBottom: '20px'
  };
  const textStyle1 = isMobile ? { fontSize: '20px', display: 'inline', lineHeight: '1', margin: '10px 0' } : { lineHeight: '1.5', margin: '10px 0' };
  const textStyle2 = {
    fontSize: isMobile ? '20px' : '23px',
    color: '#9A1E23',
    display: 'inline',
    lineHeight: isMobile ? '1.2' : '2',
    margin: isMobile ? '10px 0' : '20px 0'
  };
  const textStyle3 = isMobile ? { fontSize: '20px', display: 'inline', lineHeight: '1', margin: '10px 0' } : { lineHeight: '1.5', margin: '10px 0' };
  const textStyle4 = isMobile ? { fontSize: '20px', display: 'inline', lineHeight: '1', margin: '10px 0' } : { lineHeight: '1.5', margin: '10px 0' };

  return (
    <div>
      <Swiper
        style={{ height: '782px' }}
        className="homeSwiper"
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
          delay: 30000,
          disableOnInteraction: false,
        }}
        loop={true}
        pagination={{
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Autoplay]}
      >
        {Array.from({ length: 6 }).map((_, index) => (
          <SwiperSlide key={index}>
            <SlideContent slideIndex={index} isMobile={isMobile} />
          </SwiperSlide>
        ))}
      </Swiper>
      <div style={containerStyle1}>
        <div style={{
          maxWidth: '890px',
          width: 'auto',
          flexGrow: 0,
          padding: '20px',
          color: '#252525',
          fontSize: '22px',
          fontFamily: 'customOPPOSans',
          fontWeight: '400',
          lineHeight: '1.4',
          textAlign: 'left'
        }}>
          <div style={titleStyle1}>
            {t('hkust_quant_trading_association')}
          </div>
          <div style={titleStyle2}>
            {t('hkust_quant_trading_society')}
          </div>
          <div style={{
            marginTop: isMobile ? '30px' : '70px', // Adjusted for mobile
            paddingBottom: '50px'
          }}>
            <span style={textStyle1}>{t('we_are')}</span>
            <span style={textStyle2}>{t('hkust_quant_trading_association2')}</span>
            <span style={textStyle3}>{t('association_description_1')}</span><br /><br />
            <span style={textStyle4}>{t('association_description_2')}</span>
          </div>
        </div>
        {/* Example image styling, customize as needed */}
        <div style={{
          position: 'absolute',
          left: isMobile ? '10px' : 'auto',  // Adjusted for mobile
          right: isMobile ? 'auto' : '0',
          top: isMobile ? '850px' : '30px',  // Adjusted for mobile
          width: isMobile ? '500px' : '700px',
          minHeight: '400px',
          background: 'url("../img/Group12.png") no-repeat center center',
          backgroundSize: 'cover',
          zIndex: -1
          }}>
        </div>
        <div className='image-position' style={imageStyle}></div>
      </div>
    </div>
  );
}

export default HomeScreen;