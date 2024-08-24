import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useTranslation } from 'react-i18next';
import '../css/TradingCompetition.scss';

function TradingCompetition() {
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  const [isRegistrationOpen, setIsRegistrationOpen] = useState(null); // 初始值设置为 null 表示尚未加载
  const [isLoading, setIsLoading] = useState(true); // 用于跟踪加载状态

  useEffect(() => {
    // axios.get('/api/registration/status')
    //   .then(response => {
    //     setIsRegistrationOpen(response.data.isOpen);
    //     setIsLoading(false); // 数据加载完成后，设置为 false
    //   })
    //   .catch(error => {
    //     console.error('Error fetching registration status:', error);
    //     setIsLoading(false); // 即使发生错误，也停止加载状态
    //   });
    setIsRegistrationOpen(true);
    setIsLoading(false); // 数据加载完成后，设置为 false
  }, []);

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
    if (isRegistrationOpen !== null) {
    navigate('sign-up'); 
    }
  };

  const timelineData = [
    {
      label: "报名阶段",
      date: "2024年8月27日 - 2024年9月22日",
      contents: [
        {
          title: "参赛资格",
          description: "比赛面向香港科技大学的在校生和毕业生，也欢迎其他港校、其他地区高校的学生和校友报名参赛"
        },
        {
          title: "报名方式",
          description: "在港科宽图官网提交团队信息"
        }
      ]
    },
    {
      label: "资格审核与比赛注册阶段",
      date: "团队报名时刻 - 2024年9月22日",
      contents: [
        {
          title: "模拟账户注册",
          description: "填写报名问卷链接，获得正式比赛的模拟账户"
        },
        {
          title: "团队、策略审核",
          description: "根据一定的规则审核团队成员情况，可能有邮件联络"
        }
      ]
    },
    {
      label: "赛前准备阶段",
      date: "2024年9月22日 - 2024年9月30日",
      contents: [
        {
          title: "事项",
          description: "分配模拟交易账户；选择团队的顾问；举办交易沙龙"
        }
      ]
    },
    {
      label: "正式比赛阶段",
      date: "2024年10月1日 - 2024年12月31日",
      contents: [
        {
          title: "事项",
          description: "选手采用正式比赛的模拟交易账户进行交易"
        }
      ]
    },
    {
      label: "评审与答辩阶段",
      date: "2025年1月1日 - 2025年1月14日",
      contents: [
        {
          title: "成果总结",
          description: "宽图将整理和校对所有团队的数据，形成最终结果"
        },
        {
          title: "策略答辩会议",
          description: "由宽图的荣誉技术顾问出面担任评委，表现较好的参赛团队选出代表进行答辩活动"
        },
        {
          title: "评审",
          description: "评委依据交易策略的稳定性、收益率、风险控制和未来表现预期等指标进行评审，决定最终排名"
        },
        {
          title: "颁奖典礼",
          description: "公布比赛结果，颁发奖项"
        },
      ]
    }
  ];
  
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
      <button
      className="button"
      onClick={handleButtonClick}
      disabled={isLoading} // 在加载中时禁用按钮
    >
      {isLoading ? '加载中……' : (isRegistrationOpen ? '开始报名' : '暂未开放')}
      <div className="triangle"></div>
    </button>
      <div className="timeline-section">
  <div className="heading timeline-heading">时间线</div>
  {timelineData.map((item, index) => (
  <div className="timeline-item" key={index}>
    <div className="timeline-line-wrapper">
      <div className="timeline-circle"></div>
      <div className="timeline-line"></div>
    </div>
    <div className="timeline-content-wrapper">
      <div className="timeline-label">{item.label}</div>
      <div className="timeline-label date">{item.date}</div>
      <div className="timeline-content">
        {item.contents.map((content, idx) => (
          <div className="content-flex" key={idx}>
            <div className={`sub-content-timeline ${idx === 0 ? 'first' : ''}`}>
            {idx !== 0 && <div className={`content-dashed-line ${idx === 0 ? '' : 'continuation-line-space'}`}></div>}
              <div className="content-circle"></div>
              {idx !== item.contents.length - 1 && <div className="content-dashed-line"></div>}
            </div>
            <div className='sub-content'>
              {idx !== 0 && <div className="continuation-content-space"></div>}
              <div className="content-title">{content.title}</div>
              <div className="content-description">{content.description}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
))}
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
