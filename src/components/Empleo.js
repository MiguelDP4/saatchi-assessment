import React from 'react';
import IconEmpleo from '../img/empleo.png';
import ImageEmpleo from '../img/5.jpg';

const Empleo = () => (
  <section id="empleo">
    <div id="empleo-anchor" />
    <div className="empleo-container">
      <div className="empleo-image-container">
        <img src={IconEmpleo} alt="empleo" />
      </div>
      <div className="empleo-info">
        <div className="empleo-left">
          <h3>Empleo</h3>
          <div className="small-orange-underline" />
          <p>¿Quieres formar parte de nuestro equipo?</p>
          <div className="round-image-right">
            <img src={ImageEmpleo} alt="empleo" />
          </div>
        </div>
        <form className="empleo-right">
          <input type="text" id="nombre" name="nombre" placeholder="Nombre" />
          <input type="email" id="email" name="email" placeholder="Correo Electrónico" />
          <input type="text" id="asunto" name="asunto" placeholder="Asunto" />
          <textarea id="mensaje" name="mensaje" placeholder="Mensaje" />
          <a href="https://www.google.com/" className="gray-background">Adjuntar Archivo</a>
          <a href="https://www.google.com/" className="orange-background send-button">ENVIAR</a>
        </form>
      </div>
    </div>
  </section>
);

export default Empleo;
