import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import {  toast } from 'react-toastify';

const StudentRegistaion = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {       
        const name = data.name
        const email = data.email
        const id = data.id
        const deparment = data.deparment
        const password = data.password
        const className = data.class
        
        const teacherdata ={
            name,
            email,
            id,
            deparment,
            password,
            className
        }
        axios.post("http://localhost:5000/student", teacherdata)
        .then(res  => {
            if(res){
                toast(" Student Registation Success")
            }else{
                toast.error(" Student Registation Not success")
            }
        })
        reset()
    };

    return (
        <div className='d-flex justify-content-center'>
            <div className='teacher-reg-body my-4'> 
               <h1 className='text-center text-primary'>Student Registation </h1>
                <form onSubmit={handleSubmit(onSubmit)}>
                <div class="my-3">
                    <label for="exampleFormControlInput1" class="form-label">Student  Full Name</label>
                    <input className='form-control' type="tect"  {...register("name", { required: true })} />
                </div>
                <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">Email address</label>
                    <input className='form-control' type="email"  {...register("email", { required: true })} />
                </div>
                <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">Student Id / Roll Number</label>
                    <input className='form-control' type="number"  {...register("id", { required: true })} />
                </div>
                <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">Class / Year Name</label>
                    <input className='form-control' type="text"  {...register("class", { required: true })} />
                </div>
                <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">Deparment</label>
                    <input className='form-control' type="text"  {...register("deparment", { required: true })} />
                </div>
                <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">Password</label>
                    <input className='form-control' type="password"  {...register("password", { required: true })} />
                </div>
                <div class="my-3 text-center">
                <input className='btn btn-primary px-5 py-2' type="submit" />
                </div>                  
                </form>
                
            </div>
        </div>
    );
};

export default StudentRegistaion;