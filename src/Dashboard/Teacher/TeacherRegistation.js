import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import {  toast } from 'react-toastify';
import './Teacher.css'
const TeacherRegistation = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {       
        const name = data.name
        const email = data.email
        const age = data.age
        const deparment = data.deparment
        const password = data.password
        
        const teacherdata ={
            name,
            email,
            age,
            deparment,
            password,
            role: "Teacher"
        }
        axios.post("http://localhost:5000/teacher", teacherdata)
        .then(res  => {
            if(res){
                toast("Teacher Registation Success")
            }else{
                toast.error("Teacher Registation Not success")
            }
        })
        reset()
    };

    return (
        <div className='d-flex justify-content-center'>
            <div className='teacher-reg-body my-4'> 
               <h1 className='text-center text-primary'>Teacher Registation </h1>
                <form onSubmit={handleSubmit(onSubmit)}>
                <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">Full Name</label>
                    <input className='form-control' type="tect"  {...register("name", { required: true })} />
                </div>
                <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">Email address</label>
                    <input className='form-control' type="email"  {...register("email", { required: true })} />
                </div>
                <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">Age</label>
                    <input className='form-control' type="number"  {...register("number", { required: true })} />
                </div>
                <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">Which department teacher? Name of that department</label>
                    <input className='form-control' type="text"  {...register("deparment", { required: true })} />
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

export default TeacherRegistation;