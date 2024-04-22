import React from 'react'
import SignupImg from "../assets/signup.png"
import Template from "../components/Template"

const Signup = ({setLoggedIn}) => {
  return (
    <div>
      <Template
        title="Join the million learning code today with studynotion for free"
        desc1="Build skills for today ,tomorrow, and beyond"
        desc2="Education to future-proof your carrer"
        image={SignupImg}
        formtype="signup"
        setLoggedIn={setLoggedIn}
      />
    </div>
  )
}

export default Signup;
