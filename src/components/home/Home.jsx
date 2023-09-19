import React from 'react';
import NavBar from '../navbar/NavBar';
import "./home.css";
import home_background from '../../assets/home_background.jpg'
const Home = () => {
  return (
      <div >
          <NavBar />
       <img className='image-fluid' src={home_background}  alt="" />
      </div>
  );
};

export default Home;
