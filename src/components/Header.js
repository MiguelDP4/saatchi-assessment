import React from 'react';
import logo from '../img/logo.png';
import LinkButton from './LinkButton';

const Header = props => {
  const { activeTab, changeTab } = props;
  return (
    <header>
      <img src={logo}></img>
      <ul className="header-links">
        <LinkButton
          anchor='inicio' 
          active={activeTab == 'inicio' ? true : false}
          text='Inicio'
          changeTab={changeTab}
        />
        <LinkButton
          anchor='nuestra-cultura' 
          active={activeTab == 'nuestra-cultura' ? true : false}
          text='Nuestra Cultura'
          changeTab={changeTab}
        />
        <LinkButton
          anchor='nosotros' 
          active={activeTab == 'nosotros' ? true : false}
          text='Nosotros'
          changeTab={changeTab}
        />
        <LinkButton
          anchor='servicios' 
          active={activeTab == 'servicios' ? true : false}
          text='Servicios'
          changeTab={changeTab}
        />
        <LinkButton
          anchor='empleo' 
          active={activeTab == 'empleo' ? true : false}
          text='Empleo'
          changeTab={changeTab}
        />
        <LinkButton
          anchor='nuestras-agencias' 
          active={activeTab == 'nuestras-agencias' ? true : false}
          text='Nuestras Agencias'
          changeTab={changeTab}
        />
        <LinkButton
          anchor='contacto' 
          active={activeTab == 'contacto' ? true : false}
          text='Contacto'
          changeTab={changeTab}
        />
      </ul>
    </header>
  );
}

export default Header;
