import React from 'react';
import { useNavigate } from 'react-router-dom';
import './NotFound.scss';

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className='not-found-container'>
      <div className='not-found-information'>
        <div>
          <h1 className='not-found-information__title'>404</h1>
          <p className='not-found-information__text'>
            Oups! La page que vous demandez n'existe pas.
          </p>
        </div>
        <div>
          <p
            className='not-found-information__link'
            onClick={() => navigate('/')}
          >
            Retourner sur la page d'accueil
          </p>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
