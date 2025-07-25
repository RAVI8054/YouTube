import "./SideNavbar.css";
import { IoHome } from "react-icons/io5";

function SideNavbar() {
  return (
    <div className="Home-SideNavbar">
      <div className="home_sideNavbarTop">
        <div className="home_sideNavbarTopOption">
          <IoHome />
          <div className="home_sideNavbarTopOptionTitle">Home</div>
        </div>
      </div>
    </div>
  );
}

export default SideNavbar;
