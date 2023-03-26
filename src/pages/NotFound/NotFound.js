import React from 'react';
import { useNavigate } from 'react-router-dom';
import './NotFound.scss'

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className='not-found-container'>
      <div className='not-found-information'>
        <h1 className='not-found-information__title'>404</h1>
        <p className='not-found-information__text'>Oups! La page que vous demandez n'existe pas</p>
        <p className='not-found-information__link' onClick={()=> navigate('/')}>Retourner sur la page d'accueuil</p>
      </div>
    </div>
  );
};

export default NotFound;
