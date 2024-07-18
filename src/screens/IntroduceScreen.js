import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import "../css/introduce.scss";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Group85 from '../img/Group85.png';
import Group75 from '../img/Group75.png';
import Group31 from '../img/Group31.png';
import Vector from '../img/Vector.png';
import { useMediaQuery } from 'react-responsive';
import breakpoints from '../config/breakpoints';
import backgroundImg from '../img/Group26.png';

function IntroduceScreen() {
  const { t, i18n } = useTranslation();
  const [active, setActive] = useState(1);
  
  const newsData_2024 = t('newsData_2024', { returnObjects: true });
  const newsData_2025 = t('newsData_2025', { returnObjects: true });
  const isMobile = useMediaQuery({ query: breakpoints.mobile });
  // Mobile style adjustments
  const mobileStyle = isMobile ? { width: 'calc(100% + 40px)', marginLeft: '-20px' } : {};

  function getStepTextStyle(isMobile, language) {
	if (isMobile) {
	  let baseSize = language === 'en' ? '22px' : '16px'; // 移动设备上的字体大小
	  let smallSize = language === 'en' ? '18px' : '14px'; // 移动设备上的小字体大小
	  let padding = '15px'; // 移动设备上的内边距
  
	  return {
		base: { fontSize: baseSize, padding },
		small: { fontSize: smallSize, padding }
	  };
	}
  
	// 不是移动设备时返回空对象，表示不修改样式
	return {
	  base: {},
	  small: {}
	};
  }

  const styles = getStepTextStyle(isMobile, i18n.language);
  const mobileShiftStyle = getMobileShiftStyle(isMobile);
  const fontSize = getTitleFontSize(isMobile, i18n.language);
  const mobileTextShiftStyle = isMobile ? { marginLeft: '-20px' } : {}; // 在手机上向左移动20px

  if (!Array.isArray(newsData_2024) || !Array.isArray(newsData_2025)) {
    console.error('News data is not an array:', { newsData_2024, newsData_2025 });
    return <div>Error loading news data. Please check your translation configuration.</div>;
  }

  const newsData = active === 1 ? newsData_2024 : newsData_2025;

  const textStyle = {
    fontSize: i18n.language === 'en' ? '22px' : undefined,
	lineHeight: i18n.language === 'en' ? '1.4' : undefined // 英文模式下设置较小的字体
  };

  function getMobileShiftStyle(isMobile) {
	if (isMobile) {
	  return {
		transform: 'translateX(-100px)', // 向左移动20像素
		transition: 'transform 0.3s ease' // 平滑过渡效果
	  };
	}
	return {}; // 非移动设备不应用变换
  }
    
  function getTitleFontSize(isMobile, language) {
	if (isMobile) {
	  return language === 'en' ? '28px' : '32px'; // 移动设备上较小的字体大小
	}
	return language === 'en' ? '70px' : '95px'; // 电脑设备上的原始大小
  }
  
	// 根据设备调整图片大小和位置
	const backgroundStyle = {
		position: 'absolute',
		top: '0',
		left: isMobile ? '47%' : '60%', // 手机上向右移动5%，电脑上向右移动15%
		width: isMobile ? '53%' : '40%', // 手机上使用90%宽度，电脑上使用80%宽度
		height: 'auto',
		zIndex: '-1'
		};

		function getPhaseTitle(simplifiedChineseTitle, traditionalChineseTitle, englishTitle) {
			switch (i18n.language) {
			  case 'zh':
				return simplifiedChineseTitle;
			  case 'tc':
				return traditionalChineseTitle;
			  case 'en':
			  default:
				return englishTitle;
			}
		  }
		  
  return (
    <div className="introduce">
      <div className="banner" style={{ position: 'relative', overflow: 'hidden' }}>
	  <img src={backgroundImg} alt="Background" style={backgroundStyle} />
		<h1 className="h1" style={{ fontSize }}>
			{t('introduceTitle')}
		</h1>
			<p className="label" style={ {fontSize: isMobile ? '15px' : undefined}}>{t('hkustQuantTradingSociety')}</p>
			<p className="info">{t('empowerFutureQuantLeaders')}</p>
      </div>
      <div className="container-box">
        <div className="box">
          <div className="container-item">
            <div className="title">{t('missionTitle')}</div>
            <img src={Group85} className="line-img"/>
            <img src={Group75} className="big-img"/>
            <p className="text">{t('missionText')}</p>
          </div>
          <div className="container-item">
            <div className="title">{t('visionTitle')}</div>
            <img src={Group85} className="line-img"/>
            <img src={Vector} className="big-img"/>
            <p className="text">{t('visionText')}</p>
          </div>
          <div className="container-item">
            <div className="title">{t('cultureTitle')}</div>
            <img src={Group85} className="line-img"/>
            <img src={Group31} className="big-img"/>
            <p className="text">{t('cultureText')}</p>
          </div>
        </div>
      </div>
	  <div className="active-box">

		<div className="title" style={mobileShiftStyle}>
			{t('activityTimelineTitle')}
		</div>
		<div className="time-line" style={mobileTextShiftStyle}>
			<div onClick={() => setActive(2)} className={active === 2 ? 'time active' : 'time'}>
			2024
			</div>
			<div onClick={() => setActive(1)} className={active === 1 ? 'time active' : 'time'}>
			2025
			</div>
		</div>
		<div className="example">
			<div className="steps">
			{newsData.map((item) => (
				<div className="step" key={item.id}>
					<div className="step__head">
						<div className="step__top" style={styles.base}>
							<div className="step__title" style={styles.base}>
							{item.title}
							</div>
							<div className="step__small_title" style={styles.small}>
							{item.small}
							</div>
						</div>
						<div className="step__line"></div>
						<div className={item.title ? 'step__icon_active step__icon' : 'step__icon'}></div>
					</div>
					<div className="step__bottom">
						<div className="step__description">{item.time}</div>
					</div>

				</div>
			))}
			</div>
		</div>
		</div>
	  <div className="services">
		<div className="title">{t('mainServicesTitle')}</div>
			<Row>
				<Col xs={12}>
					<div className='services-item'>
						<div className="big-title">
						<p className="title"
							style={{ 
							marginBottom: i18n.language === 'en' ? '70px' : undefined // 在英文情况下空出一部分
						}}>
							{t('industryConnectionTitle')}
						</p>
						{i18n.language !== 'en' && (
							<p className="label">{t('industryConnectionLabel')}</p>
						)}
						</div>
						<Row>
						<Col xs={12}>
							<ul className="ul">
							{t('industryConnectionDetails', { returnObjects: true }).map((detail, index) => (
							<li key={index} style={{ listStyleType: i18n.language === 'en' && (index === 1 || index === 2 || index === 4 || index === 6) ? 'none' : undefined }}>
								{detail}
							</li>
							))}
							</ul>
						</Col>
						</Row>
					</div>
				</Col>
				<Col xs={12}>
					<div className='services-item'>
						<div className="big-title">
						<p 
							className="title" 
							style={{ 
							marginBottom: i18n.language === 'en' ? '70px' : undefined // 在英文情况下空出一部分
							}}
						>
							{t('tradingCompetitionTitle')}
						</p>
						{i18n.language !== 'en' && (
							<p className="label">{t('Trading Competition')}</p>
						)}
						</div>
						<Row>
						<Col xs={12} md={4}>
						<div className="small-title" style={textStyle}>
							{getPhaseTitle('策略阶段 Strategies', '策略階段 Strategies', 'Strategies')}
						</div>
						<ul className="ul" style={textStyle}>
							{t('tradingStrategies', { returnObjects: true }).map((strategy, index) => (
							<li key={index} style={{...textStyle, listStyleType: i18n.language === 'en' && index === 3 ? 'none' : undefined }}>
								{strategy}
							</li>
							))}
						</ul>
						</Col>
						<Col xs={12} md={4}>
						<div className="small-title" style={textStyle}>
							{getPhaseTitle('选择阶段 Selection', '選擇階段 Selection', 'Selection')}
						</div>
						<ul className="ul" style={textStyle}>
							{t('tradingSelection', { returnObjects: true }).map((selection, index) => (
							<li key={index} style={{...textStyle, listStyleType: i18n.language === 'en' && (index === 1 || index === 2) ? 'none' : undefined }}>
								{selection}
							</li>
							))}
						</ul>
						</Col>
						<Col xs={12} md={4}>
						<div className="small-title" style={textStyle}>
							{getPhaseTitle('比赛阶段 Competition', '比賽階段 Competition', 'Competition')}
						</div>
						<ul className="ul" style={textStyle}>
							{t('tradingCompetition', { returnObjects: true }).map((competition, index) => (
							<li key={index} style={{...textStyle, listStyleType: i18n.language === 'en' && (index === 2 || index === 4) ? 'none' : undefined }}>
								{competition}
							</li>
							))}
						</ul>
						</Col>

						</Row>
					</div>
				</Col>
				<Col xs={12}>
				<div className='services-item'>
					<div className="big-title">
					<p 
						className="title" 
						style={{ 
						marginBottom: i18n.language === 'en' ? '70px' : undefined // 在英文情况下空出一部分
						}}
					>
						{t('quantFundIncubationTitle')}
					</p>
					{ i18n.language !== 'en' && (
						<p className="label">{t('quantFundIncubationLabel')}</p>
					)}
					</div>
					<Row>
					<Col xs={12}>
						<ul className="ul">
						{t('quantFundIncubationDetails', { returnObjects: true }).map((incubation, index) => (
							<li key={index} style={{listStyleType: index === 1 ? 'none' : undefined}}>{incubation}</li>
						))}
						</ul>
					</Col>
					</Row>
				</div>
				</Col>
			</Row>
		</div>
    </div>
  );
}

export default IntroduceScreen;
