import React from 'react';
import '../css/aboutUs.scss';
import quantSocietyLogo from '../img/quant_society_logo.png';
import ThemeProvider from 'react-bootstrap/ThemeProvider';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const associationMemberData = [
  { id: 1, name: 'LUO Guangda', job: 'President', introduce: 'Master of Financial Mathematics,Hong Kong University of science and Technology' , avatarSrc: '' },
  { id: 2, name: 'Wang Jiaheng', job: 'Vice President', introduce: 'Master of Financial Mathematics,Hong Kong University of science and Technology' , avatarSrc: '' },
  { id: 3, name: 'Zhang Yawei', job: 'General Secretary', introduce: 'Master of Public Management,Hong Kong University of science and Technology' , avatarSrc: '' },
  { id: 4, name: 'Xiong Jiarui', job: 'General Secretary', introduce: 'Master of Financial Mathematics,Hong Kong University of science and Technology' , avatarSrc: '' },
  { id: 5, name: 'Lin Heyi', job: 'General Secretary', introduce: 'Master of Financial Mathematics,Hong Kong University of science and Technology' , avatarSrc: '' },
  { id: 6, name: 'LUO Guangda', job: 'President', introduce: 'Master of Financial Mathematics,Hong Kong University of science and Technology' , avatarSrc: '' },
  { id: 7, name: 'Wang Jiaheng', job: 'Vice President', introduce: 'Master of Financial Mathematics,Hong Kong University of science and Technology' , avatarSrc: '' },
  { id: 8, name: 'Zhang Yawei', job: 'General Secretary', introduce: 'Master of Public Management,Hong Kong University of science and Technology' , avatarSrc: '' },
  { id: 9, name: 'Xiong Jiarui', job: 'General Secretary', introduce: 'Master of Financial Mathematics,Hong Kong University of science and Technology' , avatarSrc: '' },
  { id: 10, name: 'Lin Heyi', job: 'General Secretary', introduce: 'Master of Financial Mathematics,Hong Kong University of science and Technology' , avatarSrc: '' },
]
const previousMemberData = [
  { id: 1, stage: '2024届成员', introduce: '罗广大（主席），王佳恒（副主席），李思远（常务秘书）' },
  { id: 2, stage: '2023届成员', introduce: '罗广大（主席），王佳恒（副主席）' },
]
function AboutUsScreen() {
  return (
    <div className="aboutus-wrap">
      <div className='tab-container'>
        <div className='logo'>
          <img src={quantSocietyLogo}/>
        </div>
        <div className='tab-list'>
          <div className='tab-item active'>协会成员</div>
          <div className='tab-item'>往届成员</div>
        </div>
      </div>
      <div className='member-container'>
        <div className='header'>成员与运营团队</div>
        <div className='title'>协会成员</div>
        <div className='association-member-list'>
          <Container>
            <Row>
              {associationMemberData.map((item) => (
                <Col key={item.id} xs={6} sm={6} md={4} lg={4} xl={3} xxl={3}>
                  <div className='member-item'>
                    <div className='avatar-outer'>
                      <img src={item.avatarSrc}/>
                    </div>
                    <div className='member-info'>
                      <div className='job'>{item.job}</div>
                      <div className='name'>{item.name}</div>
                      <div className='introduce'>{item.introduce}</div>
                    </div>
                  </div>
                </Col>
              ))}
            </Row>
          </Container>
        </div>
        <div className='title'>往届成员</div>
        <div className='pervious-member-list'>
          {previousMemberData.map((item) => (
            <div key={item.id} className='member-item'>
              <div className='stage'>{item.stage}</div>
              <div className='introduce'>{item.introduce}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AboutUsScreen;
