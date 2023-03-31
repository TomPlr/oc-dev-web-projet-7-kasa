import React, { Fragment } from 'react';
import './Slideshow.scss';
import { useState } from 'react';

const Slideshow = ({ galerie }) => {
  const [imageIndex, setImageIndex] = useState(0);

  const increaseIndex = () => {
    imageIndex === galerie.length - 1
      ? setImageIndex(0)
      : setImageIndex(imageIndex + 1);
  };

  const decreaseIndex = () => {
    imageIndex === 0
      ? setImageIndex(galerie.length - 1)
      : setImageIndex(imageIndex - 1);
  };

  return (
    <div className='slideshow-container'>
          <img className='slideshow-image' src={galerie[imageIndex]} alt='' />
          {galerie.length > 1 && (
              
            <Fragment>
               <div className='arrow arrow__backward' onClick={decreaseIndex}></div>
               <div className='arrow arrow__forward' onClick={increaseIndex}></div>
               <div className='slideshow-counter'>
                 {imageIndex + 1}/{galerie.length}
               </div>     
            </Fragment>


          )
              

          }
     
    </div>
  );
};

export default Slideshow;
