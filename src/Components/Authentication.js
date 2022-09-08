import React from 'react'
import { useState } from 'react'
import google from '../Google.png';
import avtar from '../avtar.png';
import axios from 'axios';
import { useNavigate} from "react-router-dom";

let initialValue={
  username:"",
  password:""
}
function Authentication() {
  const navigate=useNavigate();
  const[dataa,setDataa]=useState(initialValue);

    const handleChange=(e)=>{
      setDataa({ ...dataa, [e.target.name]: e.target.value});
    };

    const handleSubmit=()=>{
      axios
      .post("https://gmailclon.herokuapp.com/users/login",
      JSON.stringify(dataa),
      {
        headers:{
          "Content-type": "application/json"
        }})
        .then(()=>setDataa(initialValue));
        navigate("/");
        // const user = localStorage.setItem("user");
    };
  
  return (
    <div className='authentication'>
        <div className='authentication-0'>
        <div className='authentication-1'>
    <img src={google} alt='google' className='google-pic'/><br/>
    <label className='text1'>Once account. All of Google</label><br/>
    <label className='text2'>Login to open to Gmail</label><br/>
    </div>
    <div className='main-input-div'>
        <img src={avtar} alt='avtar' className='avtar-pic'/><br/>

        <input
        type='email'
        placeholder='Email'
        onChange={handleChange}
        className='sign-in-email'
        name='username'/><br/>

        <input
        type='password'
        placeholder='Password'
        onChange={handleChange}
        className='sign-in-password'
        name='password'/><br/>

        <button
        className='login-button'
        onClick={handleSubmit}>
        Login
        </button><br/>

        <div className='checkbox-sign'>
        <div>
        <input
        type='checkbox'
        className='sign-in-checkbox'/>

        <label>Stay signed in</label>
        </div>
        <div><a href='https://support.google.com/mail/?hl=en#topic=7065107'>Need help</a></div>
       </div>
       </div>
       

    <h3 onClick={()=>navigate('/signup')}>Create an account</h3>
    </div>
    </div>
  )
}

export default Authentication