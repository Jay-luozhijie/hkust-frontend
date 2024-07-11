import React from 'react';
import { ReactComponent as Logo } from '../img/hkust_logo.svg';
import { ReactComponent as Title } from '../img/Header-title_MAFM.svg';
import quantSocietyLogo from '../img/quant_society_logo.png';
import { ReactComponent as Earth } from '../img/globe-americas.svg';
import { ReactComponent as Triangle } from '../img/caret-down-fill.svg';
import {useState} from 'react';

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        console.log(isOpen)
        setIsOpen(!isOpen);
    };

    return (
        <div>
            <header class="tp-header-height" style={{ height: '149px' }}>
                <div class="tp-header-top-3__area grey-bg" style={{height:'53px', backgroundColor: '#9A1E23'}}>
                    <div class="container" style={{display: "flex", alignItems: "center", justifyContent: "flex-end", height: "100%", marginRight:"50px"}}>
                        <div style={{color: "white"}}>HKUST Quant Trading Society</div>
                    </div>
                </div>

                    <div style={{ height: '96px', backgroundColor: 'white' }}>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start', height: '100%', width: 'calc(100% - 50px)', marginLeft: '50px', boxSizing: 'border-box' }}>
                            <Logo style={{ height: '60%', marginRight: '50px', paddingRight: '20px', borderRight: '3px solid #003366' }} />
                            <Title style={{ height: '60%', marginRight: '50px', paddingRight: '20px', borderRight: '3px solid #003366' }} />
                            <img src={quantSocietyLogo} alt="Quant Society Logo" style={{ height: '180%', marginRight: '50px' }} />
                            
                            {/* Adding a spacer div here */}
                            <div style={{ flexGrow: 1 }}></div>

                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexGrow: 2 }}>
                                <span style={{ color: '#9A1E23', marginRight: '30px', flex: '1', textAlign: 'right' }}>关于我们</span>
                                <span style={{ color: '#9A1E23', marginRight: '30px', flex: '1', textAlign: 'right' }}>交易大赛</span>
                                <span style={{ color: '#9A1E23', marginRight: '30px', flex: '1', textAlign: 'right' }}>社团顾问</span>
                                <span style={{ color: '#9A1E23', marginRight: '30px', flex: '1', textAlign: 'right' }}>合作伙伴</span>
                                <span style={{ color: '#9A1E23', marginRight: '30px', flex: '1', textAlign: 'right' }}>校友会</span>
                                <span style={{ color: '#9A1E23', marginRight: '30px', flex: '1', textAlign: 'right' }}>社团新闻</span>
                                {/* <div class="btn-group">
                                    <button type="button" class="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown" data-bs-display="static" aria-expanded="false">
                                        Right-aligned but left aligned when large screen
                                    </button>
                                    <ul class="dropdown-menu dropdown-menu-end dropdown-menu-lg-start">
                                        <li><button class="dropdown-item" type="button">Action</button></li>
                                        <li><button class="dropdown-item" type="button">Another action</button></li>
                                        <li><button class="dropdown-item" type="button">Something else here</button></li>
                                    </ul>
                                </div> */}
                                <div onClick={toggleDropdown}>
                                    <Earth style={{ textAlign: 'right'}}></Earth>
                                    <Triangle  style={{ color: '#9A1E23', marginRight: '30px', textAlign: 'left' }}></Triangle>
                                    {isOpen && (
                                        <ul style={{display: isOpen ? 'block' : 'none', position: "absolute", 
                                        backgroundColor: "#9A1E23", zIndex: "1",  right: "0", listStyleType: "none"}}>
                                            <li><a href="#">简体中文</a></li>
                                            <li><a href="#">繁體中文</a></li>
                                            <li><a href="#">English</a></li>
                                        </ul>
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