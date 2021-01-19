import React from 'react';
import logo from '../img/logo.png';
import LinkButton from './LinkButton';

const Footer = props => {
  const { activeTab, changeTab } = props;
  return (
    <footer id="footer">
      <div className="orange-background">
        <img src={logo} />
        <ul className="header-links">
          <LinkButton
            anchor="inicio-anchor"
            active={activeTab == 'inicio-anchor'}
            text="Inicio"
            changeTab={changeTab}
          />
          <LinkButton
            anchor="nuestra-cultura-anchor"
            active={activeTab == 'nuestra-cultura-anchor'}
            text="Nuestra Cultura"
            changeTab={changeTab}
          />
          <LinkButton
            anchor="nosotros-anchor"
            active={activeTab == 'nosotros-anchor'}
            text="Nosotros"
            changeTab={changeTab}
          />
          <LinkButton
            anchor="servicios-anchor"
            active={activeTab == 'servicios-anchor'}
            text="Servicios"
            changeTab={changeTab}
          />
          <LinkButton
            anchor="empleo-anchor"
            active={activeTab == 'empleo-anchor'}
            text="Empleo"
            changeTab={changeTab}
          />
          <LinkButton
            anchor="nuestras-agencias-anchor"
            active={activeTab == 'nuestras-agencias-anchor'}
            text="Nuestras Agencias"
            changeTab={changeTab}
          />
          <LinkButton
            anchor="contacto-anchor"
            active={activeTab == 'contacto-anchor'}
            text="Contacto"
            changeTab={changeTab}
          />
        </ul>
      </div>
      <div className="green-background footer-copywright">
        © Credichapin 2018. Todos los derechos reservados
      </div>
    </footer>
  );
};

export default Footer;
