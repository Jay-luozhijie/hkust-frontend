import React from 'react';
import { ReactComponent as Logo } from '../img/hkust_white_logo.svg';
import { ReactComponent as Title } from '../img/Header-title_MAFM.svg';
import quantSocietyLogo from '../img/quant_society_logo.png';
import { ReactComponent as Earth } from '../img/globe-americas.svg';
import { ReactComponent as Triangle } from '../img/caret-down-fill.svg';
import { ReactComponent as Envelope } from '../img/envelope.svg'
import { ReactComponent as Linkedin } from '../img/Linkedin_logo.svg'
import { ReactComponent as MsgIcon } from '../img/msg_icon.svg'
import { ReactComponent as Rectangle } from '../img/Rectangle.svg'

function Footer() {
  return (
    <div>
        <footer class="tp-header-height" style={{ height: '150px', backgroundColor: '#9A1E23' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start', height: '100%', width: 'calc(100% - 50px)', marginLeft: '50px', boxSizing: 'border-box' }}>
                    <Logo style={{ height: '30%', marginRight: '50px', paddingRight: '20px'}} />
                    <span style={{ color: 'white'}}>Copyright&copy; HKUST Quant Trading Society</span>
                    <div style={{ flexGrow: 1 }}></div>
                    <div style={{ color: 'white' }}>友情链接: <br></br><a href="https://mafm.hkust.edu.hk/"style={{ color: 'white' }}>Crypto-Fintech Lab<br></br>HKUST MAFM</a></div>
                    <div>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start', height: '80%', width: 'calc(100% - 50px)', marginLeft: '50px', boxSizing: 'border-box' }}>
                            <Envelope></Envelope>
                            <div>
                                <span style={{ color: 'white' }}>official@ustquant.hk</span>
                                <br></br>
                                <span style={{ color: 'white' }}>secretary@ustquant.hk</span>
                            </div>
                            
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start', height: '80%', width: 'calc(100% - 50px)', marginLeft: '50px', boxSizing: 'border-box' }}>
                            <Linkedin></Linkedin>
                            <div>
                                <a style={{ color: 'white' }} href="https://www.linkedin.com/company/ust-quant-trading-society-limitted/">
                                https://www.linkedin.com/company/ust-<br></br>quant-trading-society-limitted/
                                </a>
                            </div>
                            
                        </div>
                    </div>
                    <div style={{display: "flex", flexDirection: "column", marginLeft:"50px"}}>
                        <MsgIcon></MsgIcon>
                        <Rectangle></Rectangle>
                    </div>
                    <div style={{ flexGrow: 1 }}></div>

                    
                    
                </div>
        </footer>
    </div>
  );
}

export default Footer;