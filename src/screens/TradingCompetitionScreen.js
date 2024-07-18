import React from 'react';
import { useTranslation } from 'react-i18next';
import AlumniPageBackground from '../img/comingsoonbg.png'; // 导入背景图片

function TradingCompetition() {
  const { t, i18n } = useTranslation();

  const getTranslatedText = (zhText, enText, tcText) => {
    if (i18n.language === 'zh') {
      return zhText;
    } else if (i18n.language === 'tc') {
      return tcText;
    } else {
      return enText;
    }
  };

  return (
    <>

    <div className="background-layer" style={{ backgroundImage: `url(${AlumniPageBackground})` }} />

    <div className="content-layer">
      <span className="first-line">
        {getTranslatedText('港科大量化交易社团官方网站', 'Quant Trading Society (HKUST- MAFM) Official Website', '港科大量化交易社團官方網站')}
        <br/>
      </span>
      <span className="second-line">
        {getTranslatedText('即将推出', 'COMING SOON', '即將推出')}
      </span>
    </div>

    </>
  );
}

export default TradingCompetition;
