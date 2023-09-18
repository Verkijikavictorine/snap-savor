import React from 'react';
import NavBar from '../dashboard/dashboard_nav'
import "../dashboard/dashboard.css";

const Dashboard = () => {
  return (
    <div className="dashboard-background container-fluid">
      <div className="row">
        <div className="col-12">
          <NavBar />
        </div>
      </div>
      <div className="row">
        <div className="col-12">
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
