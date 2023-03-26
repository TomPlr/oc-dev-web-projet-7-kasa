import React from 'react';
import housing from '../../data/housing.json';
import './Card.scss';

const Card = () => {
  return housing.map((element) => (
    <div key={element.id} className='card-container'>
      <img className='card-image' src={element.cover} alt={element.title} />

      <div className='card-title-container'>
        <h3 className='card-title'>{element.title}</h3>
      </div>
    </div>
  ));
};

export default Card;
