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

  const handleButtonClick = () => {
    if (isRegistrationOpen !== null) {
    navigate('sign-up'); 
    }
  };

  const timelineData = [
    {
      label: t('timeline.signup_stage'),
      date: t('timeline.signup_date'),
      contents: [
        {
          title: t('timeline.eligibility_title'),
          description: t('timeline.eligibility_description')
        },
        {
          title: t('timeline.registration_method_title'),
          description: t('timeline.registration_method_description')
        }
      ]
    },
    {
      label: t('timeline.qualification_review_stage'),
      date: t('timeline.review_date'),
      contents: [
        {
          title: t('timeline.sim_account_title'),
          description: t('timeline.sim_account_description')
        },
        {
          title: t('timeline.team_strategy_review_title'),
          description: t('timeline.team_strategy_review_description')
        }
      ]
    },
    {
      label: t('timeline.pre_competition_stage'),
      date: t('timeline.pre_competition_date'),
      contents: [
        {
          title: t('timeline.pre_competition_item_title'),
          description: t('timeline.pre_competition_item_description')
        }
      ]
    },
    {
      label: t('timeline.main_competition_stage'),
      date: t('timeline.main_competition_date'),
      contents: [
        {
          title: t('timeline.pre_competition_item_title'),
          description: t('timeline.main_competition_item_description')
        }
      ]
    },
    {
      label: t('timeline.judging_defense_stage'),
      date: t('timeline.judging_defense_date'),
      contents: [
        {
          title: t('timeline.results_summary_title'),
          description: t('timeline.results_summary_description')
        },
        {
          title: t('timeline.strategy_defense_meeting_title'),
          description: t('timeline.strategy_defense_meeting_description')
        },
        {
          title: t('timeline.judging_title'),
          description: t('timeline.judging_description')
        },
        {
          title: t('timeline.awards_ceremony_title'),
          description: t('timeline.awards_ceremony_description')
        },
      ]
    }
  ];
  
  return (
    <div className='background-container'>
    <div className='trading-competition-page'>
      <div className="background-container"></div>
      <div className={`heading title ${i18n.language === 'en' ? 'title-en' : ''}`}>
        {t('competition.title')}
      </div>
        <div className='competition-content-wrapper'>
          <span className="competition-content">
            {t('competition.intro_part1')}
            <span style={{ color: '#9A1E23', fontWeight: '600' }}>{t('competition.intro_date')}</span>
            {t('competition.intro_part2')}
            <span style={{ color: '#9A1E23', fontWeight: '600' }}>{t('competition.intro_event')}</span>
            {t('competition.intro_part3')}<br />
          </span>
          <span className="competition-content">
            {t('competition.competition_details_part1')}
            {t('competition.competition_details_part2')}
            {t('competition.competition_details_part3')}
          </span>
        </div>
        <button className="button" onClick={handleButtonClick} disabled={isLoading}>
          {isLoading ? t('ui.loading') : (isRegistrationOpen ? t('ui.signup_open') : t('ui.signup_closed'))}
          <div className="triangle"></div>
        </button>
      <div className="timeline-section">
  <div className="heading timeline-heading">{t('ui.timeline_heading')}</div>
  {timelineData.map((item, index) => (
  <div className="timeline-item" key={index}>
    <div className="timeline-line-wrapper">
      <div className="timeline-circle"></div>
      <div className="timeline-line"></div>
    </div>
    <div className="timeline-content-wrapper">
    <div className={`timeline-label ${i18n.language === 'en' ? 'label-en' : ''}`}>
      {item.label}
    </div>
    <div className={`timeline-label date ${i18n.language === 'en' ? 'date-en' : ''}`}>
      {item.date}
    </div>
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
    {t('ui.contact_email')}
  </div>
  <div className="email-address">
  secretary@ustquant.hk
  </div>
</div>
    </div>
    </div>
  );
  
}

export default TradingCompetition;
