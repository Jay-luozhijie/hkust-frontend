import React from 'react';
import { useTranslation } from 'react-i18next';
import Background from '../../img/AlumniPageBackground.png';
import HongKongBG from '../../img/Hongkong.png';

const HongKong = () => {
  const { t, i18n } = useTranslation();

  const getTranslatedText = (translations) => {
    const lang = i18n.language;
    return translations[lang] || translations.en;
  };

  return (
    <div className="hongkong-container">
      <div className="background-layer"></div>
      <div className="background-image"></div>
      <div className="content">
        <img className="hongkong-image" src={HongKongBG} alt="Scenic view of Hong Kong" />
        <div className="text-content">
          <div className={`title ${i18n.language === 'en' ? 'no-wrap' : ''}`}>
            {getTranslatedText({
              zh: '香港校友会',
              en: 'Hong Kong Alumni Association',
              tc: '香港校友會'
            })}
          </div>
          <div className="paragraph">
            {getTranslatedText({
              zh: '香港校友会成立于2024年7月1日, 现任主要负责人为李思远先生,',
              en: (
                <>
                  The Hong Kong Alumni Association was established on July 1, 2024,
                  <br />
                  currently headed by Mr. Li Siyuan,
                </>
              ),
              tc: '香港校友會成立於2024年7月1日，現任主要負責人為李思遠先生,'
            })}
          </div>
          <div className="paragraph">
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

export default HongKong;
