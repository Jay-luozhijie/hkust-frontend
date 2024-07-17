
import React, { useState, useEffect } from 'react';
import { ReactComponent as Logo } from '../img/hkust_logo.svg';
import { ReactComponent as Title } from '../img/Header-title_MAFM.svg';
import quantSocietyLogo from '../img/quant_society_logo.png';
import { ReactComponent as Earth } from '../img/globe-americas.svg';
import { ReactComponent as Triangle } from '../img/caret-down-fill.svg';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useLanguage } from '../components/LanguageContext';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useMediaQuery } from 'react-responsive';
import breakpoints from '../config/breakpoints'; // 确保这是正确的路径
import { Link } from 'react-router-dom';

function Navbar() {
    const { t, i18n } = useTranslation();
    const { changeLanguage } = useLanguage();
    const [dropdowns, setDropdowns] = useState({
        languageIsOpen: false,
        alumniIsOpen: false,
        aboutIsOpen: false
    });

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const isMobile = useMediaQuery({ query: breakpoints.mobile });
    const isDesktop = useMediaQuery({ query: breakpoints.desktop });

    const toggleDropdown = (dropdown) => {
        setDropdowns(prevState => ({
            ...prevState,
            [dropdown]: !prevState[dropdown]
        }));
    };
    
    // 点击外部关闭菜单的逻辑
    useEffect(() => {
        const closeMenu = (e) => {
            if (isMenuOpen && !e.target.closest('.side-menu') && !e.target.closest('.menubtn')) {
                setIsMenuOpen(false);
            }
        };

        document.addEventListener('mousedown', closeMenu);

        return () => {
            document.removeEventListener('mousedown', closeMenu);
        };
    }, [isMenuOpen]); // 依赖isMenuOpen状态，以便更新监听器

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
                        <div style={{ color: "white" }}>Quant Trading Society（HKUST- MAFM）</div>
                    </div>
                </div>
                <div style={{ backgroundColor: 'white' }} className="tab-box">
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start', height: '100%', boxSizing: 'border-box', position: 'relative' }} className="tab-box-item">
                <div style={{ display: 'flex', alignItems: 'center', marginRight: '0px' }}>
                    <Link to="/">
                        <Logo style={{ width: isMobile ? '127.5px' : '230px', height: isMobile ? '34px' : '60px' }} className="Logo" />
                    </Link>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', marginRight: '0px' }}>
                    <Link to="/">
                        <Title style={{ width: isMobile ? '102px' : '180px', height: isMobile ? '34px' : '60px' }} className="Title" />
                    </Link>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', marginLeft: isDesktop ? '-15px' : '0px' }}>
                    <Link to="/">
                        <img src={quantSocietyLogo} alt="Quant Society Logo" style={{ width: isDesktop ? '187px' : '85px', height: isDesktop ? '187px' : '85px' }} />
                    </Link>
                    </div>
                    {!isDesktop && (
                        <div className="menubtn" onClick={toggleMenu} style={{ position: 'absolute', right: '0px', top: '25%' }}>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    )}
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
                        <div className={isMenuOpen ? "side-menu open" : "side-menu"}>
                            <div className={isMenuOpen ? "mobile-menu open" : "mobile-menu"}>
                                <div className="mobile-nav">
                                    {/* About Us Section */}
                                    <div className="mobile-nav-link-container">
                                        <NavLink to="#" className="mobile-nav-link" onClick={() => toggleDropdown('aboutIsOpen')}>
                                            {t('aboutUs')}
                                            <Triangle className={dropdowns.aboutIsOpen ? "about-dropdown-icon rotate" : "about-dropdown-icon"} style={{ marginLeft: '5px' }} />
                                        </NavLink>
                                        {dropdowns.aboutIsOpen && (
                                            <div className="mobile-dropdown-menu">
                                                <NavLink className="mobile-dropdown-item" to="/Introduce">{t('introduction')}</NavLink>
                                                <NavLink className="mobile-dropdown-item" to="/AboutUs">{t('team')}</NavLink>
                                            </div>
                                        )}
                                    </div>
                                    {/* Trading Competition */}
                                    <NavLink to="/TradingCompetition" className="mobile-nav-link">{t('tradingCompetitionNav')}</NavLink>

                                    {/* Social Advisor */}
                                    <NavLink to="/SocialAdvisor" className="mobile-nav-link">{t('socialAdvisor')}</NavLink>

                                    {/* Partners */}
                                    <NavLink to="/partner" className="mobile-nav-link">{t('partnersNav')}</NavLink>

                                    {/* Alumni Section */}
                                    <div className="mobile-nav-link-container">
                                        <NavLink to="#" className="mobile-nav-link" onClick={() => toggleDropdown('alumniIsOpen')}>
                                            {t('alumni')}
                                            <Triangle className={dropdowns.alumniIsOpen ? "alumni-dropdown-icon rotate" : "alumni-dropdown-icon"} style={{ marginLeft: '5px' }} />
                                        </NavLink>
                                        {dropdowns.alumniIsOpen && (
                                            <div className="mobile-dropdown-menu">
                                                <NavLink className="mobile-dropdown-item" to="/Alumni/Hongkong">{t('alumniHongKong')}</NavLink>
                                                <NavLink className="mobile-dropdown-item" to="/Alumni/Beijing">{t('alumniBeijing')}</NavLink>
                                                <NavLink className="mobile-dropdown-item" to="/Alumni/Shanghai">{t('alumniShanghai')}</NavLink>
                                                <NavLink className="mobile-dropdown-item" to="/Alumni/Guangzhou">{t('alumniGuangzhou')}</NavLink>
                                                <NavLink className="mobile-dropdown-item" to="/Alumni/Shenzhen">{t('alumniShenzhen')}</NavLink>
                                            </div>
                                        )}
                                    </div>
                                    {/* Community News */}
                                    <NavLink to="/communityNews" className="mobile-nav-link">{t('communityNews')}</NavLink>

                                    {/* Language Options */}
                                    <div className="mobile-nav-link-container">
                                        <div className="mobile-nav-link" onClick={() => toggleDropdown('languageIsOpen')}>
                                            <Earth style={{ width: '20px', height: '20px', color: '#888888' }} />
                                            <Triangle className={dropdowns.languageIsOpen ? "language-dropdown-icon rotate" : "language-dropdown-icon"} style={{ color: '#9A1E23', marginLeft: '5px' }} />
                                        </div>
                                        {dropdowns.languageIsOpen && (
                                            <div className="mobile-dropdown-menu">
                                                <div className="mobile-dropdown-item" onClick={() => changeLanguage('en')}>English</div>
                                                <div className="mobile-dropdown-item" onClick={() => changeLanguage('tc')}>繁體中文</div>
                                                <div className="mobile-dropdown-item" onClick={() => changeLanguage('zh')}>简体中文</div>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    );
}

export default Navbar;
