import React from 'react';
import { ReactComponent as Logo } from '../img/hkust_logo.svg';
import { ReactComponent as Title } from '../img/Header-title_MAFM.svg';
import quantSocietyLogo from '../img/quant_society_logo.png';
import { ReactComponent as Earth } from '../img/globe-americas.svg';
import { ReactComponent as Triangle } from '../img/caret-down-fill.svg';
import {useState} from 'react';
import { NavLink } from 'react-router-dom';

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
                    <div className="container" style={{display: "flex", alignItems: "center", justifyContent: "flex-end", height: "100%", marginRight:"50px"}}>
                        <div style={{color: "white"}}>HKUST Quant Trading Society</div>
                    </div>
                </div>
                    <div style={{ backgroundColor: 'white' }} className="tab-box">
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start', height: '100%',  boxSizing: 'border-box' }} className="tab-box-item">
                            <Logo style={{  }} className="Logo"/>
                            <Title style={{   }} className="Title"/>
                            <img src={quantSocietyLogo} alt="Quant Society Logo" style={{ height: '180%', marginRight: '50px' }} />
                            <div className="menubtn"><span></span></div>
                            {/* Adding a spacer div here */}
                            <div style={{ flexGrow: 1 }}></div>
                            
                        <div style={{  }} className='nav-bar'>
                            <NavLink to="/AboutUs">
                                <span style={{ color: '#9A1E23', marginRight: '30px', flex: '1', textAlign: 'right' }}>关于我们</span>
                            </NavLink>
                            <NavLink to="/SocialAdvisor">
                                <span style={{ color: '#9A1E23', marginRight: '30px', flex: '1', textAlign: 'right' }}>社团顾问</span>
                            </NavLink>
                            <NavLink to="/partner">
                                <span style={{ color: '#9A1E23', marginRight: '30px', flex: '1', textAlign: 'right' }}>合作伙伴</span>
                            </NavLink>
                            <NavLink to="/Introduce">
                                <span style={{ color: '#9A1E23', marginRight: '30px', flex: '1', textAlign: 'right' }}>校友会</span>
                            </NavLink>
                            <NavLink to="/communityNews">
                                <span style={{ color: '#9A1E23', marginRight: '30px', flex: '1', textAlign: 'right' }}>社团新闻</span>
                            </NavLink>
                        
                            <Earth style={{ textAlign: 'right'}}></Earth>
                            <Triangle style={{ color: '#9A1E23', marginRight: '30px', textAlign: 'left' }}></Triangle>
                        </div>
                        </div>
                    </div>
            </header>
        </div>
        // <div>
        //     <header class="tp-header-height" style={{ height: '149px' }}>
        //         <div class="tp-header-top-3__area grey-bg" style={{height:'53px', backgroundColor: '#9A1E23'}}>
        //             <div class="container" style={{display: "flex", alignItems: "center", justifyContent: "flex-end", height: "100%", marginRight:"50px"}}>
        //                 <div style={{color: "white"}}>HKUST Quant Trading Society</div>
        //             </div>
        //         </div>

        //             <div style={{ height: '96px', backgroundColor: 'white' }}>
        //                 <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start', height: '100%', width: 'calc(100% - 50px)', marginLeft: '50px', boxSizing: 'border-box' }}>
        //                     <Logo style={{ height: '60%', marginRight: '50px', paddingRight: '20px', borderRight: '3px solid #003366' }} />
        //                     <Title style={{ height: '60%', marginRight: '50px', paddingRight: '20px', borderRight: '3px solid #003366' }} />
        //                     <img src={quantSocietyLogo} alt="Quant Society Logo" style={{ height: '180%', marginRight: '50px' }} />
                            
        //                     {/* Adding a spacer div here */}
        //                     <div style={{ flexGrow: 1 }}></div>

        //                     <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexGrow: 2 }}>
        //                         <div>
        //                             <span style={{ color: '#9A1E23', marginRight: '30px', flex: '1', textAlign: 'right', cursor: "pointer"}}>关于我们</span>
        //                             {dropdowns.aboutIsOpen && (
        //                                 <ul style={{display: dropdowns.aboutIsOpen ? 'block' : 'none', position: "relative", 
        //                                 backgroundColor: "#9A1E23", zIndex: "1",  right: "0", listStyleType: "none"}}>
        //                                     <li><a href="#">社团介绍</a></li>
        //                                     <li><a href="#">成员与运营团队</a></li>
        //                                 </ul>
        //                             )}
        //                         </div>
        //                         <span style={{ color: '#9A1E23', marginRight: '30px', flex: '1', textAlign: 'right' }}>交易大赛</span>
        //                         <span style={{ color: '#9A1E23', marginRight: '30px', flex: '1', textAlign: 'right' }}>社团顾问</span>

        //                         <NavLink to="/partner" style={{textDecoration: "none"}}>
        //                             <span style={{ color: '#9A1E23', marginRight: '30px', flex: '1', textAlign: 'right' }}>合作伙伴</span>
        //                         </NavLink>
        //                         <div onClick={() => toggleDropdown('alumniIsOpen')}>
        //                             <span style={{ color: '#9A1E23', marginRight: '30px', flex: '1', textAlign: 'right' }}>校友会</span>
        //                             {dropdowns.alumniIsOpen && (
        //                                 <ul style={{display: dropdowns.alumniIsOpen ? 'block' : 'none', position: "absolute", 
        //                                 backgroundColor: "#9A1E23", zIndex: "1",  right: "0", listStyleType: "none"}}>
        //                                     <li><a href="/alumni/Hongkong">香港校友会</a></li>
        //                                     <li><a href="/alumni/Beijing">北京校友会</a></li>
        //                                     <li><a href="/alumni/Shanghai">上海校友会</a></li>
        //                                     <li><a href="/alumni/Guangzhou">广州校友会</a></li>
        //                                     <li><a href="/alumni/Shenzhen">深圳校友会</a></li>
        //                                 </ul>
        //                             )}
        //                         </div>
                                
        //                         <NavLink to="/communityNews" style={{textDecoration: "none"}}>
        //                             <span style={{ color: '#9A1E23', marginRight: '30px', flex: '1', textAlign: 'right' }}>社团新闻</span>
        //                         </NavLink>
        //                         {/* <div class="btn-group">
        //                             <button type="button" class="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown" data-bs-display="static" aria-expanded="false">
        //                                 Right-aligned but left aligned when large screen
        //                             </button>
        //                             <ul class="dropdown-menu dropdown-menu-end dropdown-menu-lg-start">
        //                                 <li><button class="dropdown-item" type="button">Action</button></li>
        //                                 <li><button class="dropdown-item" type="button">Another action</button></li>
        //                                 <li><button class="dropdown-item" type="button">Something else here</button></li>
        //                             </ul>
        //                         </div> */}
        //                         <div onClick={() => toggleDropdown('languageIsOpen')}>
        //                             <Earth style={{ textAlign: 'right'}}></Earth>
        //                             <Triangle  style={{ color: '#9A1E23', marginRight: '30px', textAlign: 'left' }}></Triangle>
        //                             {dropdowns.languageIsOpen && (
        //                                 <ul style={{display: dropdowns.languageIsOpen ? 'block' : 'none', position: "absolute", 
        //                                 backgroundColor: "#9A1E23", zIndex: "1",  right: "0", listStyleType: "none"}}>
        //                                     <li><a href="#">简体中文</a></li>
        //                                     <li><a href="#">繁體中文</a></li>
        //                                     <li><a href="#">English</a></li>
        //                                 </ul>
        //                             )}
        //                         </div>
        //                     </div>
        //                 </div>
        //             </div>
        //     </header>
        // </div>
    );
}

export default Navbar;