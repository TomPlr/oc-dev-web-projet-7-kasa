import React from 'react';
import './Header.scss';
import logo from '../../assets/logos/kasa-main-logo.svg';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
const Header = () => {
  const location = useLocation()

  return (
    <header className='header'>
      <img src={logo} alt='kasa-main-logo' className='header__logo' />
      <nav className='navigation-list'>
        <Link to={'/'} className={location.pathname === "/" ? 'is-active': 'navigation-list__element' }>
          Accueil
        </Link>
        <Link to={'/about'} className={location.pathname === "/about" ? 'is-active': 'navigation-list__element' }>
          À Propos
        </Link>
      </nav>
    </header>
  );
};

export default Header;
