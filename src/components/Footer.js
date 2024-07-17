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
import QRCode from '../img/footerQR.jpg'

function Footer() {
    const { t } = useTranslation();
    const isMobile = useMediaQuery({ query: breakpoints.mobile });
    const footerStyle = {
        width: '100%',
        minHeight: isMobile ? '375px' : '150px',  // 手机时设置为100px高，电脑为150px
        backgroundColor: '#9A1E23',
        position: 'relative',
        minWidth: '320px',
        overflow: 'hidden'
    };

    const logoStyle = {
        width: isMobile ? '100px' : '205px',
        height: '68px',
        marginRight: '50px',
        marginLeft: isMobile ? 'auto' : '15px',
        paddingRight: '20px',
        position: 'relative',
        top: isMobile ? '240px' : '-10px',  // 增加了手机模式下的下移距离
        left: isMobile ? '46%' : '0',
        transform: isMobile ? 'translateX(-50%)' : 'none',
        minWidth: '185px',
        maxWidth: '205px',
    };

    const copyrightTextStyle = {
        color: 'white',
        position: 'relative',
        top: isMobile ? '295px' : '-10px',  // 增加了手机模式下的下移距离
        right: isMobile ? '-50%' : '0',
        transform: isMobile ? 'translateX(-137%)' : 'none',
        whiteSpace: 'nowrap',
        fontFamily: 'OPPO Sans',
        fontSize: isMobile ? '12px' : undefined,
    };

    const friendLinksTextStyle = {
        color: 'white',
        position: 'relative',
        top: isMobile ? '160px' : '-10px',  // 增加了手机模式下的下移距离
        left: isMobile ? '-120%' : '0',
        transform: isMobile ? 'translateX(-50%)' : 'none',
        marginRight: '50px',
        marginLeft: isMobile ? 'auto' : '15px',
        minWidth: isMobile ? '200px' : 'auto',
        whiteSpace: 'nowrap',
        padding: isMobile ? '0 10px' : '0',
        fontFamily: 'OPPO Sans'
    };

    const cryptoStyle = {
        marginRight: isMobile ? '20px' : '0',
    };

    const outerDivStyle = {
        position: 'relative',
        top: isMobile ? '50px' : '0px',  // 减少了手机模式下的上移距离
        left: isMobile ? '-965px' : '-30px',
    };

    const linkStyle1 = {
        color: 'white',
        fontFamily: 'OPPO Sans',
        fontSize: isMobile ? '14px' : '16px', // 手机模式下字体更小
        position: 'relative',
        top: isMobile ? '-5px' : '0px',
        left: isMobile ? '15px' : '12px'
    };
    

    const linkStyle2 = {
        color: 'white',
        fontFamily: 'OPPO Sans',
        fontSize: isMobile ? '16px' : '16px', // 手机模式下字体更小
        position: 'relative',
        top: isMobile ? '8px' : undefined
    };
    
    const iconStyleEnvolope = {
        position: 'relative',
    };

    const msgDivStyle = {
        display: "flex",
        flexDirection: "column",
        marginLeft: "30px",
        position: 'absolute',
        right: '25px',
        top: isMobile ? '40px' : '25px',  // 手机模式下移
    };

    const msgIconStyle = {
        position: 'relative',
        top: isMobile ? '-10px' : '-10px'  // 手机模式调整
    };
    
    const rectangleStyle = {
        width: '90px', // 设定适当的宽度和高度
        height: '90px',
        backgroundImage: `url(${QRCode})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
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
                    <span style={copyrightTextStyle}>Copyright&copy; Quant Trading Society（HKUST- MAFM）</span>
                    <div style={{ flexGrow: 1 }}></div>
                    <div style={friendLinksTextStyle}>
                        {t('friendLinks')}<br />
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

                            <Envelope style={iconStyleEnvolope} />
                            <div style={linkStyle1}>
                                <span style={{ color: 'white', fontFamily: 'OPPO Sans' }}>official@ustquant.hk</span>
                                <br />
                                <span style={{ color: 'white', fontFamily: 'OPPO Sans' }}>secretary@ustquant.hk</span>
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

                            <div style={linkStyle2}>
                        <a style={{ color: 'white', fontFamily: 'OPPO Sans', fontSize: isMobile ? '12px' : '16px' }} href="https://www.linkedin.com/company/ust-quant-trading-society-limitted/" target="_blank" rel="noopener noreferrer">
                            https://www.linkedin.com/company/<br />ust-quant-trading-society-limitted/
                        </a>
                    </div>
                        </div>
                    </div>
                    <div style={msgDivStyle}>
                        <MsgIcon style={msgIconStyle} />
                        <div style={rectangleStyle}></div>
                    </div>
                    <div style={{ flexGrow: 1 }}></div>
                </div>
            </footer>
        </div>
    );
}

export default Footer;
