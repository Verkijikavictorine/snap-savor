import React from 'react';
import NavBar from '../navbar/NavBar';
import "../dashboard/dashboard.css"
import Dashboardbg from "../../assets/dashboard_background.jpg"


const Dashboard = () => {
    return ( 
        <div className='dashboard-body'>
            <NavBar/>
           <div id='bg-image' className='p_image img-fluid iLightbox-container'>
           <img src={Dashboardbg} alt="" />
           </div>
        </div>
     );
}
 
export default Dashboard;
