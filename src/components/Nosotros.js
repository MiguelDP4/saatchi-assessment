import React from 'react';
import IconNosotros from '../img/nosotros.png';
import respeto from '../img/respeto.png';
import confianza from '../img/confianza.png';
import lealtad from '../img/lealtad.png';
import honestidad from '../img/honestidad.png';
import responsabilidad from '../img/responsabilidad.png';
import identidad from '../img/identidad.png';
import calidad from '../img/calidad.png';

const Nosotros = () => {
  return (
    <section id='nosotros'>
      <div className='nosotros-image-container'>
        <img src={IconNosotros} />
      </div>
      <h3>Nosotros</h3>
      <div className='small-orange-underline'></div>
      <div className='nosotros-container'>
        <div className='nosotros-info'>
          <h4>Misión</h4>
          <div className='small-green-underline'></div>
          <p>
            Otorgar créditos y servicios a las personas de nuestras comunidades
            que tengan intenciones y capacidad de pago sin poner en riesgo
            sus necesidades básicas, contribuyendo a una mejora continua de su nivel
            de vida.
          </p>
        </div>
        <div className='nosotros-info'>
          <h4>Visión</h4>
          <div className='small-green-underline'></div>
          <p>
            Ser un líder en nuestras comunidades al dedicarnos
            a satisfacer las necesidades de nuestra gente,
            contribuyendo a mejorar su nivel de vida fundamentada en nuestros valores
            y en nuestro crecimiento continuo.
          </p>
        </div>
      </div>
      <div className='nosotros-valores'>
        <div className='valores-container'>
          <h4>Valores</h4>
          <div className='small-green-underline'></div>
          <div className='valores-lista'>
            <div className='valor-ilustracion'>
              <img src={respeto}/>
              <h5>Respeto</h5>
            </div>
            <div className='valor-ilustracion'>
              <img src={confianza}/>
              <h5>Confianza</h5>
            </div>
            <div className='valor-ilustracion'>
              <img src={lealtad}/>
              <h5>Lealtad</h5>
            </div>
            <div className='valor-ilustracion'>
              <img src={honestidad}/>
              <h5>Honestidad</h5>
            </div>
            <div className='valor-ilustracion'>
              <img src={responsabilidad}/>
              <h5>Responsabilidad</h5>
            </div>
            <div className='valor-ilustracion'>
              <img src={identidad}/>
              <h5>Identidad</h5>
            </div>
            <div className='valor-ilustracion'>
              <img src={calidad}/>
              <h5>Calidad</h5>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Nosotros;
