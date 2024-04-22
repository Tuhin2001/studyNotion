import React from 'react'
import Template from "../components/Template"
import loginImg from "../assets/login.png"
 const login = ({setLoggedIn}) => {
  return (
    <div>
      <Template
        title="Welcome Back"
        desc1="Build skills for today ,tomorrow, and beyond"
        desc2="Education to future-proof your carrer"
        image={loginImg}
        formtype="login"
        setLoggedIn={setLoggedIn}
      />
    </div>
  )
}
export default login;