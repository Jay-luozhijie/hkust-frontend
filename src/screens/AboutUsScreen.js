import React from 'react';
import { useTranslation } from 'react-i18next';
import '../css/aboutUs.scss';
import { useMediaQuery } from 'react-responsive';
import breakpoints from '../config/breakpoints';
import quantSocietyLogo from '../img/quant_society_logo.png';
import avatar1 from '../img/avatar/luoguangda.png';
import avatar2 from '../img/avatar/wangjiaheng.png';
import avatar3 from '../img/avatar/zhangyawei.png';
import avatar4 from '../img/avatar/xiongjiarui.png';
import avatar5 from '../img/avatar/linheyi.png';
import avatar6 from '../img/avatar/lisiyuan.png';
import avatar7 from '../img/avatar/luimanhin.png';
import avatar8 from '../img/avatar/yuruoyan.png';
import avatar9 from '../img/avatar/likachun.png';
import avatar10 from '../img/avatar/gongyanbin.png';

const associationMemberData = [
  { id: 1, name: 'LUO Guangda', job: 'President', introduce1: 'Master of Financial Mathematics,', introduce2: 'Hong Kong University of Science and Technology', avatarSrc: avatar1 },
  { id: 2, name: 'Wang Jiaheng', job: 'Vice President', introduce1: 'Master of Financial Mathematics,', introduce2: 'Hong Kong University of Science and Technology', avatarSrc: avatar2 },
  { id: 3, name: 'Zhang Yawei', job: 'General Secretary', introduce1: 'Master of Public Management,', introduce2: 'Hong Kong University of Science and Technology', avatarSrc: avatar3 },
  { id: 4, name: 'Xiong Jiarui', job: 'General Secretary', introduce1: 'Master of Financial Mathematics,', introduce2: 'Hong Kong University of Science and Technology', avatarSrc: avatar4 },
  { id: 5, name: 'Lin Heyi', job: 'General Secretary', introduce1: 'Master of Financial Mathematics,', introduce2: 'Hong Kong University of Science and Technology', avatarSrc: avatar5 },
  { id: 6, name: 'Li Siyuan', job: 'General Secretary', introduce1: 'Master of Philosophy in Fintech,', introduce2: 'Hong Kong University of Science and Technology', avatarSrc: avatar6 },
  { id: 7, name: 'Lui Man Hin', job: 'General Secretary', introduce1: 'Master of Financial Mathematics,', introduce2: 'Hong Kong University of Science and Technology', avatarSrc: avatar7 },
  { id: 8, name: 'Yu Ruoyan', job: 'General Secretary', introduce1: 'Master of Public Management,', introduce2: 'Hong Kong University of Science and Technology', avatarSrc: avatar8 },
  { id: 9, name: 'Li Ka Chun', job: 'General Secretary', introduce1: 'Master of Financial Mathematics,', introduce2: 'Hong Kong University of Science and Technology', avatarSrc: avatar9 },
  { id: 10, name: 'Gong Yanbin', job: 'General Secretary', introduce1: 'Master of Financial Mathematics,', introduce2: 'Hong Kong University of Science and Technology', avatarSrc: avatar10 },
];

const previousMemberData = [
  {
    id: 1,
    stage: {
      zh: '2024届成员',
      en: '2024 Members',
      tc: '2024屆成員'
    },
    introduce: {
      zh: '罗广大（主席），王佳恒（副主席），李思远（常务秘书）',
      en: 'LUO Guangda (President), WANG Jiaheng (Vice President), LI Siyuan (General Secretary)',
      tc: '羅廣大（主席），王佳恒（副主席），李思遠（常務秘書）'
    }
  },
  {
    id: 2,
    stage: {
      zh: '2023届成员',
      en: '2023 Members',
      tc: '2023屆成員'
    },
    introduce: {
      zh: '罗广大（主席），王佳恒（副主席）',
      en: 'LUO Guangda (President), WANG Jiaheng (Vice President)',
      tc: '羅廣大（主席），王佳恒（副主席）'
    }
  }
];

function AboutUsScreen() {
  const { t, i18n } = useTranslation();
  const isMobile = useMediaQuery({ query: breakpoints.mobile });

  const getTranslatedText = (i18n, zhText, enText, tcText) => {
    console.log('i18n.language:', i18n.language); // 添加这一行日志
    switch (i18n.language) {
      case 'en':
        return enText;
      case 'tc':
        return tcText;
      default:
        return zhText;
    }
  };
  
  const previousMembersTitleText = getTranslatedText(i18n, '往届成员', 'Previous Members', '往屆成員');

  const tabItemStyle = {
    fontSize: i18n.language === 'en' ? '17px' : undefined,
    whiteSpace: i18n.language === 'en' ? 'nowrap' : undefined
  };

  const associationMemberListStyle = {
    marginLeft: isMobile ? '50px' : '0'
  };

  const avatarOuterStyle = {
    width: isMobile ? '139px' : '193px',
    height: isMobile ? '164px' : '265px'
  };

  const headerStyle = {
    fontSize: i18n.language === 'en' ? '24px' : undefined,
  };

  const titleStyle = {
    fontSize: i18n.language === 'en' ? '20px' : undefined,
  };
  
  return (
    <div className="aboutus-wrap">
      {!isMobile && (
        <div className="tab-container">
          <div className="logo">
            <img src={quantSocietyLogo} alt="Quant Society Logo" />
          </div>
          <div className="tab-list">
            <div className="tab-item active" style={tabItemStyle}>
              {getTranslatedText(i18n, '协会成员', 'Association Members', '協會成員')}
            </div>
            <div className="tab-item" style={tabItemStyle}>
              {getTranslatedText(i18n, '往届成员', 'Previous Members', '往屆成員')}
            </div>
          </div>
        </div>
      )}
      <div className="member-container">
      <div className="header" style={headerStyle}>
          {getTranslatedText(i18n, '成员与运营团队', 'Members and Operating Team', '成員與運營團隊')}
        </div>
        <div className="title" style={titleStyle}>
          {getTranslatedText(i18n, '协会成员', 'Association Members', '協會成員')}
        </div>
        <div className="association-member-list" style={associationMemberListStyle}>
          {associationMemberData.map((item) => (
            <div key={item.id} className="member-item">
              <div className="avatar-outer" style={avatarOuterStyle}>
                <img src={item.avatarSrc} alt={item.name} />
              </div>
              <div className="member-info">
                <div className="job">{getTranslatedText(item.job, item.job, item.job)}</div>
                <div className="name">{item.name}</div>
                <div className="introduce1">{getTranslatedText(item.introduce1, item.introduce1, item.introduce1)}</div>
                <div className="introduce2">{getTranslatedText(item.introduce2, item.introduce2, item.introduce2)}</div>
              </div>
            </div>
          ))}
        </div>
        <div className="past-members-section">
          <div className="title">{previousMembersTitleText}</div>
          <div className="previous-member-list">
          {previousMemberData.map((item) => (
              <div key={item.id} className="member-item">
                <div className="stage">{getTranslatedText(i18n, item.stage.zh, item.stage.en, item.stage.tc)}</div>
                <div className="introduce">{getTranslatedText(i18n, item.introduce.zh, item.introduce.en, item.introduce.tc)}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUsScreen;
