import React from 'react';
import { useTranslation } from 'react-i18next';
import Background from '../../img/AlumniPageBackground.png';
import ShenzhenBG from '../../img/Shenzhen.png';

const Shenzhen = () => {
  const { t, i18n } = useTranslation();

  const getTranslatedText = (translations) => {
    const lang = i18n.language;
    return translations[lang] || translations.en;
  };

  return (
    <div className="shenzhen-container">
      <div className="shenzhen-background-layer"></div>
      <div className="shenzhen-background-image"></div>
      <div className="shenzhen-content">
        <img className="shenzhen-image" src={ShenzhenBG} alt="Scenic view of Shenzhen" />
        <div className="shenzhen-text-content">
          <div className={`shenzhen-title ${i18n.language === 'en' ? 'no-wrap' : ''}`}>
            {getTranslatedText({
              zh: '深圳校友会',
              en: 'Shenzhen Alumni Association',
              tc: '深圳校友會'
            })}
          </div>
          <div className="shenzhen-paragraph">
            {getTranslatedText({
              zh: '深圳校友会成立于2024年7月1日, 现任主要负责人为李思远先生,',
              en: (
                <>
                  The Shenzhen Alumni Association was established on July 1, 2024,
                  <br />
                  currently headed by Mr. Li Siyuan,
                </>
              ),
              tc: '深圳校友會成立於2024年7月1日，現任主要負責人為李思遠先生,'
            })}
          </div>
          <div className="shenzhen-paragraph">
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

export default Shenzhen;
