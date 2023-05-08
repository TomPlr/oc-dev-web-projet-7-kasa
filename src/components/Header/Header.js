import React from 'react';
import './Header.scss';
import logo from '../../assets/logos/kasa-main-logo.svg';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
const Header = () => {
  const location = useLocation();

  return (
    <header className='header'>
      <img src={logo} alt='kasa-main-logo' className='header__logo' />
      <nav className='navigation-list'>
        <Link
          to={'/'}
          className={`navigation-list__element ${location.pathname === '/' ? "is-active" : ""}`}
        >
          ACCUEIL
        </Link>
        <Link
          to={'/about'}
          className={`navigation-list__element ${location.pathname === '/about' ? "is-active" : ""}`}
        >
          A PROPOS
        </Link>
      </nav>
    </header>
  );
};

export default Header;
