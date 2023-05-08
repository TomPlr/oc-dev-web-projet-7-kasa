import React, { Fragment } from 'react';
import { useState } from 'react';
import './Slideshow.scss';

const Slideshow = ({ gallery }) => {
  const [imageIndex, setImageIndex] = useState(0);

  const increaseIndex = () => {
    imageIndex === gallery.length - 1
      ? setImageIndex(0)
      : setImageIndex(imageIndex + 1);
  };

  const decreaseIndex = () => {
    imageIndex === 0
      ? setImageIndex(gallery.length - 1)
      : setImageIndex(imageIndex - 1);
  };

  return (
    <div className='slideshow-container'>
          <img className='slideshow-image' src={gallery[imageIndex]} alt='' />
          {gallery.length > 1 && (
              
            <Fragment>
               <div className='arrow arrow__backward' onClick={decreaseIndex}></div>
               <div className='arrow arrow__forward' onClick={increaseIndex}></div>
               <div className='slideshow-counter'>
                 {imageIndex + 1}/{gallery.length}
               </div>     
            </Fragment>


          )
              

          }
     
    </div>
  );
};

export default Slideshow;
