import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Autoplay } from 'swiper/modules';
import backgroundImage from '../img/Group12.png';
import '../css/homeScreen.css';
import { useTranslation } from 'react-i18next';
import { useMediaQuery } from 'react-responsive';
import breakpoints from '../config/breakpoints';
import i18n from 'i18next';

import slide1ScreenImage from '../img/homeslides/slide1.png';
import slide2ScreenImage from '../img/homeslides/slide2.png';
import slide3ScreenImage from '../img/homeslides/slide3.png';
import slide4ScreenImage from '../img/homeslides/slide4.png';
import slide5ScreenImage from '../img/homeslides/slide5.png';
import slide6ScreenImage from '../img/homeslides/slide6.png';

const slideContent1 = (t, isMobile) => {
  const isEnglish = i18n.language === 'en';
  const fontSizeMain = isMobile ? '22px' : (isEnglish ? '50px' : '50px');  // 英文模式下调整主字号
  const fontSizeSub = isMobile ? '18px' : (isEnglish ? '30px' : '30px');  // 英文模式下调整子字号

  // 调整每个文本框的位置
  const textPosition1 = isMobile ? { right: '20px', top: isEnglish ? '80px' : '80px' } : { left: '142px', top: '70px' };
  const textPosition2 = isMobile ? { right: '20px', top: isEnglish ? '140px' : '120px' } : { left: '142px', top: '140px' };
  const textPosition3 = isMobile ? { right: '20px', top: isEnglish ? '210px' : '160px' } : { left: '142px', top: '220px' };
  const textAlign = isMobile ? 'right' : 'left';
  
  return (
    <div>
      <img className="layer1" src={slide1ScreenImage} alt={t('hkust_background')} />
      <div className="layer2 swiper-cover"></div>
      <div className="layer3">
        <div style={{
          position: 'absolute',
          color: 'white',
          fontSize: fontSizeMain,
          fontFamily: 'OPPO Sans',
          fontWeight: '400',
          wordWrap: 'break-word',
          lineHeight: '1.3',
          textAlign: textAlign,
          ...textPosition1
        }}>
          {t('slide_text_line1')}
        </div>
        <div style={{
          position: 'absolute',
          color: 'white',
          fontSize: fontSizeMain,
          fontFamily: 'OPPO Sans',
          fontWeight: '400',
          wordWrap: 'break-word',
          lineHeight: '1.3',
          textAlign: textAlign,
          ...textPosition2
        }}>
          {t('slide_text_line2')}
        </div>
        <div style={{
          position: 'absolute',
          color: 'white',
          fontSize: fontSizeSub,
          fontFamily: 'OPPO Sans',
          fontWeight: '400',
          wordWrap: 'break-word',
          lineHeight: '1.3',
          textAlign: textAlign,
          ...textPosition3
        }}>
          {t('hkust_quant_trading_society')}
        </div>
      </div>
    </div>
  );
};

const slideContent2 = (t, isMobile) => {
  const isEnglish = i18n.language === 'en';
  const fontSizeMain = isMobile ? '22px' : (isEnglish ? '50px' : '50px');  // 英文模式下调整主字号
  const fontSizeSub = isMobile ? '18px' : (isEnglish ? '30px' : '30px');  // 英文模式下调整子字号

  // 调整每个文本框的位置
  const textPosition1 = isMobile ? { right: '20px', top: isEnglish ? '80px' : '80px' } : { left: '142px', top: '70px' };
  const textPosition2 = isMobile ? { right: '20px', top: isEnglish ? '140px' : '120px' } : { left: '142px', top: '140px' };
  const textPosition3 = isMobile ? { right: '20px', top: isEnglish ? '210px' : '160px' } : { left: '142px', top: '220px' };
  const textAlign = isMobile ? 'right' : 'left';
  
  return (
    <div>
      <img className="layer1" src={slide2ScreenImage} alt={t('hkust_background')} />
      <div className="layer2 swiper-cover"></div>
      <div className="layer3">
        <div style={{
          position: 'absolute',
          color: 'white',
          fontSize: fontSizeMain,
          fontFamily: 'OPPO Sans',
          fontWeight: '400',
          wordWrap: 'break-word',
          lineHeight: '1.3',
          textAlign: textAlign,
          ...textPosition1
        }}>
          {t('slide_text_line1')}
        </div>
        <div style={{
          position: 'absolute',
          color: 'white',
          fontSize: fontSizeMain,
          fontFamily: 'OPPO Sans',
          fontWeight: '400',
          wordWrap: 'break-word',
          lineHeight: '1.3',
          textAlign: textAlign,
          ...textPosition2
        }}>
          {t('slide_text_line2')}
        </div>
        <div style={{
          position: 'absolute',
          color: 'white',
          fontSize: fontSizeSub,
          fontFamily: 'OPPO Sans',
          fontWeight: '400',
          wordWrap: 'break-word',
          lineHeight: '1.3',
          textAlign: textAlign,
          ...textPosition3
        }}>
          {t('hkust_quant_trading_society')}
        </div>
      </div>
    </div>
  );
};

const slideContent3 = (t, isMobile) => {
  const isEnglish = i18n.language === 'en';
  const fontSizeMain = isMobile ? '22px' : (isEnglish ? '50px' : '50px');  // 英文模式下调整主字号
  const fontSizeSub = isMobile ? '18px' : (isEnglish ? '30px' : '30px');  // 英文模式下调整子字号

  // 调整每个文本框的位置
  const textPosition1 = isMobile ? { right: '20px', top: isEnglish ? '80px' : '80px' } : { left: '142px', top: '70px' };
  const textPosition2 = isMobile ? { right: '20px', top: isEnglish ? '140px' : '120px' } : { left: '142px', top: '140px' };
  const textPosition3 = isMobile ? { right: '20px', top: isEnglish ? '210px' : '160px' } : { left: '142px', top: '220px' };
  const textAlign = isMobile ? 'right' : 'left';
  
  return (
    <div>
      <img className="layer1" src={slide3ScreenImage} alt={t('hkust_background')} />
      <div className="layer2 swiper-cover"></div>
      <div className="layer3">
        <div style={{
          position: 'absolute',
          color: 'white',
          fontSize: fontSizeMain,
          fontFamily: 'OPPO Sans',
          fontWeight: '400',
          wordWrap: 'break-word',
          lineHeight: '1.3',
          textAlign: textAlign,
          ...textPosition1
        }}>
          {t('slide_text_line1')}
        </div>
        <div style={{
          position: 'absolute',
          color: 'white',
          fontSize: fontSizeMain,
          fontFamily: 'OPPO Sans',
          fontWeight: '400',
          wordWrap: 'break-word',
          lineHeight: '1.3',
          textAlign: textAlign,
          ...textPosition2
        }}>
          {t('slide_text_line2')}
        </div>
        <div style={{
          position: 'absolute',
          color: 'white',
          fontSize: fontSizeSub,
          fontFamily: 'OPPO Sans',
          fontWeight: '400',
          wordWrap: 'break-word',
          lineHeight: '1.3',
          textAlign: textAlign,
          ...textPosition3
        }}>
          {t('hkust_quant_trading_society')}
        </div>
      </div>
    </div>
  );
};

const slideContent4 = (t, isMobile) => {
  const isEnglish = i18n.language === 'en';
  const fontSizeMain = isMobile ? '22px' : (isEnglish ? '50px' : '50px');  // 英文模式下调整主字号
  const fontSizeSub = isMobile ? '18px' : (isEnglish ? '30px' : '30px');  // 英文模式下调整子字号

  // 调整每个文本框的位置
  const textPosition1 = isMobile ? { right: '20px', top: isEnglish ? '80px' : '80px' } : { left: '142px', top: '70px' };
  const textPosition2 = isMobile ? { right: '20px', top: isEnglish ? '140px' : '120px' } : { left: '142px', top: '140px' };
  const textPosition3 = isMobile ? { right: '20px', top: isEnglish ? '210px' : '160px' } : { left: '142px', top: '220px' };
  const textAlign = isMobile ? 'right' : 'left';
  
  return (
    <div>
      <img className="layer1" src={slide4ScreenImage} alt={t('hkust_background')} />
      <div className="layer2 swiper-cover"></div>
      <div className="layer3">
        <div style={{
          position: 'absolute',
          color: 'white',
          fontSize: fontSizeMain,
          fontFamily: 'OPPO Sans',
          fontWeight: '400',
          wordWrap: 'break-word',
          lineHeight: '1.3',
          textAlign: textAlign,
          ...textPosition1
        }}>
          {t('slide_text_line1')}
        </div>
        <div style={{
          position: 'absolute',
          color: 'white',
          fontSize: fontSizeMain,
          fontFamily: 'OPPO Sans',
          fontWeight: '400',
          wordWrap: 'break-word',
          lineHeight: '1.3',
          textAlign: textAlign,
          ...textPosition2
        }}>
          {t('slide_text_line2')}
        </div>
        <div style={{
          position: 'absolute',
          color: 'white',
          fontSize: fontSizeSub,
          fontFamily: 'OPPO Sans',
          fontWeight: '400',
          wordWrap: 'break-word',
          lineHeight: '1.3',
          textAlign: textAlign,
          ...textPosition3
        }}>
          {t('hkust_quant_trading_society')}
        </div>
      </div>
    </div>
  );
};

const slideContent5 = (t, isMobile) => {
  const isEnglish = i18n.language === 'en';
  const fontSizeMain = isMobile ? '22px' : (isEnglish ? '50px' : '50px');  // 英文模式下调整主字号
  const fontSizeSub = isMobile ? '18px' : (isEnglish ? '30px' : '30px');  // 英文模式下调整子字号

  // 调整每个文本框的位置
  const textPosition1 = isMobile ? { right: '20px', top: isEnglish ? '80px' : '80px' } : { left: '142px', top: '70px' };
  const textPosition2 = isMobile ? { right: '20px', top: isEnglish ? '140px' : '120px' } : { left: '142px', top: '140px' };
  const textPosition3 = isMobile ? { right: '20px', top: isEnglish ? '210px' : '160px' } : { left: '142px', top: '220px' };
  const textAlign = isMobile ? 'right' : 'left';
  
  return (
    <div>
      <img className="layer1" src={slide5ScreenImage} alt={t('hkust_background')} />
      <div className="layer2 swiper-cover"></div>
      <div className="layer3">
        <div style={{
          position: 'absolute',
          color: 'white',
          fontSize: fontSizeMain,
          fontFamily: 'OPPO Sans',
          fontWeight: '400',
          wordWrap: 'break-word',
          lineHeight: '1.3',
          textAlign: textAlign,
          ...textPosition1
        }}>
          {t('slide_text_line1')}
        </div>
        <div style={{
          position: 'absolute',
          color: 'white',
          fontSize: fontSizeMain,
          fontFamily: 'OPPO Sans',
          fontWeight: '400',
          wordWrap: 'break-word',
          lineHeight: '1.3',
          textAlign: textAlign,
          ...textPosition2
        }}>
          {t('slide_text_line2')}
        </div>
        <div style={{
          position: 'absolute',
          color: 'white',
          fontSize: fontSizeSub,
          fontFamily: 'OPPO Sans',
          fontWeight: '400',
          wordWrap: 'break-word',
          lineHeight: '1.3',
          textAlign: textAlign,
          ...textPosition3
        }}>
          {t('hkust_quant_trading_society')}
        </div>
      </div>
    </div>
  );
};

const slideContent6 = (t, isMobile) => {
  const isEnglish = i18n.language === 'en';
  const fontSizeMain = isMobile ? '22px' : (isEnglish ? '50px' : '50px');  // 英文模式下调整主字号
  const fontSizeSub = isMobile ? '18px' : (isEnglish ? '30px' : '30px');  // 英文模式下调整子字号

  // 调整每个文本框的位置
  const textPosition1 = isMobile ? { right: '20px', top: isEnglish ? '80px' : '80px' } : { left: '142px', top: '70px' };
  const textPosition2 = isMobile ? { right: '20px', top: isEnglish ? '140px' : '120px' } : { left: '142px', top: '140px' };
  const textPosition3 = isMobile ? { right: '20px', top: isEnglish ? '210px' : '160px' } : { left: '142px', top: '220px' };
  const textAlign = isMobile ? 'right' : 'left';
  
  return (
    <div>
      <img className="layer1" src={slide6ScreenImage} alt={t('hkust_background')} />
      <div className="layer2 swiper-cover"></div>
      <div className="layer3">
        <div style={{
          position: 'absolute',
          color: 'white',
          fontSize: fontSizeMain,
          fontFamily: 'OPPO Sans',
          fontWeight: '400',
          wordWrap: 'break-word',
          lineHeight: '1.3',
          textAlign: textAlign,
          ...textPosition1
        }}>
          {t('slide_text_line1')}
        </div>
        <div style={{
          position: 'absolute',
          color: 'white',
          fontSize: fontSizeMain,
          fontFamily: 'OPPO Sans',
          fontWeight: '400',
          wordWrap: 'break-word',
          lineHeight: '1.3',
          textAlign: textAlign,
          ...textPosition2
        }}>
          {t('slide_text_line2')}
        </div>
        <div style={{
          position: 'absolute',
          color: 'white',
          fontSize: fontSizeSub,
          fontFamily: 'OPPO Sans',
          fontWeight: '400',
          wordWrap: 'break-word',
          lineHeight: '1.3',
          textAlign: textAlign,
          ...textPosition3
        }}>
          {t('hkust_quant_trading_society')}
        </div>
      </div>
    </div>
  );
};

function HomeScreen() {
  const { t } = useTranslation();
  const isMobile = useMediaQuery({ query: breakpoints.mobile });
  const isDesktop = useMediaQuery({ query: breakpoints.desktop });
  const isEnglish = i18n.language === 'en';
  const containerStyle1 = {
    position: 'relative',
    paddingTop: isMobile ? '50px' : '70px', // 响应式 paddingTop
    paddingBottom: isMobile ? '400px' : '20px',
    marginLeft: isMobile ? '10px' : '100px', // 响应式 marginLeft
    minHeight: '600px',
    overflow: 'hidden',
  };
  
  const containerStyle2 = {
    marginTop: isMobile ? '30px' : '70px', // 手机模式下的marginTop调整
    paddingBottom: '50px'
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
  
  const titleStyle1 = {
    color: '#9A1E23',
    fontSize: isMobile ? '30px' : '64px', // 手机模式下的字号调整
    marginBottom: '10px'
  };
  
  const titleStyle2 = {
    color: '#003974',
    fontSize: isMobile ? '20px' : '40px', // 手机模式下的字号调整
    marginBottom: '20px'
  };
  
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
      position: 'absolute',
      right: 0,
      top: 30,
      width: '700px',
      minHeight: '600px',
      background: `url(${backgroundImage}) no-repeat center center`,
      backgroundSize: 'cover',
      zIndex: -1
    };

  return (
    <div>
      <Swiper
        style={{ height: '782px' }}
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

          delay: 30000,
          disableOnInteraction: false,
        }}
        loop={true}
        pagination={{
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Autoplay]}
      >
        <SwiperSlide>{slideContent1(t, isMobile)}</SwiperSlide>
        <SwiperSlide>{slideContent2(t, isMobile)}</SwiperSlide>
        <SwiperSlide>{slideContent3(t, isMobile)}</SwiperSlide>
        <SwiperSlide>{slideContent4(t, isMobile)}</SwiperSlide>
        <SwiperSlide>{slideContent5(t, isMobile)}</SwiperSlide>
        <SwiperSlide>{slideContent6(t, isMobile)}</SwiperSlide>
      </Swiper>
      <div style={containerStyle1}>
        <div style={{
          maxWidth: '890px',
          width: 'auto',
          flexGrow: 0,
          padding: '20px',
          color: '#252525',
          fontSize: '22px',
          fontFamily: 'OPPO Sans',
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
          <div style={containerStyle2}>
            <span style={textStyle1}>{t('we_are')}</span>
            <span style={textStyle2}>{t('hkust_quant_trading_association2')}</span>
            <span style={textStyle3}>{t('association_description_1')}</span><br /><br />
            <span style={textStyle4}>{t('association_description_2')}</span>
          </div>
        </div>
        <div style={imageStyle}></div>
      </div>
    </div>
  );
}

export default HomeScreen;
