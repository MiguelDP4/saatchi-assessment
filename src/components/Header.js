import React from 'react';
import logo from '../img/logo.png';
import LinkButton from './LinkButton';

const Header = props => {
  const { activeTab } = props;
  return (
    <header>
      <img src={logo}></img>
      <ul className="header-links">
        <LinkButton
          anchor='inicio' 
          active={activeTab == 'inicio' ? true : false}
          text='Inicio'
        />
        <LinkButton
          anchor='nuestra-cultura' 
          active={activeTab == 'nuestra-cultura' ? true : false}
          text='Nuestra Cultura'
        />
        <LinkButton
          anchor='nosotros' 
          active={activeTab == 'nosotros' ? true : false}
          text='Nosotros'
        />
        <LinkButton
          anchor='servicios' 
          active={activeTab == 'servicios' ? true : false}
          text='Servicios'
        />
        <LinkButton
          anchor='empleo' 
          active={activeTab == 'empleo' ? true : false}
          text='Empleo'
        />
        <LinkButton
          anchor='nuestras-agencias' 
          active={activeTab == 'nuestras-agencias' ? true : false}
          text='Nuestras Agencias'
        />
        <LinkButton
          anchor='contacto' 
          active={activeTab == 'contacto' ? true : false}
          text='Contacto'
        />
      </ul>
    </header>
  );
}

export default Header;
