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
    <div style={{
      position: 'relative',
      width: '100%', 
      minHeight: '633px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '50px 0',
      marginLeft: '-110px',
    }}>
      <div style={{
        position: 'absolute',
        top: '0', 
        left: '0',
        width: '100%',
        height: '100%',
        zIndex: '-1'
      }}>
      </div>
      <div style={{
        position: 'absolute',
        top: '0',
        left: '0',
        width: '1000px',
        height: '600px',
        backgroundImage: `url(${Background})`,
        backgroundSize: 'cover', 
        backgroundPosition: 'left top', 
        backgroundRepeat: 'no-repeat', 
        zIndex: '-1', // 确保背景在内容之下
        marginTop: '30px',
      }}>
      </div>
      <div style={{
        display: 'flex',
        alignItems: 'flex-start',
        width: '80%', // 容器宽度
        maxWidth: '1200px', // 容器最大宽度
        zIndex: 1
      }}>
        <img
          style={{
            width: '813px', 
            height: '480px', 
            borderRadius: '20px',
          }}
          src={GuangzhouBG}
          alt="Scenic view of Guangzhou"
        />
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          marginLeft: '80px', // 图片与文字的间距
        }}>
          <div style={{
            color: '#9A1E23',
            fontSize: '48px', // 标题字体大小
            fontFamily: 'OPPO Sans',
            fontWeight: '500',
            wordWrap: 'break-word',
            whiteSpace: i18n.language === 'en' ? 'nowrap' : 'normal'
          }}>
            {getTranslatedText('广州校友会', 'Guangzhou Alumni Association', '', '廣州校友會')}
          </div>
          <div style={{
            color: 'black',
            fontSize: '20px', // 正文字体大小
            fontFamily: 'OPPO Sans',
            fontWeight: '400',
            wordWrap: 'break-word',
            whiteSpace: 'nowrap', // 防止文本换行
          }}>
            {getTranslatedText('广州校友会成立于2024年7月1日, 现任主要负责人为李思远先生,', 'The Guangzhou Alumni Association was established on July 1, 2024,', 'currently headed by Mr. Li Siyuan,', '廣州校友會成立於2024年7月1日，現任主要負責人為李思遠先生,')}
          </div>
          <div style={{
            color: 'black',
            fontSize: '20px', // 正文字体大小
            fontFamily: 'OPPO Sans',
            fontWeight: '400',
            wordWrap: 'break-word',
          }}>
            {getTranslatedText('联系邮箱为lisiyuansven@foxmail.com.', 'Contact email is lisiyuansven@foxmail.com.', '', '聯繫郵箱為lisiyuansven@foxmail.com.')}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Guangzhou;
