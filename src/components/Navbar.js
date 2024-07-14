import React from 'react';
import { ReactComponent as Logo } from '../img/hkust_logo.svg';
import { ReactComponent as Title } from '../img/Header-title_MAFM.svg';
import quantSocietyLogo from '../img/quant_society_logo.png';
import { ReactComponent as Earth } from '../img/globe-americas.svg';
import { ReactComponent as Triangle } from '../img/caret-down-fill.svg';
import {useState} from 'react';
import { NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function Navbar() {
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

    return (
        <div>
            <header className="tp-header-height" style={{ }}>
                <div className="tp-header-top-3__area grey-bg" style={{backgroundColor: '#9A1E23'}}>
                    <div className="container" style={{display: "flex", alignItems: "center", justifyContent: "flex-end", height: "100%", marginRight:"40px"}}>
                        <div style={{color: "white"}}>HKUST Quant Trading Society</div>
                    </div>
                </div>
                    <div style={{ backgroundColor: 'white' }} className="tab-box">
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start', height: '100%',  boxSizing: 'border-box' }} className="tab-box-item">
                            <div style={{ display: 'flex', alignItems: 'center', marginRight: '0px' }}>
                            <Logo style={{ width: '230px', height: '60px' }} className="Logo"/>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', marginRight: '0px' }}>
                            <Title style={{ width: '180px', height: '60px' }} className="Title"/>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', marginLeft: '-15px' }}> 
                            <img src={quantSocietyLogo} alt="Quant Society Logo" style={{ width: '187px', height: '187px' }} />
                        </div>
                        <div className="menubtn"><span></span></div>
                        {/* Adding a spacer div here */}
                        <div style={{ flexGrow: 1 }}></div>
                        <div className="nav-bar">
                            <div className="nav-link-container">
                            <NavLink to="#" className="nav-link" onMouseEnter={() => toggleDropdown('aboutIsOpen')}>
                                关于我们
                            </NavLink>
                                {dropdowns.aboutIsOpen && (
                                    <div className="dropdown-menu" onMouseLeave={() => toggleDropdown('aboutIsOpen')}>
                                        <NavLink className="dropdown-item" to="/Introduce">社团介绍</NavLink>
                                        <NavLink className="dropdown-item" to="/AboutUs">成员与运营团队</NavLink>
                                    </div>
                                )}
                            </div>
                            <NavLink to="/TradingCompetition" className="nav-link">交易大赛</NavLink>
                            <NavLink to="/SocialAdvisor" className="nav-link">社团顾问</NavLink>
                            <NavLink to="/partner" className="nav-link">合作伙伴</NavLink>
                            <div className="nav-link-container">
                                <NavLink to="#" className="nav-link" onMouseEnter={() => setDropdowns(prevState => ({ ...prevState, alumniIsOpen: true }))}>
                                    校友会
                                </NavLink>
                                {dropdowns.alumniIsOpen && (
                                    <div className="dropdown-menu" onMouseLeave={() => setDropdowns(prevState => ({ ...prevState, alumniIsOpen: false }))}>
                                        <NavLink className="dropdown-item" to="/Alumni/Hongkong">香港校友会</NavLink>
                                        <NavLink className="dropdown-item" to="/Alumni/Beijing">北京校友会</NavLink>
                                        <NavLink className="dropdown-item" to="/Alumni/Shanghai">上海校友会</NavLink>
                                        <NavLink className="dropdown-item" to="/Alumni/Guangzhou">广州校友会</NavLink>
                                        <NavLink className="dropdown-item" to="/Alumni/Shenzhen">深圳校友会</NavLink>
                                    </div>

                                )}
                            </div>
                            <NavLink to="/communityNews" className="nav-link">社团新闻</NavLink>
                            <div className="nav-link-container" onMouseEnter={() => setDropdowns(prevState => ({ ...prevState, languageIsOpen: true }))} onMouseLeave={() => setDropdowns(prevState => ({ ...prevState, languageIsOpen: false }))}>
                            <div className="nav-link">
                                <Earth style={{ width: '29px', height: '29px', color: '#888888', marginLeft: '50px' }} />
                                <Triangle style={{ color: '#9A1E23', marginRight: '30px' }} />
                            </div>
                            {dropdowns.languageIsOpen && (
                                <div className="dropdown-menu">
                                    <NavLink className="dropdown-item" to="/language/en">English</NavLink>
                                    <NavLink className="dropdown-item" to="/language/cn">繁體中文</NavLink>
                                    <NavLink className="dropdown-item" to="/language/ZH_cn">简体中文</NavLink>
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