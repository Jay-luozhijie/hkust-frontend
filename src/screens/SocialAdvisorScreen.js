import React from 'react';
import '../css/SocialAdvisor.scss';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Rectangle23 from '../img/Rectangle23.png';
import Rectangle25 from '../img/Rectangle25.png';
import Rectangle26 from '../img/Rectangle26.png';
const previousMemberData = [
  { id: 1, name: '陈卡你 教授', img:Rectangle23,job:'协会理事长',introduce: '陈卡你教授目前担任香港科技大学金融数学硕士课程主任以及风险管理与商业智能课程联合主任。他于1994年获得纽约市哥伦比亚大学统计学博士学位，并于1990年和1987年分别获得北京大学的理学硕士和理学学士学位。陈卡你教授在金融数学领域拥有数十年的研究和教学经验。' },
  { id: 2, name: '汪洋 教授', img:Rectangle25,job:'荣誉理事',introduce: '汪洋教授自2020年以来一直担任香港科技大学副校长，国际知名的学者，研究领域广泛。汪洋教授与陈卡你教授和李北先生共同签署了校企合作备忘录。。他于1994年获得纽约市哥伦比亚大学统计学博士学位，并于1990年和1987年分别获得北京大学的理学硕士和理学学士学位。陈卡你教授在金融数学领域拥有数十年的研究和教学经验。'},
  { id: 3, name: '李北 先生',img:Rectangle26,job:'协会监事长',introduce:'李北先生，天龙证券股份有限公司执行总裁，香港MBA协会会长。李北先生在证券行业拥有多年的经验，并积累了丰富的人脉资源，一直以来与香港科技大学保持着长期且深入的关系。2023年，他代表的富通香港有限公司成功与香港科技大学签署了校企合作谅解备忘录。。他于1994年获得纽约市哥伦比亚大学统计学博士学位，并于1990年和1987年分别获得北京大学的理学硕士和理学学士学位。陈卡你教授在金融数学领域拥有数十年的研究和教学经验。'}
]
function SocialAdvisorScreen() {
  return (
   <div className="SocialAdvisor">
		<div className="title">
			社会顾问
		</div>
		  <Row>
		    {previousMemberData.map((item) => (
		      <Col key={item.id} xs={12} sm={6} md={4} lg={4} xl={4} xxl={4}>
		       <div className="lists">
				 <div className="lists-item">
					 <img src={item.img}/>
					 <div className="bottom_content">
						<h3 className="name">{item.name}</h3>
						<p className="job">{item.job}</p>
					 </div>
				 </div>
				 <p className="label">{item.introduce}</p>
		       </div>
		      </Col>
		    ))}
		  </Row>
   </div>
  );
}
export default SocialAdvisorScreen;