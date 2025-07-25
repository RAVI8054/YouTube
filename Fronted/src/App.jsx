import { useState } from "react";
import Navbar from "./Componets/Navbar/Navbar";
import Home from "./Pages/home/Home";
import { Routes, Route } from "react-router-dom";
import Video from "./Pages/Video/Video";


function App() {
  const [sideNavbar, setSideNavbar] = useState("true");
  function setSideNavbarfunc(value) {
    setSideNavbar(value);
  }

  return (
    <div className="App">
      <Navbar setSideNavbarfunc={setSideNavbarfunc} sideNavbar={sideNavbar} />
      <Routes>
        <Route path="/" element={<Home sideNavbar={sideNavbar} />} />
        <Route path="/watch/:id" element={<Video />} />
      </Routes>
    
    </div>
  );
}

export default App;
