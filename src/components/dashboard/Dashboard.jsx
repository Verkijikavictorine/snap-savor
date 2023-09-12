import React from 'react';
import NavBar from '../navbar/NavBar';
import "../dashboard/dashboard.css"
import Dashboardbg from "../../assets/bg.jpg"


const Dashboard = () => {
    return ( 
        <div className='dashboard-body'>
            <NavBar/>
           <div id='bg-image'>
           <img src={Dashboardbg} alt="" />
           </div>

        </div>
     );
}
 
export default Dashboard;