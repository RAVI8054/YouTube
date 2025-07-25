
import "./Navbar.css"
import { GiHamburgerMenu } from "react-icons/gi";


function Navbar() {
    return (
        <div className="navbar">
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
        </div>
    )
}

export default Navbar
