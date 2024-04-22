import React from 'react'
import SignupForm from '../components/SignupForm';
import frameImage from "../assets/frame.png" 
import LoginForm from '../components/LoginForm';
import googleImg from '../assets/google.png';


const Template = ({title, desc1, desc2, image, formtype, setLoggedIn}) => {
  return (
    <div className='flex w-11/12 max-w-[1200px] py-12 mx-auto gap-x-12 gap-y-0'>


        {/* className='w-11/12 max-w-[450px] mx-0' */}
        <div className='w-11/12 max-w-[450px] mx-14'>
            <h1 className='text-4xl font-semibold leading-[2.375rem] text-white '>{title}</h1>
            <p className='text-[1.125rem] leading-[1.625rem] mt-4'>
                <span className='text-richblack-100 '>{desc1}</span>
                <br/>
                <span className='italic text-blue-200'>{desc2}</span>
            </p>

            {
                formtype === "signup" ?
                (<SignupForm  setLoggedIn={setLoggedIn}/>):(<LoginForm setLoggedIn={setLoggedIn} />) 
            }

            <div className='flex items-center w-full mt-4 mb-5 gap-x-2'>
                <div className='w-full h-[2px] bg-richblack-700'></div>
                <p className='font-medium text-richblack-700 leading-[1.375rem]'>OR</p>
                <div className='w-full h-[2px] bg-richblack-700'></div>
            </div>

            <button className='flex items-center justify-center w-full rounded-[8px] font-medium text-richblack-100 border border-richblack-800
            px-[12px] py-[8px] gap-x-2'>
                
                <img src={googleImg} alt='google-img' width="20px" height="20px" />
                Sign Up with google
                
            </button>
        </div>

        <div className='relative w-11/12 max-w-[450px] mx-auto'>
            <img src={frameImage} alt='frameImg' width={558} height={504} loading='lazy'/>
            <img src={image} alt='Img' width={558} height={490} loading='lazy'
                className='absolute right-4 -top-4'
            />
        </div>
    </div>
  )
}
export default Template;