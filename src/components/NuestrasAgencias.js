import React from 'react';
import IconAgencias from '../img/agencias.png';
import Map from '../img/map.png';
const NuestrasAgencias = () => {
  return (
    <section id='nuestras-agencias'>
      <div id='nuestras-agencias-anchor'></div>
      <div className='agencias-image-container'>
        <img src={IconAgencias} />
      </div>
      <h3>Nuestras Agencias</h3>
      <div className='small-orange-underline'></div>
      <div className='agencias-container'>
        <img src={Map}/>
      </div>
    </section>
  );
}

export default NuestrasAgencias;
