import { useState,useEffect } from "react";
import Navbar from "./Componets/Navbar/Navbar";
import Home from "./Pages/home/Home";
import { Routes, Route } from "react-router-dom";
import Video from "./Pages/Video/Video";
import Profile from "./Pages/Profile/Profile";
import VideoUpload from "./Pages/VideoUpload/VideoUpload";
import SignIn from "./Pages/SignIn/SignIn";
import axios from 'axios'

function App() {
  const [sideNavbar, setSideNavbar] = useState("true");

//   useEffect(() => {
//     axios.get('http://localhost:8000/video/allvideos').then(res=>{
//       console.log(res);
      
//     })
//  },[])

  // function for pass value from child to perent
  function setSideNavbarfunc(value) {
    setSideNavbar(value);
  }

  return (
    <div className="App">
      <Navbar setSideNavbarfunc={setSideNavbarfunc} sideNavbar={sideNavbar} />
      <Routes>
        <Route path="/" element={<Home sideNavbar={sideNavbar} />} />
        <Route path="/watch/:id" element={<Video />} />
        <Route path="/user/:id" element={<Profile  sideNavbar={sideNavbar} />} />
        <Route path="/:id/upload" element={<VideoUpload/>} />
      <Route path="/signup" element={<SignIn/>}/>
      </Routes>
    
    </div>
  );
}

export default App;
