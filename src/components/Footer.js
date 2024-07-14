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

function Footer() {
    return (
      <div>
          <footer class="tp-header-height" style={{
              width: '100%',
              minHeight: '150px',
              backgroundColor: '#9A1E23',
              position: 'relative',
              minWidth: '320px',
              overflow: 'hidden'
          }}>
                  <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'flex-start',
                      height: '100%',
                      width: 'calc(100% - 50px)',
                      marginLeft: '50px',
                      boxSizing: 'border-box'
                  }}>
                      <Logo style={{
                          width: '205px',
                          height: '68px',
                          marginRight: '50px',
                          marginLeft: '15px',
                          paddingRight: '20px',
                          position: 'relative',
                          top: '-10px'
                      }} />
                      <span style={{ color: 'white'}}>Copyright&copy; HKUST Quant Trading Society</span>
                      <div style={{ flexGrow: 1 }}></div>
                      <div style={{ color: 'white', marginLeft: '100px' }}>友情链接: <br/><a href="https://mafm.hkust.edu.hk/" style={{ color: 'white' }}>Crypto-Fintech Lab<br/>HKUST MAFM</a></div>
                      <div style={{ marginLeft: '100px' }}>
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
                                  <br/>
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
                                      https://www.linkedin.com/company/<br/>ust-quant-trading-society-limitted/
                                  </a>
                              </div>
                              
                          </div>
                      </div>
                      <div style={{display: "flex", flexDirection: "column", marginLeft:"30px", position: 'absolute', right: '25px', top: '25px'}}>
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
