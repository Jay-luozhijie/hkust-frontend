import React, { useState } from 'react';
import "../css/introduce.scss"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Group85 from '../img/Group85.png';
import Group75 from '../img/Group75.png';
import Group31 from '../img/Group31.png';
import Vector from '../img/Vector.png';

const DataList = [
  { id: 1, title: '行业联系', name:'Industry Connection', introduce: ["通过职业招聘会和校友网络活动建立有效联系","举办量化主题分享会","目标：建立有效的行业联系"]  },
  { id: 2, title:'交易比赛 ', name: ' Trading Competition', introduce: ['成为塑造全球量化交易未来领袖的引擎，通过建立一个开放的全球知识共享网络，推动行业的革新与进步。'] },
  { id: 3, title:'量化基金孵化',name: 'Quant Fund Incubation',introduce: ['为优秀策略筹集和启动资金']},
]
const newsData_2024=[
	{id:1,time:'JAN',title:'第二届战略竞赛',small:'预计一月举行'},
	{id:2,time:'FEB',title:'',small:''},
	{id:3,time:'MAR',title:'',small:''},
	{id:4,time:'APR',title:'',small:''},
	{id:5,time:'MAY',title:'第三届战略竞赛',small:'预计五月举行'},
	{id:6,time:'JUN',title:'',small:''},
	{id:7,time:'JUL',title:'',small:''},
	{id:8,time:'AUG',title:'',small:''},
	{id:9,time:'SEP',title:'',small:''},
	{id:10,time:'OCT',title:'量化分析人才招聘会',small:'针对0fin&Mafm项目'},
	{id:11,time:'NOV',title:'',small:''},
	{id:12,time:'DEC',title:'',small:''}
]

const newsData_2025=[
	{id:1,time:'JAN',title:'',small:''},
	{id:2,time:'FEB',title:'',small:''},
	{id:3,time:'MAR',title:'',small:''},
	{id:4,time:'APR',title:'管理团队会议',small:'制定发展计划'},
	{id:5,time:'MAY',title:'',small:''},
	{id:6,time:'JUN',title:'',small:''},
	{id:7,time:'JUL',title:'开幕式',small:'预计七月中旬举行'},
	{id:8,time:'AUG',title:'',small:''},
	{id:9,time:'SEP',title:'第一届战略竞赛',small:'预计九月举行'},
	{id:10,time:'OCT',title:'',small:''},
	{id:11,time:'NOV',title:'',small:''},
	{id:12,time:'DEC',title:'',small:''}
]

function IntroduceScreen() {
	let [active,setActive]=useState(1)
	const newsData=active==1?newsData_2024:newsData_2025
  return (
   <div className="introduce">
		<div className="banner">
		   <h1 className="h1">港科宽图</h1>
		   <p className="label">HKUST Quant Trading Society</p>
		   <p className="info">通过知识传递、人脉拓展和竞赛实践， 赋能未来量化金融领袖</p>
		</div>
		<div className="container-box">
			<div className="box">
					<div className="container-item">
						 <div className="title">使命</div>
						 <img src={Group85} className="line-img"/>
						 <img src={Group75} className="big-img"/>
						 <p className="text">桥接学校与企业，通过学术创新推动量化领域的实际应用，构建国际合作与交流的平台，培养具有前瞻性和创新能力的量化专业人才。</p>
					</div>
					<div className="container-item">
						 <div className="title">愿景</div>
						 <img src={Group85} className="line-img"/>
						 <img src={Vector} className="big-img"/>
						 <p className="text">成为塑造全球量化交易未来领袖的引擎，通过建立一个开放的全球知识共享网络，推动行业的革新与进步。</p>
					</div>
					<div className="container-item">
						 <div className="title">社团文化</div>
						 <img src={Group85} className="line-img"/>
						 <img src={Group31} className="big-img"/>
						 <p className="text">创新驱动，资源共享，科技前沿 —— 一起探索未来的可能性。</p>
					</div>
			</div>
		</div>
		<div className="active-box">
			<div className="title">活动时间线</div>
			<div className="time-line">
			<div onClick={()=>setActive(active=1)} className={active==1?'time active':'time'}>2024</div>
			<div onClick={()=>setActive(active=2)} className={active==2?'time active':'time'}>2025</div>
			</div>
			<div className="example">
				<div className="steps">	
				   {newsData.map((item) => (
						<div className="step">
							<div className="step__top">
								<div className="step__title">{item.title}</div>
								<div className="step__small_title">{item.small}</div>
							</div>
							<div className="step__head">
								<div className="step__line"></div>
								<div className={item.title!=''?'step__icon_active step__icon':'step__icon'}></div>
							</div>
							<div className="step__bottom">
								<div className="step__description">{item.time}</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
		<div className="services">
		
		
			<div className="title">主要服务</div>
			  <Row>
			   
			      <Col xs={12} sm={12} md={12}>
			        <div className='services-item'>
			           <div className="big-title">
					     <p className="title">行业联系</p>
						 <p className="label">Industry Connection</p>
					   </div>
					    <Row>
						   <Col xs={12} sm={12} md={12}>
							   <ul className="ul">
									<li>通过职业招聘会和校友网络活动建立有效联系</li>
									<li>举办量化主题分享会</li>
									<li>目标：建立有效的行业联系</li>
								</ul>
						   </Col>
					   </Row>
			        </div>
			      </Col> 
				  <Col xs={12} sm={12} md={12}>
				    <div className='services-item'>
				       <div className="big-title">
							<p className="title">交易比赛</p>
							<p className="label">Trading Competition</p>
						</div>
						<Row>
							<Col xs={12} sm={12} md={4}>
								<div className="small-title">策略阶段 Strategies</div>
								<ul className="ul">
									<li>学生联系</li>
									<li>导师指导项目</li>
									<li>提供量化策略支持</li>
								</ul>
							</Col>
							<Col xs={12} sm={12} md={4} className="px-4 custom-px">
							<div className="small-title">选择阶段 Selection</div>
							<ul className="ul">
								<li>通过回测和模拟交易测试高回报策略</li>
								<li>选择优秀的策略 </li>
							</ul>
							</Col>
							<Col xs={12} sm={12} md={4} className="px-4 custom-px">
							<div className="small-title">比赛阶段 Competition</div>
							<ul className="ul">
								<li>举办交易比赛</li>
								<li>每季进行为期三个月的交易</li>
								<li>目标：丰富量化基金管理经验</li>
							</ul>
							</Col>
						</Row>
				    </div>
				  </Col>
				  <Col xs={12} sm={12} md={12}>
				    <div className='services-item'>
				       <div className="big-title">
				  					     <p className="title">量化基金孵化</p>
				  						 <p className="label">Quant Fund Incubation</p>
				  					   </div>
				  					    <Row>
				  						   <Col xs={12} sm={12} md={12}>
				  							   <ul className="ul">
				  									<li>为优秀策略筹集和启动资金</li>
				  									
				  								</ul>
				  						   </Col>
				  					   </Row>
				    </div>
				  </Col>
		
			  </Row>
	
		</div>
   </div>
  );
}
export default IntroduceScreen;