import React from 'react';
import Background from '../../img/AlumniPageBackground.png'
import GuangzhouBG from '../../img/Guangzhou.jpg'

const Guangzhou = () => {
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
          alt="Scenic view of Hong Kong"
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
          }}>
            广州校友会
          </div>
          <div style={{
            color: 'black',
            fontSize: '20px', // 正文字体大小
            fontFamily: 'OPPO Sans',
            fontWeight: '400',
            wordWrap: 'break-word',
            whiteSpace: 'nowrap', // 防止文本换行
          }}>
            广州校友会成立于2024年7月1日, 现任主要负责人为李思远先生,
          </div>
          <div style={{
            color: 'black',
            fontSize: '20px', // 正文字体大小
            fontFamily: 'OPPO Sans',
            fontWeight: '400',
            wordWrap: 'break-word',
          }}>
            联系邮箱为lisiyuansven@foxmail.com.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Guangzhou;
