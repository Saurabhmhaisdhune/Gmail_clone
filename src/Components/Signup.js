import React from 'react'
import google from '../Google.png';
import avtar from '../avtar.png';
import axios from 'axios';
import { useState } from 'react';

let initialValue={
  username:"",
  password:""
}

function Signup() {
  const[signup,setSignup]=useState(initialValue);

    // const navigate=useNavigate();
    const handleChange = (e) => {
      setSignup({ ...signup, [e.target.name]: e.target.value});
    };

    const handleSubmit=()=>{
      axios
      .post(
        "https://gmailclones.herokuapp.com/users/signup",
        JSON.stringify(signup),
        {
          headers: {
            "Content-type": "application/json"
     }})
      .then(() => setSignup(initialValue));
    }; 
   
  return (
    <div className='authentication'>
        <div className='authentication-0'>
    <div className='authentication-1'>
<img src={google} alt='google' className='google-pic'/><br/>
<label className='text1'>One account. All of Google</label><br/>
<label className='text2'>Sign in to continue to Gmail</label><br/>
</div>
<div className='main-input-div'>

    <img src={avtar} alt='avtar' className='avtar-pic'/><br/>

    <input
    type='email'
    onChange={handleChange}
    placeholder='Email'
    className='sign-in-email'
    name='email'/><br/>

    <input
    type='password'
    onChange={handleChange}
    placeholder='Password'
    className='sign-in-password'
    name='password'/><br/>

    <button
    className='login-button'
    onSubmit={handleSubmit}>
    Sign up
    </button><br/>

   </div>
   </div>
   </div>
  )
}

export default Signup