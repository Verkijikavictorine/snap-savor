import React from 'react';
import { Carousel } from 'react-bootstrap';

const Slideshow = ({ images }) => {
  return (
    <Carousel>
      {images.map((image, index) => (
        <Carousel.Item key={index}>
          <img className="d-block w-200" src={image} alt={`Slide ${index + 1}`} />
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default Slideshow;