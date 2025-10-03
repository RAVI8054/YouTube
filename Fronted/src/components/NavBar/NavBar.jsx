// React and hooks
import { useEffect, useState } from 'react';

// Icons from Material UI
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import MicIcon from '@mui/icons-material/Mic';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AddIcon from '@mui/icons-material/Add';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

// Login component
import LogIn from '../Pages/LogIn/LogIn';

// CSS styling
import './NavBar.css';

// Routing and navigation
import { Link, useNavigate } from 'react-router-dom';

// Axios for HTTP requests
import axios from 'axios';

// Toast notifications
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function NavBar({ toggleSideBar, onSearch }) {
  // Profile image URL
  const [imgUrl, setImgUrl] = useState('https://i.pinimg.com/736x/05/78/16/05781612d2cbadf5e423cd0cef59b4f1.jpg');

  // Show/hide profile details dropdown
  const [details, setDetails] = useState(false);

  // Login modal visibility
  const [loginOpen, setLoginOpen] = useState(false);

  // Logged-in state
  const [userLoggedIn, setUserLoggedIn] = useState(false);

  // Search input value
  const [searchTerm, setSearchTerm] = useState('');

  // User's channel ID
  const [userChannelId, setUserChannelId] = useState(localStorage.getItem("UserChannelId") || null);

  // Hook for navigation
  const navigate = useNavigate();

  // On mount: check localStorage and fetch user channel
  useEffect(() => {
    const userId = localStorage.getItem("UserId");
    const profileImage = localStorage.getItem("UserProfilePic");

    setUserLoggedIn(!!userId); // If userId exists, user is logged in

    if (profileImage) setImgUrl(profileImage); // Set profile image if available

    // Fetch user's channel info from backend
    if (userId) {
      axios.get(` https://youtube-backend-b29o.onrender.com/channel/by-user/${userId}`)
        .then(response => {
          if (response.data) {
            localStorage.setItem("UserChannelId", response.data._id);
            setUserChannelId(response.data._id);
          }
        })
        .catch(err => console.error("Channel fetch failed:", err));
    }
  }, []);

  // Handle login or logout
  function handleLoginLogout(action) {
    if (action === "login") {
      setLoginOpen(true);
      setDetails(false);
    } else {
      localStorage.clear(); // Clear user data
      setUserLoggedIn(false);
      setDetails(false);
      setTimeout(() => {
        // Reset profile image and refresh
        setImgUrl('https://res.cloudinary.com/dlgorbunu/image/upload/v1754120567/c1ym2lacngjdwplni1q7.jpg');
        navigate('/');
        window.location.reload();
      }, 1000);
    }
  }

  // Trigger search action
  function handleSearchClick() {
    onSearch(searchTerm.trim() || '');
  }

  // Navigate to user's channel page
  function goToMyChannel() {
    const userId = localStorage.getItem("UserId");
    const channelId = localStorage.getItem("UserChannelId");

    if (channelId && userId) {
      setDetails(false);
      navigate(`/mychannel/${userId}`);
    }
  }

  return (
    <div className='navbar'>
      {/* Left section: sidebar toggle and YouTube logo */}
      <div className="left">
        <MenuIcon className='hover:bg-gray-100 menu-icon' onClick={toggleSideBar} />
        <Link to={'/'}>
          <img
            className='youtube-icon'
            width={"42px"}
            color='white'
            src='https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Logo_of_YouTube_%282015-2017%29.svg/2560px-Logo_of_YouTube_%282015-2017%29.svg.png'
          />
        </Link>
      </div>

      {/* Middle section: search bar and microphone */}
      <div className="mid">
        <div className="search-bar">
          <input
            type="text"
            placeholder='Search'
            className='search-box'
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <div className="search-icon" onClick={handleSearchClick}>
            <SearchIcon sx={{ color: 'black', fontSize: "20px" }} className='search-button' />
          </div>
        </div>
        <div className="mic-icon">
          <MicIcon sx={{ color: 'black', fontSize: '20px' }} />
        </div>
      </div>

      {/* Right section: upload, notifications, account/login */}
      <div className="right">
        {/* Upload button only shown if user is logged in */}
        {userLoggedIn && (
          <button
            className="create-button"
            onClick={() => {
              if (!userChannelId) {
                toast.error('Please create a channel first');
              } else {
                window.location.href = "/upload-video"; // Manual redirect
              }
            }}
          >
            <AddIcon sx={{ color: 'black', fontSize: '20px' }} />
            <p className="text">upload</p>
          </button>
        )}

        {/* Notification icon */}
        <div className="bell">
          <NotificationsIcon sx={{ color: 'black', fontSize: '25px' }} />
        </div>

        {/* If user not logged in, show sign-in button */}
        {!userLoggedIn && (
          <div className="sign-in-container" onClick={() => handleLoginLogout("login")}>
            <AccountCircleIcon sx={{ color: '#065fd4', fontSize: '24px' }} />
            <span className="sign-in-text">Sign In</span>
          </div>
        )}

        {/* Profile picture and dropdown for logged-in user */}
        {userLoggedIn && (
          <div className="profile" onClick={() => setDetails(!details)}>
            <img src={imgUrl} alt="profile" className='h-2' />
          </div>
        )}

        {/* Dropdown with login/logout/my channel options */}
        {details && (
          <div className="details-dropdown">
            {!userLoggedIn && <p onClick={() => handleLoginLogout("login")}>Login</p>}
            {userLoggedIn && (
              <>
                <p onClick={() => handleLoginLogout("logout")}>Logout</p>
                {localStorage.getItem("UserChannelId") ? (
                  <p onClick={goToMyChannel}>My Channel</p>
                ) : (
                  <p onClick={() => navigate("/create-channel")}>Create Channel</p>
                )}
              </>
            )}
          </div>
        )}
      </div>

      {/* Login modal if opened */}
      {loginOpen && <LogIn setLogin={setLoginOpen} />}

      {/* Toast messages container */}
      <ToastContainer style={{ overflow: "hidden" }} />
    </div>
  );
}

export default NavBar;
