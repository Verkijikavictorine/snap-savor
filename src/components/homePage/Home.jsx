import React from 'react';
import NavBar from '../navbar/NavBar';
import Slideshow from './SlideShow';
import slide from '../../assets/slide.jpg';
import slide1 from '../../assets/slide1.jpg';
import slide2 from '../../assets/slide2.jpg';
import slide3 from '../../assets/slide3.jpg';
;

const Home = () => {
  const images = [slide, slide1, slide2, slide3];

  return (
    <React.Fragment>
      <NavBar />
      <div id='slideshow-images'>
        <Slideshow class="bg-cover" images={images} />
      </div>
    </React.Fragment>
  );
};

export default Home;