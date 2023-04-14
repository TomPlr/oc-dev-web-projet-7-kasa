import React from 'react';
import kasaFooterLogo from '../../assets/logos/kasa-footer-logo.svg'
import "./Footer.scss"

const Footer = () => {
    return (
        <div className='footer-container'>
            <img src={kasaFooterLogo} alt="" className='footer-logo' />
            <p className='footer-text'>© 2020 Kasa. All rights reserved</p>
        </div>
    );
};

export default Footer;