
import SideNavbar from '../../Componets/SideNavbar/SideNavbar'
import HomePage from '../../Componets/HomePage/HomePage'
import "./Home.css"

function Home({ sideNavbar }) {
  return (
    <div className="home">
      <SideNavbar sideNavbar={sideNavbar}/>
       <HomePage/>
    </div>
  )
}

export default Home
