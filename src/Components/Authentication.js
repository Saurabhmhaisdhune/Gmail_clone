import React, { useState } from "react";
import google from "../Google.png";
import avtar from "../avtar.png";
import { useNavigate } from "react-router-dom";
import {useFormik} from 'formik';

function Authentication() {
  const navigate = useNavigate();
  const [submitbtn,setSubmitbtn]=useState('Login');
 

  const formik=useFormik({
    initialValues:{username:"",password:""},
    onSubmit:(userDetails)=>{
      login(userDetails);
    }
  });

  const login = async (userDetails) => {
  const data=await fetch("https://gmail-clone-xbb8.onrender.com/users/login",{
      method:'POST',
      headers: {
        "Content-type": "application/json",
      },
      body:JSON.stringify(userDetails),
    });
   
      if(data.status === 401) {
        setSubmitbtn("Retry");
        alert("Invalid Credentials");
      } else{
      const user = await data.json();
      localStorage.setItem("token",user.token);
      navigate("/home");
  }
};


  return (
    <div className="authentication">
      <div>
        <img src={google} alt="google" className="google-pic" />
        <br />
        <label className="text1">One account. All of Google</label>
        <br />
        <label className="text2">Login in to open the Gmail</label>
        <br />

      <div className="main-input-div">
        <img src={avtar} alt="avtar" className="avtar-pic" />
        <br />
        <form onSubmit={formik.handleSubmit}>

        <input
          type="email"
          placeholder="Email"
          onChange={formik.handleChange}
          value={formik.values.username}
          className="sign-in-email"
          name="username"
        />
        <br />

        <input
          type="password"
          placeholder="Password"
          onChange={formik.handleChange}
          value={formik.values.password}
          className="sign-in-password"
          name="password"
        />
        <br />

        <button type='submit' className="login-button">
        {submitbtn}
        </button>
        <br />
        </form>

        <div className="checkbox-sign">
          <div>
            <input type="checkbox" className="sign-in-checkbox" />

            <label>Stay loged in</label>
          </div>

          <div>
            <a href="https://frolicking-crepe-37b4ea.netlify.app">
              Need help
            </a>
          </div>
        </div>
      </div>

      <h3 onClick={() => navigate("/signup")} className="create-account">Create a new account</h3>
    </div>
    </div>
  );
}

export default Authentication;
