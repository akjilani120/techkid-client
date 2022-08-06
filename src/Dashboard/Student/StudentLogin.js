import React from 'react';
import { useForm } from "react-hook-form";
import {  toast } from 'react-toastify';
const StudentLogin = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {     
        
        const email = data.email
        const password = data.password
        const id = data.id
        const teacherdata ={           
            email,
            password,
            id
        }
        fetch("http://localhost:5000/student/login",{
            method:"POST",
            headers:{
                "content-type" : "application/json"
            },
            body : JSON.stringify(teacherdata)
        })
        .then(res  => {
           if(res.status === 200){
             return toast("Your Login Success")
           } 
           if (res.status === 500 ){
           return toast.error("Email , Password , Roll invalid")
           }
           
        })
        .then(data => data )
        reset()
    };
    return (
        <div className='d-flex justify-content-center'>
        <div className='teacher-reg-body my-4'> 
           <h1 className='text-center text-primary'>Student Login </h1>
            <form onSubmit={handleSubmit(onSubmit)}>
            
            <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Email address</label>
                <input className='form-control' type="email"  {...register("email", { required: true })} />
            </div>
            <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">Student Id / Roll Number</label>
                    <input className='form-control' type="number"  {...register("id", { required: true })} />
                </div>
            <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Password</label>
                <input className='form-control' type="password"  {...register("password", { required: true })} />
            </div>
            <div class="my-4 text-center">
            <input className='btn btn-primary px-5 py-2' type="submit" />
            </div>
               
            </form>
            
        </div>
    </div>
    );
};

export default StudentLogin;