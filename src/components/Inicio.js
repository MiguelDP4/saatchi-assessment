import React from 'react';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import image1 from '../img/1.jpg';
import image2 from '../img/2.jpg';
import image3 from '../img/3.jpg';

const Inicio = () => {
  return (
    <section id='inicio'>
      <CarouselProvider
        naturalSlideWidth={100}
        naturalSlideHeight={40}
        totalSlides={3}
      >
        <Slider>
          <Slide index={0}><img src={image1} /></Slide>
          <Slide index={1}><img src={image2} /></Slide>
          <Slide index={2}><img src={image3} /></Slide>
        </Slider>
        <div className='carousel-buttons'>
          <ButtonBack>◄</ButtonBack>
          <ButtonNext>►</ButtonNext>
        </div>
      </CarouselProvider>
    </section>
  );
}

export default Inicio;
