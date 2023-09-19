import React from 'react';
import NavBar from '../navbar/NavBar';
import "../dashboard/dashboard.css";
import dashboard_background from '../../assets/dashboard_background.jpg'
const Dashboard = () => {
  return (
      <div >
          <NavBar />
       <img src={dashboard_background}  alt="" />
      </div>
  );
};

export default Dashboard;
