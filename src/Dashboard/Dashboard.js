import React from 'react';
import {Link, Outlet} from 'react-router-dom'
import './Dashboard.css'
const Dashboard = () => {
    return (
        <div className='dashboard-header'>
          <div className='nav-side' >
             <h3 className='px-4 dashboard-title'>Dashboard</h3>
            <ul className='nav-underlist'>
                <li> <Link className="nav-link-item" to="/">Teacher Login</Link> </li>
                <li> <Link className="nav-link-item" to="/teacherRegistation">Teacher Registation</Link> </li>
                <li> <Link className="nav-link-item" to="/stuentRegistation">Student Registation</Link> </li>
                <li> <Link className="nav-link-item" to="/studentLogin">Student Login</Link> </li>
                <li> <Link className="nav-link-item" to="/showStudents">Show Total Student</Link>  </li>
            </ul>
          </div>
          <div className='data-show-side'>
              <Outlet/>
          </div>
        </div>
    );
};

export default Dashboard;