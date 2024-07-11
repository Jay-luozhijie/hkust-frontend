import React from 'react';
import { ReactComponent as Logo } from '../img/hkust_logo.svg';
import { ReactComponent as Title } from '../img/Header-title_MAFM.svg';
import quantSocietyLogo from '../img/quant_society_logo.png';
import { ReactComponent as Earth } from '../img/globe-americas.svg';
import { ReactComponent as Triangle } from '../img/caret-down-fill.svg';

function Navbar() {
  return (
    <div>
        <header class="tp-header-height" style={{ height: '149px' }}>
            <div class="tp-header-top-3__area grey-bg" style={{height:'53px', backgroundColor: '#9A1E23'}}>
                <div class="container" style={{display: "flex", alignItems: "center", justifyContent: "flex-end", height: "100%", marginRight:"50px"}}>
                    <div style={{color: "white"}}>HKUST Quant Trading Society</div>
                </div>
            </div>

            {/* <div class="" style={{height:'96px', backgroundColor: 'white'}}>
                <div class="container" style={{display: "flex", alignItems: "center", justifyContent: "flex-start", height: "100%", width:"100%", marginLeft:"50px",marginRight:"100%", boxSizing: "border-box"}}>

                        <Logo style={{height: "60%", alignItems: "center", marginRight:"50px", paddingRight:"20px",borderRight: '3px solid #003366',}} />
                        <Title style={{height: "60%", alignItems: "center", marginRight:"50px", paddingRight:"20px",borderRight: '3px solid #003366',}} />
                        <img src={quantSocietyLogo} alt="Quant Society Logo" style={{height: '150%',marginRight: '50px',}}/>
                        <span style={{width:"500px"}}></span>
                        <span style={{color:"#9A1E23", marginRight:"30px", width:"100px"}}>关于我们</span>
                        <span style={{color:"#9A1E23", marginRight:"30px", width:"100px"}}>交易大赛</span>
                        <span style={{color:"#9A1E23", marginRight:"30px", width:"100px"}}>社团顾问</span>
                        <span style={{color:"#9A1E23", marginRight:"30px", width:"100px"}}>合作伙伴</span>
                        <span style={{color:"#9A1E23", marginRight:"30px", width:"100px"}}>校友会</span>
                        <span style={{color:"#9A1E23", marginRight:"30px", width:"100px"}}>社团新闻</span>
                </div>
            </div> */}

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

                                <Earth style={{ textAlign: 'right'}}></Earth>
                                <Triangle style={{ color: '#9A1E23', marginRight: '30px', textAlign: 'left' }}></Triangle>
                        </div>
                    </div>
                </div>

            {/* <div style={{ height: '96px', backgroundColor: 'white' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start', height: '100%', width: 'calc(100% - 50px)', marginLeft: '50px', boxSizing: 'border-box' }}>
                    <Logo style={{ height: '60%', marginRight: '50px', paddingRight: '20px', borderRight: '3px solid #003366' }} />
                    <Title style={{ height: '60%', marginRight: '50px', paddingRight: '20px', borderRight: '3px solid #003366' }} />
                    <img src={quantSocietyLogo} alt="Quant Society Logo" style={{ height: '180%', marginRight: '50px' }} />
                    <div style={{ flexGrow: 1 }}></div>
                    
                    <div style={{ display: 'flex', alignItems: 'right', justifyContent: 'space-between', width: '100%' }}>
                        <span style={{ color: '#9A1E23', marginRight: '30px', flexGrow: 1, textAlign: 'right' }}>关于我们</span>
                        <span style={{ color: '#9A1E23', marginRight: '30px', flexGrow: 1, textAlign: 'right' }}>交易大赛</span>
                        <span style={{ color: '#9A1E23', marginRight: '30px', flexGrow: 1, textAlign: 'right' }}>社团顾问</span>
                        <span style={{ color: '#9A1E23', marginRight: '30px', flexGrow: 1, textAlign: 'right' }}>合作伙伴</span>
                        <span style={{ color: '#9A1E23', marginRight: '30px', flexGrow: 1, textAlign: 'right' }}>校友会</span>
                        <span style={{ color: '#9A1E23', marginRight: '30px', flexGrow: 1, textAlign: 'right' }}>社团新闻</span>
                    </div>
                </div>
            </div> */}

           
        </header>
        {/* <nav class="navbar navbar-expand-lg bg-body-tertiary">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">Navbar</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div class="navbar-nav">
                    <a class="nav-link active" aria-current="page" href="#">Home</a>
                    <a class="nav-link active" href="#">Features</a>
                    <a class="nav-link active" href="#">Pricing</a>
                    <a class="nav-link active" href="#">Disabled</a>
                </div>
                </div>
            </div>
        </nav>
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">Navbar</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div class="navbar-nav">
                    <a class="nav-link active" aria-current="page" href="#">Home</a>
                    <a class="nav-link active" href="#">Features</a>
                    <a class="nav-link active" href="#">Pricing</a>
                    <a class="nav-link active" href="#">Disabled</a>
                </div>
                </div>
            </div>
        </nav> */}
    </div>
    // <nav class="navbar navbar-expand-lg bg-body-tertiary custom-navbar">
    //     <div class="container-fluid">
    //         <div class="navbar-row">
    //             <a class="navbar-brand" href="#">Navbar</a>
    //             <span class="navbar-text navbar-brand-right">HKUST Quant Trading Society</span>
    //             <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    //                 <span class="navbar-toggler-icon"></span>
    //             </button>
    //         </div>
    //         <div class="collapse navbar-collapse navbar-row" id="navbarNavAltMarkup">
    //             <div class="navbar-nav">
    //                 <a class="nav-link active" aria-current="page" href="#">Home</a>
    //                 <a class="nav-link" href="#">Features</a>
    //                 <a class="nav-link" href="#">Pricing</a>
    //                 <a class="nav-link disabled" aria-disabled="true">Disabled</a>
    //             </div>
    //         </div>
    //     </div>
    // </nav>
  );
}

export default Navbar;