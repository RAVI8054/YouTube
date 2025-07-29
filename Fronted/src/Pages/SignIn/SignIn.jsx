import "./SignIn.css";
import { PiYoutubeLogo } from "react-icons/pi";
import Avatar from "react-avatar";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function SignIn() {
  // navigate to home  after signup user
  const navigate = useNavigate()
// state for progress barr
const [progress,setProgress] = useState(false)

  // link for image set cloudary
  const [uploadedImageUrl, setUploadedImageUrl] = useState(
    "https://images.unsplash.com/photo-1753114767610-75bc913c8423?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  );
  const [singUpFiled, setSignUpField] = useState({
    channelName: "",
    userName: "",
    password: "",
    about: "",
   "profilePic": uploadedImageUrl,
  });
  // function for handle inpu field
  const handleInputFiled = (event, name) => {
    setSignUpField({
      ...singUpFiled,
      [name]: event.target.value,
    });
  };
  console.log(singUpFiled);
  // function for upload image
  const uploadImage = async (e) => {
    const files = e.target.files;
    // console.log(files)
    const data = new FormData();
    data.append("file", files[0]);
    data.append("upload_preset", "youtube-clone");
    try {
      setProgress(true)
      const response = await axios.post(
        "https://api.cloudinary.com/v1_1/dlgorbunu/image/upload",
        data
      );
      setProgress(false)
      // console.log(response)
      const imageUrl = response.data.url;
      setUploadedImageUrl(imageUrl);
      setSignUpField({
        ...singUpFiled,
        "profilePic":imageUrl,
      });
    } catch (error) {
      console.log(error);
    }
  };
  // for signup buttton function store data in db
  async function handlesignup(){
    setProgress(true)
    axios.post(`http://localhost:8000/auth/signUp`,singUpFiled).then((res)=>{
      // console.log(res);
      toast.success(res.data.message)
      setProgress(false)
      navigate('/')
      
    }).catch(err=>{
      // console.log(err)
      setProgress(false)
      toast.error(err)
    })
  
  }

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
          <input
            type="text"
            placeholder="Channel Name"
            value={singUpFiled.channelName}
            onChange={(e) => {
              handleInputFiled(e, "channelName");
            }}
            className="signUp_Inputs_inp"
          />
          <input
            type="text"
            placeholder="UserName Name"
            value={singUpFiled.userName}
            onChange={(e) => {
              handleInputFiled(e, "userName");
            }}
            className="signUp_Inputs_inp"
          />
          <input
            type="password"
            placeholder="password"
            value={singUpFiled.password}
            onChange={(e) => {
              handleInputFiled(e, "password");
            }}
            className="signUp_Inputs_inp"
          />
          <input
            type="text"
            placeholder="About Your Channel"
            value={singUpFiled.about}
            onChange={(e) => {
              handleInputFiled(e, "about");
            }}
            className="signUp_Inputs_inp"
          />

          <div className="image_upload_signup">
            <input type="file" onChange={(e) => uploadImage(e)} className="" />
            <div className="image_upload_signup_div">
              <Avatar
                className="cursor-pointer image_default_signUp "
                src={uploadedImageUrl}
                size={80}
                round={true}
              />
            </div>
          </div>
          {/* div for button and form submit */}
          <div className="signUpBtns">
            <div className="signUpBtn" onClick={handlesignup}>SignUp</div>
            <Link to={"/"} className="signUpBtn">
              Home Page
            </Link>
          </div>

          {/* loder image */}
          {
            progress && <div>
          <h1 className=" text-2xl bg-amber-500 w-full rounded-md" >please wait signup ......
          </h1></div>
          }
          

        </div>
      </div>
      <ToastContainer/>
    </div>
  );
}

export default SignIn;
