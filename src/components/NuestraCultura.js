import React from 'react';
import IconCulture from '../img/cultura.png';

const NuestraCultura = () => {
  return (
    <section id='nuestra-cultura'>
      <div className='cultura-image-container'>
        <img src={IconCulture}></img>
      </div>
      <div className='cultura-info'>
        <div></div>
        <div></div>
      </div>
    </section>
  );
}

export default NuestraCultura;
