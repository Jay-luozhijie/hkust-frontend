import React from 'react';
import aluminiPageBackground from "../../img/AluminiPageBackground.png"
import GuangzhouImg from "../../img/Guangzhou.jpg"

function Guangzhou() {
    return (
        <div>
            <div class="home-page-container" style={{height:"734px", overflow: "hidden", position: "relative", margin:"0"}}>
                <div class="homePageBackground" style={{overflow: "hidden", position: "absolute", left:"50px"}}>
                    <img src={aluminiPageBackground} ></img>
                </div>
                <img src={GuangzhouImg}></img>
                <div class="homePageIntro" style={{width:"500px", marginLeft:"200px"}}>
                    <div>广州校友会</div>
                    <div>广州校友会成立于2024年7月1日，现任主要负责人为李思远先生，联系邮箱为lisiyuansven@foxmail.com</div>
                    
                </div>
            </div>
        </div>
      
    );
  }
  export default Guangzhou;