import React from 'react';
import aluminiPageBackground from "../../img/AluminiPageBackground.png"
import HongkongImg from "../../img/Hongkong.png"

function Hongkong() {
    return (
        <div>
           <div class="home-page-container" style={{height:"734px", overflow: "hidden", position: "relative", margin:"0"}}>
            <div class="homePageBackground" style={{overflow: "hidden", position: "absolute", left:"50px"}}>
                <img src={aluminiPageBackground} ></img>
            </div>
            <img src={HongkongImg}></img>
            <div class="homePageIntro" style={{width:"500px", marginLeft:"200px"}}>
                <div>香港校友会</div>
                <div>香港校友会成立于2024年7月1日，现任主要负责人为李思远先生，联系邮箱为lisiyuansven@foxmail.com</div>
                
            </div>
            <div class="homePageIntro" style={{width:"500px", marginLeft:"200px"}}>
               
            </div>
           
            </div>
        </div>
      
    );
  }
  export default Hongkong;