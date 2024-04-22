import React,{useState} from 'react';
import {  useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

import { AiOutlineEye,AiOutlineEyeInvisible } from "react-icons/ai";
const SignupForm = ({setLoggedIn}) => {
    const [formData,setFormData] = useState({
        firstName:"",lastName:"",email:"",password:"",confirmpassword:""
    })
    const[showPassword,setShowPassword] = useState (false);
    const [accountType, setAccountType] = useState("Student")
    function changeHandler(event){
        setFormData( (prevdata) =>({
            ...prevdata,
            [event.target.name] : event.target.value
        }))
    }
    const navigate = useNavigate();
    function submitHandler(event){
        event.preventDefault();
        if(formData.password !== formData.confirmpassword){
            toast.error("Check password");
            return;
        }
        setLoggedIn(true);
        toast.success("Account created");
        navigate("/dashboard")
    }
  return (
    <div>

        <div className='flex p-2 my-6 rounded-full bg-richblack-800 gap-x-1 max-w-max'>
                <button className={`${accountType === "Student" ? " text-white bg-richblack-900" : " text-richblack-200 bg-transparent"} rounded-full py-2 px-5 transition-all duration-150`}
                    onClick={() => setAccountType("Student")}>Student</button>
                <button className={`${accountType === "Instructor" ? " text-white bg-richblack-900" : " text-richblack-200 bg-transparent"} rounded-full py-2 px-5 transition-all duration-150`}
                    onClick={() => setAccountType("Instructor")}>Instructor</button>
            </div>


        <form onSubmit={submitHandler}>
            <div className='flex w-full mt-2 mb-4 gap-x-3'>
                <label className='w-full'>
                    <p className='text-[0.875rem] text-richblack-5 mb-2 leading-[1.375rem] mt-1'>
                        First Name <sup  className='text-red-600'>*</sup>
                    </p>
                    <input
                        required
                        type='text'
                        value={formData.firstName}
                        onChange={changeHandler}
                        placeholder='Enter First Name'
                        name='firstName'
                        className='w-full bg-richblack-800 rounded-[0.5rem] text-richblack-25 p-[12px] '
                    />
                </label>
                <label className='w-full'>
                    <p className='text-[0.875rem] text-richblack-5 mb-2 leading-[1.375rem] mt-1'>
                        Last Name <sup  className='text-red-600'>*</sup>
                    </p>
                    <input
                        required
                        type='text'
                        value={formData.lastName}
                        onChange={changeHandler}
                        placeholder='Enter First Name'
                        name='lastName'
                        className='w-full bg-richblack-800 rounded-[0.5rem] text-richblack-25 p-[12px] '
                    />
                </label>
            </div>

            <label>
            <p className='text-[0.875rem] text-richblack-5 mb-2 leading-[1.375rem] mt-1'>
                Email Address <sup  className='text-red-600 '>*</sup>
            </p>
            <input
                required
                type='email'
                value={formData.email}
                onChange={changeHandler}
                placeholder='Enter email id'
                name='email'
                className='w-full bg-richblack-800 rounded-[0.5rem] text-richblack-25 p-[12px] mb-2 '
            />
            </label>
            
            <div className='flex w-full mt-2 mb-4 gap-x-3 '>
                <label className='relative w-full'>
                    <p className='text-[0.875rem] text-richblack-5 mb-2 leading-[1.375rem]'>
                        Create Password <sup  className='text-red-600'>*</sup>
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
                    <span className='absolute right-3 top-[40px] cursor-pointer'
                     onClick={()=> {
                            setShowPassword((prev) => !prev)
                        }}>
                        {
                            showPassword ?  (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF' />) :(<AiOutlineEye fontSize={24} fill='#AFB2BF' />) 
                        }
                    </span>
                </label>
                <label className='relative w-full'>
                    <p className='text-[0.875rem] text-richblack-5 mb-2 leading-[1.375rem] '>
                        Confirm Password <sup  className='text-red-600'>*</sup>
                    </p>
                    <input
                        required
                        type={showPassword ? ("text") : ("password")} 
                        value={formData.confirmpassword}
                        onChange={changeHandler}
                        placeholder='Enter Password'
                        name='confirmpassword'
                        className='w-full bg-richblack-800 rounded-[0.5rem] text-richblack-25 p-[12px] '
                    />
                    <span className='absolute right-3 top-[40px] cursor-pointer'
                     onClick={()=> {
                            setShowPassword((prev) => !prev)
                        }}>
                        {
                            showPassword ?  (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF' />) :(<AiOutlineEye fontSize={24} fill='#AFB2BF' />) 
                        }
                    </span>
                </label>
            </div>

            <button className='w-full font-semibold bg-yellow-300 rounded-[0.5rem] text-richblack-800 p-[12px] mb-3'>
                Create Account
            </button>


        </form>
    </div>
  )
}

export default SignupForm