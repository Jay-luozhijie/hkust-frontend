import React from 'react';
import { useTranslation } from 'react-i18next';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import '../css/PartnerScreen.css';
import xianggangLogo from '../img/xianggang.png';
import MBALogo from '../img/MBA.png';
import tiannengLogo from '../img/tianneng.png';

function PartnerScreen() {
    const { t, i18n } = useTranslation();
    const partners = t('partners', { returnObjects: true });

    // 确认partners是一个数组
    if (!Array.isArray(partners)) {
        console.error('Partners is not an array:', partners);
        return <div>Loading or error...</div>; // 或者其他错误处理
    }

    const getTextStyle = () => {
        if (i18n.language === 'en') {
            return { fontSize: '28px' };
        } else {
            return { whiteSpace: 'nowrap' };
        }
    };

    return (
        <div className="partner">
            <div className="title" style={{ marginTop: '30px' }}>{t('partnerTitle')}</div>
            <div className="m-test-wrap">
                <Swiper
                    spaceBetween={50}
                    slidesPerView={'auto'}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                >
                    {partners.map((partner, index) => (
                        <SwiperSlide key={index}>
                            <div className="slide-item">
                                <div className="img">
                                    <img src={[tiannengLogo, MBALogo, xianggangLogo][index % 3]} alt={`${partner.name} Logo`} />
                                </div>
                                <h2 style={getTextStyle()}>{partner.name}</h2>
                                <p style={i18n.language === 'en' ? { fontSize: '16px' } : {}}>{partner.description}</p>
                                <a href={partner.link} target="_blank" rel="noopener noreferrer">
                                    <div className="bottom-arrow">→<br/>-</div>
                                </a>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
}

export default PartnerScreen;
