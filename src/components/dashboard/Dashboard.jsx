import React from 'react';
import NavBar from '../navbar/NavBar';

import Slideshow from './SlideShow';
import chef_wallpaper1 from '../../assets/chef_wallpaper1.jpg';
import packed_food from '../../assets/packed_food.jpg';
import chef_wallpaper2 from '../../assets/chef_wallpaper2.jpg';
import Delivery_wallpaper from '../../assets/Delivery_wallpaper.jpg';

;

const Dashboard = () => {
  const images = [chef_wallpaper1, packed_food, chef_wallpaper2, Delivery_wallpaper];

  return (
    <React.Fragment>
      <NavBar />
      <div id='slideshow-images'>
        <Slideshow class="bg-cover" images={images} />
      </div>
    </React.Fragment>
  );
};

export default Dashboard;
