import React from 'react';
import { useTranslation } from 'react-i18next';
import Background from '../../img/AlumniPageBackground.png';
import GuangzhouBG from '../../img/Guangzhou.jpg';

const Guangzhou = () => {
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
    <div className="guangzhou-container">
      <div className="guangzhou-background-layer"></div>
      <div className="guangzhou-background-image"></div>
      <div className="guangzhou-content">
        <img className="guangzhou-image" src={GuangzhouBG} alt="Scenic view of Guangzhou" />
        <div className="guangzhou-text-content">
          <div className={`guangzhou-title ${i18n.language === 'en' ? 'no-wrap' : ''}`}>
            {getTranslatedText('广州校友会', 'Guangzhou Alumni Association', '', '廣州校友會')}
          </div>
          <div className="guangzhou-paragraph">
            {getTranslatedText('广州校友会成立于2024年7月1日,', 'The Guangzhou Alumni Association was established on July 1, 2024,', '廣州校友會成立於2024年7月1日，現任主要負責人為李思遠先生,')}
          </div>
          <div className="guangzhou-paragraph">
            {getTranslatedText('现任主要负责人为李思远先生,', 'currently headed by Mr. Li Siyuan,', '廣州校友會成立於2024年7月1日，現任主要負責人為李思遠先生,')}
          </div>
          <div className="guangzhou-paragraph">
            {getTranslatedText('联系邮箱为lisiyuansven@foxmail.com.', 'Contact email is lisiyuansven@foxmail.com.', '', '聯繫郵箱為lisiyuansven@foxmail.com.')}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Guangzhou;
