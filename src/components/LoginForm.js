import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { AiOutlineEye,AiOutlineEyeInvisible } from "react-icons/ai";
import { Link, useNavigate } from 'react-router-dom';

const LoginForm = ({setLoggedIn}) => {
    const [formData,setFormData] = useState({
        email:"",password:""
    })
    const[showPassword,setShowPassword] = useState (false);
    const navigate = useNavigate();
    function changeHandler(event){
        setFormData( (prevdata) =>({
            ...prevdata,
            [event.target.name] : event.target.value
        }))
    }
    function submitHandler(event){
        event.preventDefault();
       
        setLoggedIn(true);
        toast.success("Logged in");
        navigate("/dashboard")
    }
  return (
    <form onSubmit={submitHandler}
    className='flex flex-col w-full mt-6 gap-y-4'>
        <label className='w-full'>
            <p className='text-[0.875rem] text-richblack-5 mb-2 leading-[1.375rem]'>
                Email Address <sup className='text-red-600 '>*</sup>
            </p>
            <input
                required
                type='email'
                value={formData.email}
                onChange={changeHandler}
                placeholder='Enter email id'
                name='email'
                className='w-full bg-richblack-800 rounded-[0.5rem] text-richblack-25 p-[12px] '
            />
        </label>
        <label  className='relative w-full'>
            <p className='text-[0.875rem] text-richblack-5 mb-2 leading-[1.375rem]'>
                Password <sup className='text-red-600'>*</sup>
            </p>
            <input
                required
                type={showPassword ? ("text") : ("password")}
                value={formData.password}
                onChange={changeHandler}
                placeholder='Enter Password'
                name='password'
                className='w-full bg-richblack-800 rounded-[0.5rem] text-richblack-25 p-[12px] '
            />
            <span className='absolute right-3 top-[40px] cursor-pointer '
             onClick={()=> {
                setShowPassword((prev) => !prev)
            }}>
                {
                    !showPassword ?  (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF' />) :(<AiOutlineEye  fontSize={24} fill='#AFB2BF'  />) 
                }
            </span>

            <Link to="#" >
                <p className='w-full mt-1 ml-auto text-xs text-blue-300 max-w-max'>Forgot password</p>
            </Link>
        </label>

         <button className='w-full font-semibold bg-yellow-300 rounded-[0.5rem] text-richblack-800 p-[12px] mb-3'>
            Sign In
         </button>
        
    </form>
  )
}
export  default LoginForm;