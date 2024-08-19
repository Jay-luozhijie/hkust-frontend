import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import '../css/TradingCompetition.scss';

function TradingCompetition() {
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();

  const getTranslatedText = (zhText, enText, tcText) => {
    if (i18n.language === 'zh') {
      return zhText;
    } else if (i18n.language === 'tc') {
      return tcText;
    } else {
      return enText;
    }
  };

  const handleButtonClick = () => {
    navigate('sign-up'); 
  };

  return (
    <div className='background-container'>
    <div className='trading-competition-page'>
      <div className="background-container"></div>
      <div className="heading title">港科宽图交易大赛</div>
      <div className='competition-content-wrapper'>
      <span className="competition-content">
        港科宽图量化交易协会将在今年
        <span style={{ color: '#9A1E23', fontWeight: '600' }}>10月1日</span>
        正式举办首届
        <span style={{ color: '#9A1E23', fontWeight: '600' }}>模拟量化交易大赛</span>。
        比赛面向香港科技大学的在校生和毕业生，也欢迎其他港校、其他地区高校的学生和校友报名参赛。<br />
      </span>
      <span className="competition-content">
        模拟交易比赛分为为期两周的初赛和为期两个半月的复赛，只有复赛成绩会作为最终成绩的参考。
        在老虎证券的大力支持下，参赛团队将得到机会在规定范围内自由配置资产，包括但不限于股票、商品、ETF和衍生品等市场。
        参赛团队可以自由选择不同的量化交易技术和量化策略，展现自己独特的投资理念。
      </span>
      </div>
      <button className="button" onClick={handleButtonClick}>
      开始报名
      <div className="triangle"></div>
    </button>
      <div className="timeline-section">
  <div className="heading timeline-heading">时间线</div>
  <div className="timeline-item">
    <div className="timeline-line-wrapper">
      <div className="timeline-circle"></div>
      <div className="timeline-line"></div>
    </div>
    <div className="timeline-content-wrapper">
      <div className="timeline-label">报名阶段</div>
      <div className="timeline-label date">2024年8月19日 -2024年9月15日</div>
      <div className="timeline-content">
        <div className="content-flex">
          <div className='sub-content-timeline first'>
            <div className="content-circle"></div>
            <div className="content-dashed-line"></div>
          </div>
          <div className='sub-content'>
            <div className="content-title">
              参赛资格
            </div>
            <div className="content-description">
            比赛面向香港科技大学的在校生和毕业生，也欢迎其他港校、其他地区高校的学生和校友报名参赛
            </div>
        </div>
        </div>
        <div className="content-flex">
          <div className='content-timeline'>
            <div className="content-circle"></div>
          </div>
          <div className='sub-content' style={{ position: 'relative', top: '-10px' }}>
            <div className="content-title">
            报名方式
            </div>
            <div className="content-description">
            在官网提交团队信息
            </div>
        </div>
        </div>
      </div>
    </div>
  </div>
  <div className="timeline-item">
    <div className="timeline-line-wrapper">
      <div className="timeline-circle"></div>
      <div className="timeline-line"></div>
    </div>
    <div className="timeline-content-wrapper">
      <div className="timeline-label">资格审查阶段</div>
      <div className="timeline-label date">开始报名：2024年9月20日</div>
      <div className="timeline-content">
        <div className="content-flex">
          <div className='sub-content-timeline first'>
            <div className="content-circle"></div>
          </div>
          <div className='sub-content'>
            <div className="content-title">
            团队、策略审核
            </div>
            <div className="content-description">
            根据一定的规则审核团队成员情况，可能有邮件联络
            </div>
        </div>
        </div>
      </div>
    </div>
  </div>
  <div className="timeline-item">
    <div className="timeline-line-wrapper">
      <div className="timeline-circle"></div>
      <div className="timeline-line"></div>
    </div>
    <div className="timeline-content-wrapper">
      <div className="timeline-label">赛前准备阶段</div>
      <div className="timeline-label date">2024年9月20日 - 2024年9月30日</div>
      <div className="timeline-content">
        <div className="content-flex">
          <div className='sub-content-timeline first'>
            <div className="content-circle"></div>
          </div>
          <div className='sub-content'>
            <div className="content-title">
            内容
            </div>
            <div className="content-description">
            分配模拟交易账户；选择团队的顾问；举办交易沙龙
            </div>
        </div>
        </div>
      </div>
    </div>
  </div>
  <div className="timeline-item">
    <div className="timeline-line-wrapper">
      <div className="timeline-circle"></div>
      <div className="timeline-line"></div>
    </div>
    <div className="timeline-content-wrapper">
      <div className="timeline-label">初赛阶段</div>
      <div className="timeline-label date">2024年10月1日 - 2024年10月13日</div>
      <div className="timeline-content">
        <div className="content-flex">
          <div className='sub-content-timeline first'>
            <div className="content-circle"></div>
          </div>
          <div className='sub-content'>
            <div className="content-title">
            内容
            </div>
            <div className="content-description">
            学习使用提供的模拟交易账户进行交易，账户净值有变化即可进入复赛
            </div>
        </div>
        </div>
      </div>
    </div>
  </div>
  <div className="timeline-item">
    <div className="timeline-line-wrapper">
      <div className="timeline-circle"></div>
      <div className="timeline-line"></div>
    </div>
    <div className="timeline-content-wrapper">
      <div className="timeline-label">复赛阶段</div>
      <div className="timeline-label date">2024年10月13日 - 2024年12月31日</div>
      <div className="timeline-content">
        <div className="content-flex">
          <div className='sub-content-timeline first'>
            <div className="content-circle"></div>
          </div>
          <div className='sub-content'>
            <div className="content-title">
            内容
            </div>
            <div className="content-description">
            最终比赛成绩参考的只有复赛成绩
            </div>
        </div>
        </div>
      </div>
    </div>
  </div>
  <div className="timeline-item">
    <div className="timeline-line-wrapper">
      <div className="timeline-circle"></div>
      <div className="timeline-line"></div>
    </div>
    <div className="timeline-content-wrapper">
      <div className="timeline-label">评审与答辩阶段</div>
      <div className="timeline-label date">2025年1月1日 - 2025年1月14日</div>
      <div className="timeline-content">
        <div className="content-flex">
          <div className='sub-content-timeline first'>
            <div className="content-circle"></div>
          </div>
          <div className='sub-content'>
            <div className="content-title">
            内容
            </div>
            <div className="content-description">
            成果总结、策略答辩会议、评审与颁奖
            </div>
        </div>
        </div>
      </div>
    </div>
  </div>
  <div className="timeline-item">
    <div className="timeline-line-wrapper">
      <div className="timeline-circle"></div>
    </div>
    <div className="timeline-content-wrapper">
      <div className="timeline-content">
        <div className="content-flex">
          <div className='sub-content'>
            <div className="content-title">
            </div>
            <div className="content-description">
            </div>
        </div>
        </div>
      </div>
    </div>
  </div>

</div>
<div className='contact-information'>
  <div className="contact-email">
    咨询邮箱
  </div>
  <div className="email-address">
  lisiyuansven@foxmail.com
  </div>
</div>
    </div>
    </div>
  );
  
}

export default TradingCompetition;
