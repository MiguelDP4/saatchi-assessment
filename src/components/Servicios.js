import React from 'react';
import IconServicios from '../img/servicios.png';
import clientesPhoto from '../img/a1.png';
import clientes from '../img/clientes.png';
import colaboradoresPhoto from '../img/a2.png';
import colaboradores from '../img/colaboradores.png';
import creditosPhoto from '../img/a3.png';
import creditos from '../img/creditos.png';
import capacitacionesPhoto from '../img/a4.png';
import capacitaciones from '../img/capacitaciones.png';

const Servicios = () => (
  <section id="servicios">
    <div id="servicios-anchor" />
    <div className="servicios-image-container">
      <img src={IconServicios} alt="servicios" />
    </div>
    <h3>Servicios</h3>
    <div className="small-orange-underline" />
    <div className="servicios-container">
      <div className="servicios-section">
        <div className="servicios-column">
          <img className="img-servicio" src={clientesPhoto} alt="servicios" />
          <div className="servicios-info">
            <img src={clientes} alt="servicios" />
            <h5>NUESTROS CLIENTES</h5>
            <a className="orange-background" href="https://www.google.com/">
              Ver Más
            </a>
          </div>
        </div>
        <div className="servicios-column">
          <div className="servicios-info">
            <img src={colaboradores} alt="servicios" />
            <h5>NUESTROS COLABORADORES</h5>
            <a className="green-background" href="https://www.google.com/">
              Ver Más
            </a>
          </div>
          <img className="img-servicio" src={colaboradoresPhoto} alt="servicios" />
        </div>
      </div>
      <div className="servicios-section">
        <div className="servicios-column">
          <img className="img-servicio" src={creditosPhoto} alt="servicios" />
          <div className="servicios-info">
            <img src={creditos} alt="servicios" />
            <h5>CREDITOS</h5>
            <a className="green-background" href="https://www.google.com/">
              Ver Más
            </a>
          </div>
        </div>
        <div className="servicios-column">
          <div className="servicios-info">
            <img src={capacitaciones} alt="servicios" />
            <h5>CAPACITACIONES</h5>
            <a className="orange-background" href="https://www.google.com/">
              Ver Más
            </a>
          </div>
          <img className="img-servicio" src={capacitacionesPhoto} alt="servicios" />
        </div>
      </div>
    </div>
  </section>
);

export default Servicios;
