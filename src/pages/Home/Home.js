import React from 'react';
import HomeBanner from '../../assets/images/home-banner.jpg';
import Banner from '../../components/Banner/Banner';
import Card from '../../components/Card/Card';
import './Home.scss';

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
