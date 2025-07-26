import { useState } from "react"
import Navbar from "./Componets/Navbar/Navbar"
import Home from "./Pages/home/Home"


function App() {
const [sideNavbar,setSideNavbar]=useState("true")

  function setSideNavbarfunc(value){
    setSideNavbar(value)
  }

  return (
    <div className='App'>
      <Navbar setSideNavbarfunc={setSideNavbarfunc} />
      <Home />
    </div>
  )
}

export default App
