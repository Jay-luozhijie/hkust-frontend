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

function IntroduceScreen() {
  const { t, i18n } = useTranslation();
  const [active, setActive] = useState(1);
  
  const newsData_2024 = t('newsData_2024', { returnObjects: true });
  const newsData_2025 = t('newsData_2025', { returnObjects: true });

  if (!Array.isArray(newsData_2024) || !Array.isArray(newsData_2025)) {
    console.error('News data is not an array:', { newsData_2024, newsData_2025 });
    return <div>Error loading news data. Please check your translation configuration.</div>;
  }

  const newsData = active === 1 ? newsData_2024 : newsData_2025;

  const textStyle = {
    fontSize: i18n.language === 'en' ? '22px' : undefined,
	lineHeight: i18n.language === 'en' ? '1.4' : undefined // 英文模式下设置较小的字体
  };

  const getPhaseTitle = (zhTitle, enTcTitle) => {
    return i18n.language === 'zh' ? zhTitle : enTcTitle;
  };

  return (
    <div className="introduce">
      <div className="banner">
		<h1
		className="h1"
		style={{
			fontSize: i18n.language === 'en' ? '70px' : '95px' // 根据语言选择字体大小
		}}
		>
		{t('introduceTitle')}
		</h1>
        <p className="label">{t('hkustQuantTradingSociety')}</p>
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
		<div className="title">{t('activityTimelineTitle')}</div>
			<div className="time-line">
				<div onClick={() => setActive(1)} className={active === 1 ? 'time active' : 'time'}>2024</div>
				<div onClick={() => setActive(2)} className={active === 2 ? 'time active' : 'time'}>2025</div>
			</div>
			<div className="example">
				<div className="steps">
				{newsData.map((item) => (
					<div className="step" key={item.id}>
					<div className="step__top">
					<div className="step__title" style={{ fontSize: i18n.language === 'en' ? '18px' : undefined }}>
						{item.title}
					</div>
					<div className="step__small_title" style={{ fontSize: i18n.language === 'en' ? '16px' : undefined }}>
						{item.small}
					</div>
					</div>
					<div className="step__head">
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
						<li key={index}>{detail}</li>
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
					<p className="label">{t('Trading Competition Label')}</p>
				)}
				</div>
				<Row>
				<Col xs={12} md={4}>
        <div className="small-title" style={textStyle}>
          {getPhaseTitle('策略阶段 Strategies', 'Strategies')}
        </div>
        <ul className="ul" style={textStyle}>
          {t('tradingStrategies', { returnObjects: true }).map((strategy, index) => (
            <li key={index} style={textStyle}>{strategy}</li>
          ))}
        </ul>
      </Col>
      <Col xs={12} md={4}>
        <div className="small-title" style={textStyle}>
          {getPhaseTitle('选择阶段 Selection', 'Selection')}
        </div>
        <ul className="ul" style={textStyle}>
          {t('tradingSelection', { returnObjects: true }).map((selection, index) => (
            <li key={index} style={{ ...textStyle, listStyleType: index === 1 ? 'none' : undefined }}>
              {selection}
            </li>
          ))}
        </ul>
      </Col>
      <Col xs={12} md={4}>
        <div className="small-title" style={textStyle}>
          {getPhaseTitle('比赛阶段 Competition', 'Competition')}
        </div>
        <ul className="ul" style={textStyle}>
          {t('tradingCompetition', { returnObjects: true }).map((competition, index) => (
            <li key={index} style={{ ...textStyle, listStyleType: index === 2 || index === 4 ? 'none' : undefined }}>
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
						<li key={index}>{incubation}</li>
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
