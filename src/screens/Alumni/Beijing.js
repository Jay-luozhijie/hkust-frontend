import React from 'react';
import { useTranslation } from 'react-i18next';
import Background from '../../img/AlumniPageBackground.png';
import BeiJingBG from '../../img/Beijing.jpg';

const Beijing = () => {
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
    <div className="beijing-container">
      <div className="beijing-background-layer"></div>
      <div className="beijing-background-image"></div>
      <div className="beijing-content">
        <img className="beijing-image" src={BeiJingBG} alt="Scenic view of Beijing" />
        <div className="beijing-text-content">
          <div className={`beijing-title ${i18n.language === 'en' ? 'no-wrap' : ''}`}>
            {getTranslatedText('北京校友会', 'Beijing Alumni Association', '', '北京校友會')}
          </div>
          <div className="beijing-paragraph">
            {getTranslatedText('北京校友会成立于2024年7月1日,', 'The Beijing Alumni Association was established on July 1, 2024,', '北京校友會成立於2024年7月1日，現任主要負責人為李思遠先生,')}
          </div>
          <div className="beijing-paragraph">
            {getTranslatedText('现任主要负责人为李思远先生,', 'currently headed by Mr. Li Siyuan,', '廣州校友會成立於2024年7月1日，現任主要負責人為李思遠先生,')}
          </div>
          <div className="beijing-paragraph">
            {getTranslatedText('联系邮箱为lisiyuansven@foxmail.com.', 'Contact email is lisiyuansven@foxmail.com.', '', '聯繫郵箱為lisiyuansven@foxmail.com.')}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Beijing;
