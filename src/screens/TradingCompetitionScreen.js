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
      {/* 背景层 */}
      <div style={{
        position: 'fixed', // 固定位置
        top: '150px',
        right: '0px', // 从右侧开始，确保背景始终靠右
        width: '800px',
        height: '600px',
        backgroundImage: `url(${AlumniPageBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'right center', // 背景图片靠右并垂直居中
        backgroundRepeat: 'no-repeat',
        zIndex: -1, // 确保背景在内容下面
      }} />

      {/* 内容层 */}
      <div style={{
        position: 'relative', // 相对定位
        width: '100%', 
        height: '634px', // 视窗高度
        display: 'flex', // 使用flex布局
        flexDirection: 'column', // 垂直排列
        justifyContent: 'center', // 垂直居中
        textAlign: 'center', // 水平居中
        zIndex: 1, // 确保内容在背景上面
      }}>
        <span style={{ 
          color: '#9A1E23', 
          fontSize: '48px', 
          fontFamily: 'OPPO Sans', 
          fontWeight: 400, 
          wordWrap: 'break-word' 
        }}>
          {getTranslatedText('港科大量化交易社团官方网站', 'HKUST Quant Trading Society Official Website', '港科大量化交易社團官方網站')}
          <br/>
        </span>
        <span style={{ 
          color: '#9A1E23', 
          fontSize: '96px', 
          fontFamily: 'OPPO Sans', 
          fontWeight: 400, 
          wordWrap: 'break-word' 
        }}>
          {getTranslatedText('即将推出', 'COMING SOON', '即將推出')}
        </span>
      </div>
    </>
  );
}

export default TradingCompetition;
