import "./Navbar.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoIosSearch } from "react-icons/io";
import { TiMicrophone } from "react-icons/ti";
import { MdVideoCall } from "react-icons/md";
import { IoIosNotifications } from "react-icons/io";
import Avatar from "react-avatar";
import { useEffect, useState } from "react";
import { Link,useNavigate} from "react-router-dom";
import Login from "../Login/Login";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function Navbar({ setSideNavbarfunc,sideNavbar}) {
  //login profile change with state
  const [userPic, setUserPic] = useState(
    "https://i.pinimg.com/736x/05/78/16/05781612d2cbadf5e423cd0cef59b4f1.jpg"
  );
  //login page show  or hide state
  const [navbarModal, setNavbarModal] = useState(false);
  // login or logout page remove state
  const [login, setLogin] = useState(false)

  // for  sign in button chelk login or not user
  const [isLogedIn,setIsLogedIn]=useState(false)

// for sigin pic after login contional rendering
useEffect(()=>{
  let userProfilePic = localStorage.getItem("userProfilePic")
  setIsLogedIn(localStorage.getItem("userId")!==null?true:false)
  if(userProfilePic!==null){
    setUserPic(userProfilePic)
  }

})

// navigate  hook for user profile
const navigate=useNavigate()

  function handleClickModal(){
    setNavbarModal(prv=>!prv)
  }

  function sideNavbarFunc(){
    setSideNavbarfunc(!sideNavbar)
  }
// function for profile navigate  handle
 const handleProfile=()=>{
  const userId=localStorage.getItem("userId")
  navigate(`/user/${userId}`)
   setNavbarModal(false)
 }
// function for set login value false for close login page

const setLoginModel=()=>{
  setLogin(false)
}

//  handle funcinailty of login and logout page
  const onclickOfPopUpOption = (button) => {
    setNavbarModal(false);

    if (button === "login") {
      setLogin(true);
    } else {
      localStorage.clear()
      getLogoutFun()
      setTimeout(() => {
        navigate('/')
        window.location.reload()
      }, 1000);
    }
  }

  // for logout api function
  async function getLogoutFun() {
    axios.post('http://localhost:8000/auth/logout',{},{withCrendentials:true}).then((res)=>{
      console.log("logout");
    }).catch(err=>{
      console.log(err);
      
    })
  }
  return (
    <div className="navbar">
      {/* navbar left */}
      <div className="navbar-left">
        <div className="navbarHamburger" onClick={sideNavbarFunc}>
          <GiHamburgerMenu size="32px" color="white" />
        </div>
        {/* youtube image logo */}
        <Link  to={"/"} className="navbar_youtubeImg ml-7 bg-amber-50">
          <img
            className=""
            width={"70px"}
            src="data:image/png;base64,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"
            alt=""
          />
        </Link>
      </div>
      {/* navbar-center */}
      <div className="navbar-middle">
      {/* for search icon+search icon */}
        <div className="navbar_searchBox">
          <input
            className="navbar_searchBoxInput"
            placeholder="search  ..."
            type="text"
          />
          <div className="navbar_searchIconBox">
            <IoIosSearch size="28px" color="white"/>
          </div>

          <div className="navbar_mike">
            <TiMicrophone size="28px" color="white" />
          </div>
        </div>
      </div>
      {/* right-navBar-start */}
      <div className="navbar-right">


        <div onClick={() => {
          if (isLogedIn) {
            navigate("/34/upload");
          } else {
            toast.warn("Please login first", {
              position: "top-right",
              autoClose: 3000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            });
          }
        }}>
          <MdVideoCall size="32px" color="white" style={{ cursor: "pointer" }} />
        </div>

      
        <IoIosNotifications size="32px" color="white" />
        
        {/* <div onClick={handleClickModal} className="flex items-center"> */}
          <Avatar 
            onClick={handleClickModal}
            className="cursor-pointer"
            src={userPic}
            size={32}
            round={true}
          />
        {!isLogedIn && <div className="text-white" onClick={handleClickModal}>sign in </div>}
        {/* </div> */}
        {/* login page modal */}
        {navbarModal &&
          <div className="navbar-modal">
            {isLogedIn && <div className="navbar-modal-option" onClick={handleProfile}>profile</div>}
           
            {isLogedIn && <div className="navbar-modal-option" onClick={() => onclickOfPopUpOption("logout")}>LogOut</div>}
          
            {!isLogedIn && <div className="navbar-modal-option"  onClick={()=>onclickOfPopUpOption("login")}> Login</div>}
          
          </div>
        }

      </div>
      {/* rightBar-end */}
      {/* condtional redering of login componet */}
      {
        login && <Login setLoginModel={setLoginModel}  />
      }
      <ToastContainer />
    </div>
  );
}

export default Navbar;
