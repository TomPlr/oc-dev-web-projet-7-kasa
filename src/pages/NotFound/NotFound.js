import React from 'react';
import './NotFound.scss'

const NotFound = () => {
  return (
    <div className='container'>

      <section>
        <h1>404</h1>
        <p>Oups! La page que vous demandez n'existe pas</p>
      </section>
      <footer>
      <p>Retourner sur la page d'accueuil</p>
      </footer>
    </div>
  );
};

export default NotFound;
