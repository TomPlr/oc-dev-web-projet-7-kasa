import React from 'react';
import { useNavigate } from 'react-router-dom';
import housing from '../../data/housing.json';
import './Card.scss';

const Card = () => {
  const navigate = useNavigate();
  const navigateToHousing = (cardId) => {
    navigate(`/housing/${cardId}`)
  }

  return housing.map((element) => (
    <div
      key={element.id}
      className='card-container'
      onClick={()=> navigateToHousing(element.id)}
 
    >
      <img className='card-image' src={element.cover} alt={element.title} />

      <div className='card-title-container'>
        <h3 className='card-title'>{element.title}</h3>
      </div>
    </div>
  ));
};

export default Card;
