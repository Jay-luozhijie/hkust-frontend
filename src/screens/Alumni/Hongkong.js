import React from 'react';
import { useTranslation } from 'react-i18next';
import Background from '../../img/AlumniPageBackground.png';
import HongKongBG from '../../img/Hongkong.png';

const HongKong = () => {
  const { t, i18n } = useTranslation();

  const getTranslatedText = (zhText, enText1, enText2, tcText) => {
    if (i18n.language === 'zh') {
      return zhText;
    } else if (i18n.language === 'tc') {
      return tcText;
    } else {
      return (
        <>
          {enText1}
          <br />
          {enText2}
        </>
      );
    }
  };

  return (
    <div className="hongkong-container">
      <div className="background-layer"></div>
      <div className="background-image"></div>
      <div className="content">
        <img className="hongkong-image" src={HongKongBG} alt="Scenic view of Hong Kong" />
        <div className="text-content">
          <div className={`title ${i18n.language === 'en' ? 'no-wrap' : ''}`}>
            {getTranslatedText('香港校友会', 'Hong Kong Alumni Association', '', '香港校友會')}
          </div>
          <div className="paragraph">
            {getTranslatedText('香港校友会成立于2024年7月1日, ', 'The Hong Kong Alumni Association was established on July 1, 2024,', '香港校友會成立於2024年7月1日，現任主要負責人為李思遠先生,')}
          </div>
          <div className="paragraph">
            {getTranslatedText('现任主要负责人为李思远先生,', 'currently headed by Mr. Li Siyuan,', '香港校友會成立於2024年7月1日，現任主要負責人為李思遠先生,')}
          </div>
          <div className="paragraph">
            {getTranslatedText('联系邮箱为lisiyuansven@foxmail.com.', 'Contact email is lisiyuansven@foxmail.com.', '', '聯繫郵箱為lisiyuansven@foxmail.com.')}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HongKong;
