import React, { useEffect, useState } from 'react';
import { Outlet} from 'react-router-dom'
import CustomLink from './CustomLinK';
import './Dashboard.css'
const Dashboard = () => {    
    const [teachers , setTeachers] = useState("")
    useEffect(() =>{
        fetch("http://localhost:5000/teacher")
        .then(res => res.json())
        .then(data => setTeachers(data))
    } , [])
   
    return (
        <div className='dashboard-header'>
          <div className='nav-side' >
             <h3 className='px-4 dashboard-title'>Dashboard</h3>
            <ul className='nav-underlist'>
                <li> <CustomLink className="nav-link-item" to="/">Teacher Login</CustomLink> </li>
                <li> <CustomLink className="nav-link-item" to="/teacherRegistation">Teacher Registation</CustomLink> </li>
                <li> <CustomLink className="nav-link-item" to="/stuentRegistation">Student Registation</CustomLink> </li>
                <li> <CustomLink className="nav-link-item" to="/studentLogin">Student Login</CustomLink> </li>
                {   
                    <li> <CustomLink className="nav-link-item" to="/showStudents">Show Total Student</CustomLink>  </li>
                }
            </ul>
          </div>
          <div className='data-show-side'>
              <Outlet/>
          </div>
        </div>
    );
};

export default Dashboard;