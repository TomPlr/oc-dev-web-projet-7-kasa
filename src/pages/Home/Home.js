import React from 'react';
import Banner from '../../components/Banner/Banner';
import HomeBanner from '../../assets/images/home-banner.jpg'
import './Home.scss';
import Card from '../../components/Card/Card';

const Home = () => {
  return (
    <div>
      <div className='home-banner'>
        <Banner text='Chez vous, partout et ailleurs' image={HomeBanner}/>
      </div>
      <div className="cards-container">
        <Card/>
      </div>
    </div>
  );
};

export default Home;
