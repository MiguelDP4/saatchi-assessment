import React from 'react';
import IconAgencias from '../img/agencias.png';
import Map from '../img/map.png';

const NuestrasAgencias = () => (
  <section id="nuestras-agencias">
    <div id="nuestras-agencias-anchor" />
    <div className="agencias-image-container">
      <img src={IconAgencias} alt="agencias" />
    </div>
    <h3>Nuestras Agencias</h3>
    <div className="small-orange-underline" />
    <div className="agencias-container">
      <img src={Map} alt="map" />
    </div>
  </section>
);

export default NuestrasAgencias;
