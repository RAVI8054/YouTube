import "./SignIn.css"
import { PiYoutubeLogo } from "react-icons/pi";
import Avatar from "react-avatar";
import { Link } from "react-router-dom";



function SignIn() {
  return (
    <div className="signUp">
          <div className="signup_card">
              {/* 1.for logo div  */}
              <div className="signUp_title">
                  <PiYoutubeLogo color="red" size="54px" />
                  SignUp
              </div>
              {/*------- 2. form data div----- */}
              <div className="signUp_Inputs">
                  <input type="text" placeholder="Channel Name" className="signUp_Inputs_inp" />
                  <input type="text" placeholder="UserName Name" className="signUp_Inputs_inp" />
                  <input type="password" placeholder="password" className="signUp_Inputs_inp" />
                  <input type="text" placeholder="About Your Channel" className="signUp_Inputs_inp" />
              
                  <div className="image_upload_signup">
                    <input type="file"  className=""/>
                      <div className="image_upload_signup_div">
                          <Avatar 
                              className="cursor-pointer image_default_signUp "
                              src={"https://images.unsplash.com/photo-1753114767610-75bc913c8423?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
                              size={80}
                              round={true}
                          />
                      </div>
                  </div>
 {/* div for button and form submit */}
                  <div className="signUpBtns">
                      <div className="signUpBtn">
                        SignUp
                      </div>
                      <Link to={"/"} className="signUpBtn">
                        Home Page
                      </Link>
                  </div>

              </div>
          </div>
    </div>
  )
}

export default SignIn
