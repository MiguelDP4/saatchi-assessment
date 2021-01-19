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
          anchor='inicio-anchor' 
          active={activeTab == 'inicio-anchor' ? true : false}
          text='Inicio'
          changeTab={changeTab}
        />
        <LinkButton
          anchor='nuestra-cultura-anchor' 
          active={activeTab == 'nuestra-cultura-anchor' ? true : false}
          text='Nuestra Cultura'
          changeTab={changeTab}
        />
        <LinkButton
          anchor='nosotros-anchor' 
          active={activeTab == 'nosotros-anchor' ? true : false}
          text='Nosotros'
          changeTab={changeTab}
        />
        <LinkButton
          anchor='servicios-anchor' 
          active={activeTab == 'servicios-anchor' ? true : false}
          text='Servicios'
          changeTab={changeTab}
        />
        <LinkButton
          anchor='empleo-anchor' 
          active={activeTab == 'empleo-anchor' ? true : false}
          text='Empleo'
          changeTab={changeTab}
        />
        <LinkButton
          anchor='nuestras-agencias-anchor' 
          active={activeTab == 'nuestras-agencias-anchor' ? true : false}
          text='Nuestras Agencias'
          changeTab={changeTab}
        />
        <LinkButton
          anchor='contacto-anchor' 
          active={activeTab == 'contacto-anchor' ? true : false}
          text='Contacto'
          changeTab={changeTab}
        />
      </ul>
    </header>
  );
}

export default Header;
