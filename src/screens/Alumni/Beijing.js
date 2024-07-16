import React from 'react';
import { useTranslation } from 'react-i18next';
import Background from '../../img/AlumniPageBackground.png';
import BeiJingBG from '../../img/Beijing.jpg';

const Beijing = () => {
  const { t, i18n } = useTranslation();

  const getTranslatedText = (translations) => {
    const lang = i18n.language;
    return translations[lang] || translations.en;
  };

  return (
    <div className="beijing-container">
      <div className="beijing-background-layer"></div>
      <div className="beijing-background-image"></div>
      <div className="beijing-content">
        <img className="beijing-image" src={BeiJingBG} alt="Scenic view of Beijing" />
        <div className="beijing-text-content">
          <div className={`beijing-title ${i18n.language === 'en' ? 'no-wrap' : ''}`}>
            {getTranslatedText({
              zh: '北京校友会',
              en: 'Beijing Alumni Association',
              tc: '北京校友會'
            })}
          </div>
          <div className="beijing-paragraph">
            {getTranslatedText({
              zh: '北京校友会成立于2024年7月1日, 现任主要负责人为李思远先生,',
              en: (
                <>
                  The Beijing Alumni Association was established on July 1, 2024,
                  <br />
                  currently headed by Mr. Li Siyuan,
                </>
              ),
              tc: '北京校友會成立於2024年7月1日，現任主要負責人為李思遠先生,'
            })}
          </div>
          <div className="beijing-paragraph">
            {getTranslatedText({
              zh: '联系邮箱为lisiyuansven@foxmail.com.',
              en: 'Contact email is lisiyuansven@foxmail.com.',
              tc: '聯繫郵箱為lisiyuansven@foxmail.com.'
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Beijing;
