import React from "react";
import IconServicios from "../img/servicios.png";
import clientesPhoto from "../img/a1.png";
import clientes from "../img/clientes.png";
import colaboradoresPhoto from "../img/a2.png";
import colaboradores from "../img/colaboradores.png";
import creditosPhoto from "../img/a3.png";
import creditos from "../img/creditos.png";
import capacitacionesPhoto from "../img/a4.png";
import capacitaciones from "../img/capacitaciones.png";

const Servicios = () => {
  return (
    <section id="servicios">
      <div className="servicios-image-container">
        <img src={IconServicios} />
      </div>
      <h3>Servicios</h3>
      <div className="small-orange-underline"></div>
      <div className="servicios-container">
        <div className="servicios-section">
          <div className="servicios-column">
            <img className="img-servicio" src={clientesPhoto} />
            <div className="servicios-info">
              <img src={clientes} />
              <h5>NUESTROS CLIENTES</h5>
              <a className="orange-background" href="#">
                Ver Más
              </a>
            </div>
          </div>
          <div className="servicios-column">
            <div className="servicios-info">
              <img src={colaboradores} />
              <h5>NUESTROS COLABORADORES</h5>
              <a className="green-background" href="#">
                Ver Más
              </a>
            </div>
            <img className="img-servicio" src={colaboradoresPhoto} />
          </div>
        </div>
        <div className="servicios-section">
          <div className="servicios-column">
            <img className="img-servicio" src={creditosPhoto} />
            <div className="servicios-info">
              <img src={creditos} />
              <h5>CREDITOS</h5>
              <a className="green-background" href="#">
                Ver Más
              </a>
            </div>
          </div>
          <div className="servicios-column">
            <div className="servicios-info">
              <img src={capacitaciones} />
              <h5>CAPACITACIONES</h5>
              <a className="orange-background" href="#">
                Ver Más
              </a>
            </div>
            <img className="img-servicio" src={capacitacionesPhoto} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Servicios;
