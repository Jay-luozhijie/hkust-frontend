import React from 'react';
import { useTranslation } from 'react-i18next';
import '../css/SocialAdvisor.scss';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Rectangle23 from '../img/Rectangle23.png';
import Rectangle25 from '../img/Rectangle25.png';
import Rectangle26 from '../img/Rectangle26.png';
import Rectangle95 from '../img/Rectangle95.png';

function SocialAdvisorScreen() {
  const { t } = useTranslation();
  const members = t('members', { returnObjects: true });

  console.log(members); // 调试输出查看members的内容

  if (!Array.isArray(members)) {
    console.error('Members is not an array:', members);
    return <div>Error: Members data is not an array.</div>;
  }

  return (
   <div className="SocialAdvisor">
    <div className="title">
      {t('socialAdvisorTitle')}
    </div>
    <Row>
      {members.map((member, index) => (
        <Col key={index} xs={12} sm={12} md={12} lg={12} xl={12} xxl={12}>
         <div className="lists">
           <div className="lists-item">
            
              <img src={[Rectangle25, Rectangle95, Rectangle23, Rectangle26][index]}/>
              <div className="right">
                <div className="bottom_content">
                  <h3 className="name">{member.name}</h3>
                  <p className="job">{member.job}</p>
                </div>
                <p className="label">{member.introduce}</p>
              </div>
            
           </div>
         </div>
        </Col>
      ))}
    </Row>
   </div>
  );
}

export default SocialAdvisorScreen;
