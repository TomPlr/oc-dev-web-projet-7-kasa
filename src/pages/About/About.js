import React from 'react';
import Banner from '../../components/Banner/Banner';
import Data from '../../data/aboutData.json';
import Collapse from '../../components/Collapse/Collapse';
import AboutBanner from '../../assets/images/about-banner.jpg';
import './About.scss';

const About = () => {
  return (
    <div>
      <div className='about-banner'>
        <Banner image={AboutBanner} />
      </div>
      <div className='about-collapse'>
        {Data.map((collapse) => (
          <Collapse
            key={collapse.id}
            title={collapse.title}
            description={collapse.text}
            opened={collapse === Data[0] ? true : false}
          />
        ))}
      </div>
    </div>
  );
};

export default About;
