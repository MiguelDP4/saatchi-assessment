import React from 'react';
import IconCulture from '../img/cultura.png';
import CultureImage from '../img/5.jpg';

const NuestraCultura = () => {
  return (
    <section id='nuestra-cultura'>
      <div className='cultura-container'>
        <div className='cultura-image-container'>
          <img src={IconCulture} />
        </div>
        <div className='cultura-info'>
          <div className='cultura-left'>
            <h3>Nuestra Cultura</h3>
            <div className='small-orange-underline'></div>
            <p>Credi Chapín es una empresa de personas para personas,
              de guatemaltecos para guatemaltecos, donde se vive una
              cultura de servicio y respeto a
              nuestros clientes.
            </p>
            <p>
              Buscamos siempre ofrecer un buen trato a traves de la
              confianza y la comunicacion abierta, siempre encaminados
              al cumplimiento de nuestros objetivos.
            </p>
            <p>
              Nuestro capital humano está comprometido a brindar un
              servicio personal, cumpliendo siempre con nuestros valores.
            </p>
          </div>
          <div className='cultura-right'>
            <div className='round-image-left'>
              <img src={CultureImage}/>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default NuestraCultura;
