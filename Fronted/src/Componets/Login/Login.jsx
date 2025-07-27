import React, { useState } from "react";
import "./Login.css";
import { PiYoutubeLogo } from "react-icons/pi";
import { Link } from "react-router-dom";

function Login({ setLoginModel }) {
  const [loginField,setLoginField]= useState({ userName: "", password: "" });
    console.log("loginField: ", loginField)
//   function for handle field input
    const handleOnChangeInput=(event,name)=>{
        setLoginField({
            ...loginField,[name]:event.target.value
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
          <div className="login-btn">Login</div>
          <Link
            to={"/signup"}
            className="login-btn"
            onClick={() => setLoginModel()}
          >
            SignUp
          </Link>
          <div className="login-btn" onClick={() => setLoginModel()}>
            Cancel
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
