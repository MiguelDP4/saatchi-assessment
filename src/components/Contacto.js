import React from 'react';
import IconContacto from '../img/agencias.png';
import Direccion from '../img/direccion.png';
import PBX from '../img/pbx.png';
import EMAIL from '../img/email.png';

const Contacto = () => (
  <section id="contacto">
    <div id="contacto-anchor" />
    <div className="contacto-container">
      <div className="contacto-image-container">
        <img src={IconContacto} alt="contacto" />
      </div>
      <div className="contacto-info">
        <div className="contacto-left">
          <h3>Contacto</h3>
          <div className="small-orange-underline" />
          <div className="info-contacto">
            <div className="sub-info-contacto">
              <div>
                <img src={Direccion} alt="direccion" />
                <h5>DIRECCION</h5>
              </div>
              <p>3a avenida 13-78 edificio Citigroup plaza internacional zona 10 sexto nivel,</p>
              <b>Ciudad de Guatemala, Guatemala</b>
            </div>
            <div className="sub-info-contacto">
              <div>
                <img src={PBX} alt="pbx" />
                <h5>PBX</h5>
              </div>
              <b>23 266 877</b>
            </div>
            <div className="sub-info-contacto">
              <div>
                <img src={EMAIL} alt="email" />
                <h5>E-mail</h5>
              </div>
              <b>reclutamiento@grupotrt.com</b>
            </div>
          </div>
        </div>
        <form className="contacto-right">
          <input type="text" id="nombre" name="nombre" placeholder="Nombre" />
          <input type="email" id="email" name="email" placeholder="Correo Electrónico" />
          <input type="text" id="asunto" name="asunto" placeholder="Asunto" />
          <textarea id="mensaje" name="mensaje" placeholder="Mensaje" />
          <a href="#" className="green-background send-button">ENVIAR</a>
        </form>
      </div>
    </div>
  </section>
);

export default Contacto;
