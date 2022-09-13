import React from "react";
import google from "../Google.png";
import avtar from "../avtar.png";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

let initialValue = {
  name:"",
  username: "",
  password: "",
};

function Signup() {
  const [signup, setSignup] = useState(initialValue);

  const navigate=useNavigate();
  const handleChange = (e) => {
    setSignup({ ...signup, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    axios
      .post(
        "https://gmailclon.herokuapp.com/users/signup",
        JSON.stringify(signup),
        {
          headers: {
            "Content-type": "application/json",
          },
        }
      )
      .then(() => setSignup(initialValue));
      navigate("/signin");
  };

  return (
    <div className="authentication">
      <div>
      <div>
        <img src={google} alt="google" className="google-pic" />
        <br />
        <label className="text1">One account. All of Google</label>
        <br />
        <label className="text2">Sign up to add a new account in Gmail</label>
        <br />
      </div>
      <div className="main-input-div">
        <img src={avtar} alt="avtar" className="avtar-pic" />
        <br />

        <input
          type="text"
          onChange={handleChange}
          placeholder="Full name"
          className="sign-in-email"
          name="name"
        />
        <br />

        <input
          type="email"
          onChange={handleChange}
          placeholder="Email"
          className="sign-in-email"
          name="username"
        />
        <br />

        <input
          type="password"
          onChange={handleChange}
          placeholder="Password"
          className="sign-in-password"
          name="password"
        />
        <br />

        <button className="login-button" onClick={handleSubmit}>
          Sign up
        </button>
        <br />
      </div>
    </div>
    </div>
  );
}

export default Signup;
