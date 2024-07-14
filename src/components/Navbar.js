import React, { useState } from 'react';
import { ReactComponent as Logo } from '../img/hkust_logo.svg';
import { ReactComponent as Title } from '../img/Header-title_MAFM.svg';
import quantSocietyLogo from '../img/quant_society_logo.png';
import { ReactComponent as Earth } from '../img/globe-americas.svg';
import { ReactComponent as Triangle } from '../img/caret-down-fill.svg';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useLanguage } from '../components/LanguageContext';
import 'bootstrap/dist/css/bootstrap.min.css';

function Navbar() {
    const { t, i18n } = useTranslation();
    const { changeLanguage } = useLanguage();
    const [dropdowns, setDropdowns] = useState({
        languageIsOpen: false,
        alumniIsOpen: false,
        aboutIsOpen: false
    });

    const toggleDropdown = (dropdown) => {
        setDropdowns((prevState) => ({
            ...prevState,
            [dropdown]: !prevState[dropdown]
        }));
    };

    const getNavLinkStyle = () => {
        if (i18n.language === 'en') {
            return { fontSize: '18px' };
        } else {
            return {};
        }
    };

    return (
        <div>
            <header className="tp-header-height">
                <div className="tp-header-top-3__area grey-bg" style={{ backgroundColor: '#9A1E23' }}>
                    <div className="container" style={{ display: "flex", alignItems: "center", justifyContent: "flex-end", height: "100%", marginRight: "40px" }}>
                        <div style={{ color: "white" }}>HKUST Quant Trading Society</div>
                    </div>
                </div>
                <div style={{ backgroundColor: 'white' }} className="tab-box">
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start', height: '100%', boxSizing: 'border-box' }} className="tab-box-item">
                        <div style={{ display: 'flex', alignItems: 'center', marginRight: '0px' }}>
                            <Logo style={{ width: '230px', height: '60px' }} className="Logo" />
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', marginRight: '0px' }}>
                            <Title style={{ width: '180px', height: '60px' }} className="Title" />
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', marginLeft: '-15px' }}>
                            <img src={quantSocietyLogo} alt="Quant Society Logo" style={{ width: '187px', height: '187px' }} />
                        </div>
                        <div className="menubtn"><span></span></div>
                        <div style={{ flexGrow: 1 }}></div>
                        <div className="nav-bar">
                            <div className="nav-link-container">
                                <NavLink to="#" className="nav-link" onMouseEnter={() => toggleDropdown('aboutIsOpen')} style={getNavLinkStyle()}>
                                    {t('aboutUs')}
                                </NavLink>
                                {dropdowns.aboutIsOpen && (
                                    <div className="dropdown-menu" onMouseLeave={() => toggleDropdown('aboutIsOpen')}>
                                        <NavLink className="dropdown-item" to="/Introduce">{t('introduction')}</NavLink>
                                        <NavLink className="dropdown-item" to="/AboutUs">{t('team')}</NavLink>
                                    </div>
                                )}
                            </div>
                            <NavLink to="/TradingCompetition" className="nav-link" style={getNavLinkStyle()}>{t('tradingCompetitionNav')}</NavLink>
                            <NavLink to="/SocialAdvisor" className="nav-link" style={getNavLinkStyle()}>{t('socialAdvisor')}</NavLink>
                            <NavLink to="/partner" className="nav-link" style={getNavLinkStyle()}>{t('partnersNav')}</NavLink>
                            <div className="nav-link-container">
                                <NavLink to="#" className="nav-link" onMouseEnter={() => toggleDropdown('alumniIsOpen')} style={getNavLinkStyle()}>
                                    {t('alumni')}
                                </NavLink>
                                {dropdowns.alumniIsOpen && (
                                    <div className="dropdown-menu" onMouseLeave={() => toggleDropdown('alumniIsOpen')}>
                                        <NavLink className="dropdown-item" to="/Alumni/Hongkong">{t('alumniHongKong')}</NavLink>
                                        <NavLink className="dropdown-item" to="/Alumni/Beijing">{t('alumniBeijing')}</NavLink>
                                        <NavLink className="dropdown-item" to="/Alumni/Shanghai">{t('alumniShanghai')}</NavLink>
                                        <NavLink className="dropdown-item" to="/Alumni/Guangzhou">{t('alumniGuangzhou')}</NavLink>
                                        <NavLink className="dropdown-item" to="/Alumni/Shenzhen">{t('alumniShenzhen')}</NavLink>
                                    </div>
                                )}
                            </div>
                            <NavLink to="/communityNews" className="nav-link" style={getNavLinkStyle()}>{t('communityNews')}</NavLink>
                            <div className="nav-link-container" onMouseEnter={() => toggleDropdown('languageIsOpen')} onMouseLeave={() => toggleDropdown('languageIsOpen')}>
                                <div className="nav-link">
                                    <Earth style={{ width: '29px', height: '29px', color: '#888888', marginLeft: '50px' }} />
                                    <Triangle style={{ color: '#9A1E23', marginRight: '30px' }} />
                                </div>
                                {dropdowns.languageIsOpen && (
                                    <div className="dropdown-menu">
                                        <div className="dropdown-item" onClick={() => changeLanguage('en')}>English</div>
                                        <div className="dropdown-item" onClick={() => changeLanguage('tc')}>繁體中文</div>
                                        <div className="dropdown-item" onClick={() => changeLanguage('zh')}>简体中文</div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    );
}

export default Navbar;
