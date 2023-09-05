import React from 'react';
import './header.css';
import CTA from '../CTA';
import ME from '../../assets/me.png';
import HeaderSocials from '../HeaderSocials';



const Header = () => {
  return (
    <header>
      <div className="container header__container"> 
        <h5>Hello, I am</h5>
        <h1>Ominyi Pauline</h1>
        <h5 className="text-light">Frontend Developer</h5>
        <CTA />

        <HeaderSocials className='header__socials' />

        <div className="me">
          <img src={ME} alt="me" />
        </div>

        <a href="#contact" className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
};

export default Header;
