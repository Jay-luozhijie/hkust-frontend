
import { Swiper, SwiperSlide } from 'swiper/react';
import xianggangLogo from '../img/xianggang.png';
import MBALogo from '../img/MBA.png';
import tiannengLogo from '../img/tianneng.png';
import '../css/PartnerScreen.css';
import 'swiper/css';
function PartnerScreen() {
  return (
  <div className="partner">
  	<div className="title" style={{ marginTop: '30px' }}>合作伙伴</div>
	<div className="m-test-wrap">
	 <Swiper
	      spaceBetween={50}
	      slidesPerView={3.5}
	      onSlideChange={() => console.log('slide change')}
	      onSwiper={(swiper) => console.log(swiper)}
	    >
	      <SwiperSlide>
			<div className="slide-item">
				<div className="img">
					<img src={tiannengLogo} alt="Quant Society Logo" style={{ }} />
				</div>
				<h2>天龙证券</h2>
				<p>天龙证券有限公司（简称“TLS”）于2020年8月在香港注册成立，是天龙金融集团成员之一，持有第4类（证券咨询）及第9类（资产管理）专业牌照。天龙证券致力于完善产品组合及服务，投资范围覆盖大中华地区，为高净值客户、家族办公室及机构客户提供全方位的投资管理服务，为他们量身定制方案，帮助他们准确把握信息密集型市场的脉搏，把握投资机遇，实现财富增值。</p>
				<div className="bottom-arrow">
					→<br/>-	

				</div>
			</div>
			
		  </SwiperSlide>
	      <SwiperSlide>
			  <div className="slide-item">
			  <div className="img">
			  	<img src={MBALogo} alt="Quant Society Logo" style={{}} />
			  </div>
			  	<h2 style={{ whiteSpace: 'nowrap' }}>香港工商管理硕士协会</h2>
				  <p>HKMBA协会成立于2014年，由香港八所大学的杰出MBA学生和校友，以及多位资深教授和商界名人作为指导顾问共同创立。作为一个非营利组织，香港MBA研究院将为MBA学生、校友和商界人士创造广阔的发展空间，并提供一个资源共享平台。</p>
				  <div className="bottom-arrow">
				  		→<br/>-	
				  </div>
			  </div>
			 
		  </SwiperSlide>
	      <SwiperSlide>
			  <div className="slide-item">
				  <div className="img">
					  <img src={xianggangLogo} alt="Quant Society Logo" style={{ }} />
				  </div>
				  <h2>香港资管通</h2>
				  <p>香港资管通为投资经理提供相应的项目咨询，力争做好资金与项目的有效沟通交互平台。“港科资管通领航基金”28日在香港成立，将致力于推动高校科研成果转化，助力香港国际创科中心建设。港科资管通领航基金项目核心投研团队均来自于海外常春藤及国内顶尖名校，均有丰富的量化基金投资及管理经验，对金融市场有着深刻的理解，立志于为客户带来长期、稳定、满意的投资回报。</p>
				  <div className="bottom-arrow">
				  	→<br/>-	
				  </div>
		      </div>
			  
		  </SwiperSlide>
	      <SwiperSlide>
	      			<div className="slide-item">
	      				<div className="img">
	      					<img src={tiannengLogo} alt="Quant Society Logo" style={{  }} />
	      				</div>
	      				<h2>天龙证券</h2>
	      				<p>天龙证券有限公司（简称“TLS”）于2020年8月在香港注册成立，是天龙金融集团成员之一，持有第4类（证券咨询）及第9类（资产管理）专业牌照。天龙证券致力于完善产品组合及服务，投资范围覆盖大中华地区，为高净值客户、家族办公室及机构客户提供全方位的投资管理服务，为他们量身定制方案，帮助他们准确把握信息密集型市场的脉搏，把握投资机遇，实现财富增值。</p>
	      				<div className="bottom-arrow">
	      					→<br/>-	
	      
	      				</div>
	      			</div>
	      			
	      </SwiperSlide>
		  <SwiperSlide>
				<div className="slide-item">
		  			<div className="img">
		  			  	<img src={MBALogo} alt="Quant Society Logo" style={{}} />
		  			</div>
		  			<h2 style={{ whiteSpace: 'nowrap' }}>香港工商管理硕士协会</h2>
		  			<p>HKMBA协会成立于2014年，由香港八所大学的杰出MBA学生和校友，以及多位资深教授和商界名人作为指导顾问共同创立。作为一个非营利组织，香港MBA研究院将为MBA学生、校友和商界人士创造广阔的发展空间，并提供一个资源共享平台。</p>
		  				<div className="bottom-arrow">
		  					→<br/>-	
		  					      
		  				</div> 
		  		</div>
		  </SwiperSlide>
	    </Swiper>
	</div>
  </div>
  );
}
export default PartnerScreen;

