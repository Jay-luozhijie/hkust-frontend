import React from 'react';
import { useTranslation } from 'react-i18next';
import Background from '../../img/AlumniPageBackground.png';
import GuangzhouBG from '../../img/Guangzhou.jpg';

const Guangzhou = () => {
  const { t, i18n } = useTranslation();

  const getTranslatedText = (translations) => {
    const lang = i18n.language;
    return translations[lang] || translations.en;
  };

  return (
    <div className="guangzhou-container">
      <div className="guangzhou-background-layer"></div>
      <div className="guangzhou-background-image"></div>
      <div className="guangzhou-content">
        <img className="guangzhou-image" src={GuangzhouBG} alt="Scenic view of Guangzhou" />
        <div className="guangzhou-text-content">
          <div className={`guangzhou-title ${i18n.language === 'en' ? 'no-wrap' : ''}`}>
            {getTranslatedText({
              zh: '广州校友会',
              en: 'Guangzhou Alumni Association',
              tc: '廣州校友會'
            })}
          </div>
          <div className="guangzhou-paragraph">
            {getTranslatedText({
              zh: '广州校友会成立于2024年7月1日, 现任主要负责人为李思远先生,',
              en: (
                <>
                  The Guangzhou Alumni Association was established on July 1, 2024,
                  <br />
                  currently headed by Mr. Li Siyuan,
                </>
              ),
              tc: '廣州校友會成立於2024年7月1日，現任主要負責人為李思遠先生,'
            })}
          </div>
          <div className="guangzhou-paragraph">
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

export default Guangzhou;
