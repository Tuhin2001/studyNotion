import React from 'react';
import logo from "../assets/Logo.svg";
import { Link } from 'react-router-dom';
import {toast } from "react-hot-toast";


 const Navbar = (props) => {
    let loggedIn = props.loggedIn;
    let setLoggedIn = props.setLoggedIn;
  return (
    <div className='flex items-center w-11/12 justify-between max-w-[1100px] mx-auto py-2'>
        <Link to="/">
            <img src={logo} alt='logo.svg' width={160} height={32} loading='lazy' />
        </Link>

        <nav>
            <ul className='flex text-white gap-x-6 '>
                <li>
                    <Link to="/" >Home</Link>
                </li>
                <li>
                    <Link to="/" >About</Link>
                </li>
                <li>
                    <Link to="/" >Contact</Link>
                </li>
            </ul>
        </nav>


        {/* Login - Signup - Dashboard - */}
        <div className='flex items-center ml-5 mr-3 gap-x-4 '>
            { !loggedIn &&
                <Link to="/login">
                    <button className='text-white rounded-[8px] bg-richblack-800 py-[8px] px-[12px] border border-richblack-700'>Log In</button>
                </Link>
            }

            { !loggedIn &&
                <Link to="/signup">
                    <button className='text-white rounded-[8px] bg-richblack-800 py-[8px] px-[12px] border border-richblack-700'
                    onClick={()=>{setLoggedIn(false);
                    toast.success("logged in");}}>Sign Up</button>
                </Link>
            }

            { loggedIn &&
                <Link to="/">
                    <button className='text-white rounded-[8px] bg-richblack-800 py-[8px] px-[12px] border border-richblack-700'
                     onClick={()=>{setLoggedIn(false);
                    toast.success("logged out");}}>Log Out</button>
                </Link>
            }

            { loggedIn &&
                <Link to="/Dashboard">
                    <button className='text-white rounded-[8px] bg-richblack-800 py-[8px] px-[12px] border border-richblack-700' >Dashboard</button>
                </Link>
            }
        </div>
        

    </div>
  )
}

export default Navbar;