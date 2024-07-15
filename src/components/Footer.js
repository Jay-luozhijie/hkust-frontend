import React from 'react';
import { ReactComponent as Logo } from '../img/hkust_white_logo.svg';
import { ReactComponent as Title } from '../img/Header-title_MAFM.svg';
import quantSocietyLogo from '../img/quant_society_logo.png';
import { ReactComponent as Earth } from '../img/globe-americas.svg';
import { ReactComponent as Triangle } from '../img/caret-down-fill.svg';
import { ReactComponent as Envelope } from '../img/envelope.svg';
import { ReactComponent as Linkedin } from '../img/Linkedin_logo.svg';
import { ReactComponent as MsgIcon } from '../img/msg_icon.svg';
import { ReactComponent as Rectangle } from '../img/Rectangle.svg';
import { useTranslation } from 'react-i18next';
import { useMediaQuery } from 'react-responsive';
import breakpoints from '../config/breakpoints';

function Footer() {
    const { t } = useTranslation();
    const isMobile = useMediaQuery({ query: breakpoints.mobile });
    const footerStyle = {
        width: '100%',
        minHeight: isMobile ? '350px' : '150px',  // 手机时设置为100px高，电脑为150px
        backgroundColor: '#9A1E23',
        position: 'relative',
        minWidth: '320px',
        overflow: 'hidden'
    };

    const logoStyle = {
        width: isMobile ? '100px' : '205px',  // 宽度自适应
        height: '68px',  // 固定高度
        marginRight: '50px',
        marginLeft: isMobile ? 'auto' : '15px',  // 手机模式下自动居中
        paddingRight: '20px',
        position: 'relative',
        top: isMobile ? '160px' : '-10px',  // 手机模式下上移更多一点
        left: isMobile ? '46%' : '0',       // 如果是手机，左偏移50%
        transform: isMobile ? 'translateX(-50%)' : 'none',  // 如果是手机，向左平移自身的50%以居中
        minWidth: '185px',  // 最小宽度
        maxWidth: '205px',  // 最大宽度，保持固定宽度
    };

    const copyrightTextStyle = {
        color: 'white',
        position: 'relative',
        top: isMobile ? '215px' : '-10px',  // 调整位置使之上移与Logo一致
        left: isMobile ? '56%' : '0',
        transform: isMobile ? 'translateX(-137%)' : 'none',  // 居中
        whiteSpace: 'nowrap'
    };
    
    const friendLinksTextStyle = {
        color: 'white',
        position: 'relative',
        top: isMobile ? '80px' : '-10px',
        left: isMobile ? '-125%' : '0',
        transform: isMobile ? 'translateX(-50%)' : 'none', // 居中调整
        marginRight: '50px',
        marginLeft: isMobile ? 'auto' : '15px',
        minWidth: isMobile ? '200px' : 'auto', // 手机模式下设置最小宽度
        whiteSpace: 'nowrap', // 防止换行
        padding: isMobile ? '0 10px' : '0', // 手机模式下增加内边距
    };
    
    const cryptoStyle = {
        marginRight: isMobile ? '20px' : '0'
    };

    const outerDivStyle = {
        position: 'relative', 
        top: isMobile ? '-20px' : '0px',
        left: isMobile ? '-985px' : '0px',
    };
    
    return (
        <div style={{ zIndex: 2, position: 'relative' }}>
            <footer className="tp-header-height" style={footerStyle}>
                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'flex-start',
                    height: '100%',
                    width: 'calc(100% - 50px)',
                    marginLeft: '50px',
                    boxSizing: 'border-box'
                }}>
                <Logo style={logoStyle} />
                    <span style={copyrightTextStyle}>Copyright&copy; HKUST Quant Trading Society</span>
                    <div style={{ flexGrow: 1 }}></div>
                    <div style={friendLinksTextStyle}>
                        {t('friendLinks')}{isMobile ? <br /> : ': '}
                        <a href="https://mafm.hkust.edu.hk/" style={{ color: 'white' }}>
                            <span style={cryptoStyle}>Crypto-Fintech Lab</span>
                            {isMobile ? '' : <br />}
                            HKUST MAFM
                        </a>
                    </div>
                    <div style={outerDivStyle}>
                        <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'flex-start',
                            height: '80%',
                            width: 'calc(100% - 50px)',
                            marginLeft: '170px',
                            boxSizing: 'border-box'
                        }}>
                            <Envelope style={{ marginRight: '15px', position: 'relative', top: '-8px' }}></Envelope>
                            <div style={{ position: 'relative', top: '-10px' }}>
                                <span style={{ color: 'white', fontFamily: 'Oppo Sans Regular' }}>official@ustquant.hk</span>
                                <br />
                                <span style={{ color: 'white', fontFamily: 'Oppo Sans Regular' }}>secretary@ustquant.hk</span>
                            </div>
                        </div>
                        <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'flex-start',
                            height: '80%',
                            width: 'calc(100% - 50px)',
                            marginLeft: '170px',
                            boxSizing: 'border-box'
                        }}>
                            <Linkedin style={{ marginRight: '15px', position: 'relative', top: '8px' }}></Linkedin>
                            <div style={{ position: 'relative', top: '10px' }}>
                                <a style={{ color: 'white', fontFamily: 'Oppo Sans Regular' }} href="https://www.linkedin.com/company/ust-quant-trading-society-limitted/" target="_blank" rel="noopener noreferrer">
                                    https://www.linkedin.com/company/<br />ust-quant-trading-society-limitted/
                                </a>
                            </div>
                        </div>
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", marginLeft: "30px", position: 'absolute', right: '25px', top: '25px' }}>
                        <MsgIcon style={{ position: 'relative', top: '-10px' }}></MsgIcon>
                        <Rectangle></Rectangle>
                    </div>
                    <div style={{ flexGrow: 1 }}></div>
                </div>
            </footer>
        </div>
    );
}

export default Footer;
