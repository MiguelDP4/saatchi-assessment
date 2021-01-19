import React from 'react';
import {
  CarouselProvider, Slider, Slide, ButtonBack, ButtonNext,
} from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import image1 from '../img/1.jpg';
import image2 from '../img/2.jpg';
import image4 from '../img/4.jpg';

const Inicio = () => (
  <section id="inicio">
    <div id="inicio-anchor" />
    <CarouselProvider
      naturalSlideWidth={100}
      naturalSlideHeight={40}
      totalSlides={3}
    >
      <Slider>
        <Slide index={0}><img src={image1} /></Slide>
        <Slide index={1}><img src={image2} /></Slide>
        <Slide index={2}><img src={image4} /></Slide>
      </Slider>
      <div className="carousel-buttons">
        <ButtonBack>◄</ButtonBack>
        <ButtonNext>►</ButtonNext>
      </div>
    </CarouselProvider>
    <div className="white-oval" />
    <div className="contact-container">
      <div className="contact">
        <p>Te ayudamos a cumplir</p>
        <b>tus sueños</b>
        <a href="#">CONTÁCTENOS</a>
      </div>
    </div>
  </section>
);

export default Inicio;
