import React from 'react';
import HomeBanner from '../../assets/images/home-banner.jpg';
import './Banner.scss';

const Banner = ({ text, image }) => {
  return (
    <div className={`banner-container ${image === HomeBanner? 'home-banner':''}`}>
      <div className='banner-img' style={{background: `url(${image}) no-repeat center/cover` }}></div>
      <h2 className='banner-text'>{text}</h2>
    </div>
  );
};

export default Banner;
