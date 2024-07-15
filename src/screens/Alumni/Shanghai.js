import React from 'react';
import { useTranslation } from 'react-i18next';
import Background from '../../img/AlumniPageBackground.png';
import ShanghaiBG from '../../img/Shanghai.jpg';

const Shanghai = () => {
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
    <div className="shanghai-container">
      <div className="shanghai-background-layer"></div>
      <div className="shanghai-background-image"></div>
      <div className="shanghai-content">
        <img className="shanghai-image" src={ShanghaiBG} alt="Scenic view of Shanghai" />
        <div className="shanghai-text-content">
          <div className={`shanghai-title ${i18n.language === 'en' ? 'no-wrap' : ''}`}>
            {getTranslatedText('上海校友会', 'Shanghai Alumni Association', '', '上海校友會')}
          </div>
          <div className="shanghai-paragraph">
            {getTranslatedText('上海校友会成立于2024年7月1日,', 'The Shanghai Alumni Association was established on July 1, 2024,', '上海校友會成立於2024年7月1日，現任主要負責人為李思遠先生,')}
          </div>
          <div className="shanghai-paragraph">
            {getTranslatedText('现任主要负责人为李思远先生,', 'currently headed by Mr. Li Siyuan,', '廣州校友會成立於2024年7月1日，現任主要負責人為李思遠先生,')}
          </div>
          <div className="shanghai-paragraph">
            {getTranslatedText('联系邮箱为lisiyuansven@foxmail.com.', 'Contact email is lisiyuansven@foxmail.com.', '', '聯繫郵箱為lisiyuansven@foxmail.com.')}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shanghai;
