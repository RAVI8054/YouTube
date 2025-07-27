import React from 'react'
import "./Login.css"
import { PiYoutubeLogo } from "react-icons/pi";
import { Link } from 'react-router-dom';

function Login({setLoginModel}) {
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
                      <input type="text" placeholder='UserName' className="userNameLoginUserName" />
                  </div>
                  <div className="userNameLogin">
                      <input type="password" placeholder='Password' className="userNameLoginUserName" />
                  </div>      
              </div>

              {/* for login buttton div */}
              <div className="login_buttons">
                  <div className="login-btn">Login</div>
                  <Link to={"/signup"} className="login-btn" onClick={() => setLoginModel()}>SignUp</Link>
                  <div className="login-btn" onClick={() => setLoginModel()}>Cancel</div>
              </div>
          </div>
    </div>
  )
}

export default Login
