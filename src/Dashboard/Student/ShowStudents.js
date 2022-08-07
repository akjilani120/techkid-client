import React, { useEffect, useState } from 'react';
import axios from 'axios';
const ShowStudents = () => {
    const [loading , setLoading] = useState(false)
    const [students, setStudents] = useState([])
    useEffect(() => {
        setLoading(true)
        axios.get("https://frozen-spire-94937.herokuapp.com/totalStudent")
            .then(res => {setStudents(res.data)
             setLoading(false)
            })
    }, [])
    if(loading){
        return <h4>Loading .......</h4>
    }
    return (
        <div className='bg-white py-5'>
            <h1 className=' text-primary text-center'>Show students</h1>
            <div className='table-responsive px-5  '>
                <table class="table  table-striped text-center mb-5">
                    <thead className='bg-dark text-white'>
                        <tr>
                            <th scope="col">No</th>
                            <th scope="col">Student Name</th>
                            <th scope="col">Roll / id</th>
                            <th scope="col">Deparment</th>
                            <th scope="col">Class/ Year / semester</th>
                            <th scope="col">Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        
                        {
                            students.map((student , index) => <tr key={student._id}>
                                <th scope="row">{index + 1}</th>
                                <td>{student.name}</td>
                                <td>{student.id}</td>
                                <td>{student.deparment}</td>
                                <td>{student.className}</td>
                                <td>{student.email}</td>
                            </tr> )
                        }
                        
                        
                        
                       
                        
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ShowStudents;