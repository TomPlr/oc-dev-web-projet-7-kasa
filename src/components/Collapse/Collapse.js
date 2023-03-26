import React, { useState } from 'react';
import './Collapse.scss';

const Collapse = ({ title, description }) => {
  const [isOpen, setIsOpen] = useState(false);

  
  return (
    <div className='collapse-container'>
      <div className='collapse-title' onClick={() => setIsOpen(!isOpen)}>
        <p className='collapse-title__text'>{title}</p>
        <div className= { isOpen ? 'collapse-title__image collapse-title__image--up': 'collapse-title__image' }></div>
      </div>
      {isOpen && <div className='collapse-description'>{description}</div>}
    </div>
  );
};

export default Collapse;
