import "./Navbar.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoIosSearch } from "react-icons/io";
import { TiMicrophone } from "react-icons/ti";
import { MdVideoCall } from "react-icons/md";
import { IoIosNotifications } from "react-icons/io";
import Avatar from "react-avatar";
import { useState } from "react";

function Navbar() {
    //login profile change with state
  const [userPic, setUserPic] = useState(
    "https://i.pinimg.com/736x/05/78/16/05781612d2cbadf5e423cd0cef59b4f1.jpg"
  );
  //login page show 
  const [navbarModal, setNavbarModal] = useState(false);
  function handleClickModal(){
    setNavbarModal(prv=>!prv)
  }


  return (
    <div className="navbar">
      {/* navbar left */}
      <div className="navbar-left">
        <div className="navbarHamburger">
          <GiHamburgerMenu size="32px" />
        </div>
        <div className="navbar_youtubeImg">
          <img
            className=""
            width={"115px"}
            src="https://t3.ftcdn.net/jpg/03/00/38/90/360_F_300389025_b5hgHpjDprTySl8loTqJRMipySb1rO0I.jpg"
            alt=""
          />
        </div>
      </div>
      {/* navbar-center */}
      <div className="navbar-middle">
        <div className="navbar_searchBox">
          <input
            className="navbar_searchBoxInput"
            placeholder="search  ..."
            type="text"
          />
          <div className="navbar_searchIconBox">
            <IoIosSearch size="28px" />
          </div>

          <div className="navbar_mike">
            <TiMicrophone size="28px" />
          </div>
        </div>
      </div>
      {/* right-navBar-start */}
      <div className="navbar-right">
        <MdVideoCall size="32px" />
        <IoIosNotifications size="32px" />
        
        <Avatar onClick={handleClickModal}
          className="cursor-pointer"
          src={userPic}
          size={32}
          round={true}
        />
        {/* login page modal */}
        {navbarModal &&
          <div className="navbar-modal">
            <div className="navbar-modal-option">profile</div>
            <div className="navbar-modal-option">LogOut</div>
            <div className="navbar-modal-option">Login</div>
          </div>
        }

      </div>

      {/* rightBar-end */}
    </div>
  );
}

export default Navbar;
