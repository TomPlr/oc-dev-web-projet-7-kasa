import React from 'react';
import './Rating.scss';
import fullStar from '../../assets/icons/star-full.svg'
import emptyStar from '../../assets/icons/star-empty.svg'

const Rating = ({ rate }) => {
  const fullRate = [];
  const emptyRate = [];

  for (let index = 0; index < rate; index++) {
    fullRate.push(index);
  }

  for (let index = 0; index < 5 - rate; index++) {
    emptyRate.push(index);
  }

  return (
    <div className='rating'>
      {fullRate.map((index) => (
        <img key={index} src={fullStar} alt='star-full'/>
      ))}
      {emptyRate.map((index) => (
        <img key={index} src={emptyStar} alt='star-empty' />
      ))}
    </div>
  );
};

export default Rating;
