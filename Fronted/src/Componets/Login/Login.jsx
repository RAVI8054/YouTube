import React, { useState } from "react";
import "./Login.css";
import { PiYoutubeLogo } from "react-icons/pi";
import { Link } from "react-router-dom";
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Login({ setLoginModel }) {
  const [loginField,setLoginField]= useState({ userName: "", password: "" });
    console.log("loginField: ", loginField)
//   function for handle field input
    const handleOnChangeInput=(event,name)=>{
        setLoginField({
            ...loginField,[name]:event.target.value
        })
    }
// for login handle function
 async function handleLoginFun(){
   axios.post("http://localhost:8000/auth/login",loginField).then((resp)=>{
    // console.log(resp)
    localStorage.setItem("token",resp.data.token)
    localStorage.setItem('userId',resp.data.user._id)
    localStorage.setItem('userProfilePic',resp.data.user.profilePic)
    //  console.log(resp.data.token);

    window.location.reload()
   }).catch(err=>{
    console.log(err);
    toast.error("invalid Credentials")
    
   })
  }

  return (
    <div className="login">
      <div className="login_card">
        <div className="titleCard_login">
          <PiYoutubeLogo color="red" size="54px" />
          Login
        </div>
        {/* div for input loginCredentials */}
        <div className="loginCredentials">
          <div className="userNameLogin">
            <input
              type="text"
              value={loginField.userName}
              onChange={(e) => handleOnChangeInput(e, "userName")}
              placeholder="UserName"
              className="userNameLoginUserName"
            />
          </div>
          <div className="userNameLogin">
            <input
              type="password"
              value={loginField.password}
              onChange={(e) => handleOnChangeInput(e, "password")}
              placeholder="Password"
              className="userNameLoginUserName"
            />
          </div>
        </div>

        {/* for login buttton div */}
        <div className="login_buttons">
          <button className="login-btn" onClick={handleLoginFun}>Login</button>
          <Link
            to={"/signup"}
            className="login-btn"
            onClick={() => setLoginModel()}
          >
            SignUp
          </Link>
          <button className="login-btn" onClick={() => setLoginModel()}>
           Cancel</button>
        </div>
      </div>
      <ToastContainer/>
    </div>
  );
}

export default Login;
