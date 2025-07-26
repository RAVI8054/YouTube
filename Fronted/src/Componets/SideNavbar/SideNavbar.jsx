import "./SideNavbar.css";
import Avatar from "react-avatar";

import { IoHome } from "react-icons/io5";
import { IoVideocamSharp } from "react-icons/io5";
import { MdSubscriptions } from "react-icons/md";
import { FaAngleDoubleRight } from "react-icons/fa";
import { MdOutlineRecentActors } from "react-icons/md";
import { FaHistory } from "react-icons/fa";
import { BiSolidVideos } from "react-icons/bi";
import { MdOutlineWatchLater } from "react-icons/md";
import { BiLike } from "react-icons/bi";

function SideNavbar({ sideNavbar }) {
  return (
    <div className={sideNavbar ?"home-sideNavbar":"homeSideNavbarHide"}>
      {/* sidebar top sedction */}
      <div className="home_sideNavbarTop">
        {/* home icon */}
        <div className={`home_sideNavbarTopOption`}>
          <IoHome size={"28"} />
          <div className="home_sideNavbarTopOptionTitle">Home</div>
        </div>
        {/* video icon */}
        <div className={`home_sideNavbarTopOption`}>
          <IoVideocamSharp size={"28"} />
          <div className="home_sideNavbarTopOptionTitle">shorts</div>
        </div>
        {/* Subscriptions icon */}
        <div className={`home_sideNavbarTopOption`}>
          <MdSubscriptions size={"28"} />
          <div className="home_sideNavbarTopOptionTitle">Subscriptions</div>
        </div>
      </div>
      {/* -------------------------------------------------- */}
      {/* middle section sidebar */}
      <div className="home_sideNavbarMiddle">
        <div className={`home_sideNavbarTopOption`}>
          <div className="home_sideNavbarTopOptionTitle font-medium">you</div>
          <FaAngleDoubleRight />
        </div>
        {/* 1.mid history icon */}
        <div className={`home_sideNavbarTopOption`}>
          <FaHistory size={"28"} />
          <div className="home_sideNavbarTopOptionTitle">history</div>
        </div>
        {/* 2. mid chanal icon */}
        <div className={`home_sideNavbarTopOption`}>
          <MdOutlineRecentActors size={"28"} />
          <div className="home_sideNavbarTopOptionTitle">chanals</div>
        </div>
        {/* 2.mid history icon */}
        <div className={`home_sideNavbarTopOption`}>
          <BiSolidVideos size={"28"} />
          <div className="home_sideNavbarTopOptionTitle">Your videos</div>
        </div>
        {/* 3.watch later */}
        <div className={`home_sideNavbarTopOption`}>
          <MdOutlineWatchLater size={"28"} />
          <div className="home_sideNavbarTopOptionTitle">Watch later</div>
        </div>
        <div className={`home_sideNavbarTopOption`}>
          <BiLike size={"28"} />
          <div className="home_sideNavbarTopOptionTitle">liked videos</div>
        </div>{" "}
      </div>
      {/* ---------------------------------------------------------- */}
      {/* Sidebar-bottom componets start  */}
      <div className="home_sideNavbarMiddle">
        <div className={`home_sideNavbarTopOption`}>
          <div className="home_sideNavbarTopOptionTitleheader">
            Subscription
          </div>
        </div>
        {/* chanal logos */}
        {/* chanal 1 */}
        <div className="home_sideNavbarTopOption">
          <Avatar
            className="cursor-pointer"
            src="data:image/png;base64,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"
            size={28}
            round={true}
          />
          <div className="home_sideNavbarTopOptionTitle">internshala</div>
        </div>

        {/* chanal 2 */}
        <div className="home_sideNavbarTopOption">
          <Avatar
            className="cursor-pointer"
            src="data:image/png;base64,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"
            size={28}
            round={true}
          />
          <div className="home_sideNavbarTopOptionTitle">React</div>
        </div>
{/* chanal 3  */}
        <div className="home_sideNavbarTopOption">
          <Avatar
            className="cursor-pointer"
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAflBMVEUTqlL///8ApUQAp0sApkcAqE0ApEIApkb6/vzB5s8AqEqW1K33/frm9exavoCf2LTt+PLX7+DN69l5yZbG6NMkr1w2s2e24caR0qmu3sA+tWwtsmJ8ypih2LWGzqBxxZBpwYhKunXf8ufW7t9Qu3lhwYSy4MPM6thGuHEAoDbWsnNDAAALf0lEQVR4nO2da3eqOhCGISRBUKzWe221Wu3u+f9/8ICXlkAmBHgjunffL2ed1b2EhySTyWQy8fy/XV7XL+Bcv4SPr1/Cx9cv4ePrl/Dx9UsIUS8ZT1f9zWT7ftZ2sumvonHSu8XD3RL2kunb68ELpWScB5mEEKf/cs6kDL3D69vUMag7wlG0PMzikAfCoyUCHsazwzIaOXsPN4Sj6PUlZrGJTeFM/+3L68INpQPC8dNchsaW07dmKF+exvjXQRN+bNac16X7puR8vfkAvxGUMOnP7bsmARmzeT9BvhSOsBftZOPWU1tS7iKcfUURjvrrEIF3gQzXfZTdwRDuJ4LD8M7iYoLprAjC8bsMwHyZAvmOMK3tCffH2AXfiTE+7jsnHE1CV3wnRj5pOx7bEQ6WTvqnwiiXg+4IF2u0fdGJrxcdESZDiZsfTBJy2MKsNifsM9cd9EcB69+ccP91iw76I/7V1Ko2JHxq6X7Wl4jfbkg4Osgb82WSh0YTRxPCyLvdCMwr8KLbEPa7aMCzZAODU5twMOwOMEUc1p7+6xIm62566FXBuu7UWJPw2bu1DS1KeM8uCVesY75MbOWO8KnLIfgj+eSKcHkfgCni0g3h5F4AU8SJC8LXexiDV7FXPOFdAdZBtCWchF0zFcRsO6ol4fK+WjCTrbmxI7yTaUKV5aRhRbi6R8AU0WrqtyF8vr8uehazceAsCJOuQQyycMOrCQfrrp1tWmJdvZiqJhx2u1wyKxi2J+xwRW+j6lV/FWF034ApYlXspoJwhH4hcVyjf7IiAldBeEAPwqC/jMG/eGhDiPdl5J8R+jcrfBsj4R78udNO+uL7W3S/iI0BfyPhF3wmlGMH3018NSXsozdfRHgyfBv074amKcNAmKDd0WsgcDAD/7DHDN6bgRDtzASz63vAJ1mTa0MTLsCvEX/9+JDwBbWkN8JJwsEMa2aCXd5JRgdFxIx0wUnCJdYcBHM1U20LRuRkTIMiBM/LYl78xkewQZWU80YRTqBmRszKxg5syAIq9kYQ7rFfWGoS1HpfWEROeDYE4RH69FBr6XpYWxYc6xCOoY4V3+ifvUc+JJ2O9JmMesJ3ZBMGOz2g70+h5ix4tyfcQ58c00vUN+iDpHYkagmhhjT8JAHB411vTnWEI6QFoAzAWVjPSeh6i44Q686YwyjPSN9G69hoCHvIxU1lWsEGibjWHGLQEEZAx1/MKwB9H9lPQ01oUUN4QD6y+ozPH2AjCk3crUyYAC242cxchIxMybL/WyZERmeYTdrrCEjIyxGbMuEc10mDrQUg9Jtqxn2JcAy0M3ono6Qe7okeKzmnJcINzum2GoWZ3nDGJi55+SVC4H5oaJtFCJyBxbqKcAwcE8ZQtKI33FN5sZsWCZ9wz2Iml1vVAPZQjxf3aYqEL8DpvkbC8hI2Y2R7PyZCYIgtsE+ug7oZxaBbgTDCWTVZK1sZF3kr+qYFwlegf1EH0J/CPm2x7xTeAzcMAyL8RKgH294vDkSVcISb7sM/tQj9Daz3BOpAVAmBS0N6q0QvnLfI1IGoEuLyJIjQnkEwjz9WYxkqIW7xy+sdivCBU2JhGawQAv1Dq5WhojFsSpwp0RqFMMEZmln9whawZ8fKQl8hxE1KwnbhlBMsmhFOSUKci6+JJlRqgfq+XDlPqxDiPBrW4LRngnq66tUohDhTqol5VQs1X6jGVCHEPCBTTHMMSBuE60IUYQ9naAyh7hUZJIYNxDD/EfOEuEWayaPZkEP0A+W4KWMkT/gBI4wNJ3a2pLcD8/tlvpvkCXF+t8lnO5ITCcylUix5nnAFmw51e0BXHeiFIyqfVfnAecI+zGkzRUpf6FD/EUQY5LtJnhC3CKWydzLNaSuE8tuU+EKeEJegENMTfm9G54KiPrGSspAnxG3kaVMGLoTejvwbaomo7HnlCYF5QjThoBSy/REq4K5MxwohLt5tItSlE5yFWtuITglHMb04/ksIOb2f8UCEBkuThPQfH4gwoGeLJKQz+VAb+jQhbsani1buWUjio3bYSVuKmw/5tPjy3xozOtCIcjnI+RDn03B6+3csGbkEhvmllE8D9EvpUNsHo0/R71CElF/ax23/0OuHZ8aoLgxbH5JrC9z6sJzzkSekFo+wNT65PgTurYWk3zJl+rMJPjBOQ67xcXEa7RGSKyEZ4oD1ITJOA0yI4GShyoiRf4PFS8lYGy5eaggnpoTU2WvYsWMyXgqMedO7axELiFAjsLqBApX/H2D+MzmtLxiVpQHb2zPsWwCzaaiG8hchlSwFy/s07D0BUwTJnYuUkHAHYHmfhv1D3B4wnaX/GRJWCHfYyrAHDNzHJ3OiPkNiBxyX7W3Yx4eelhEkoT5giitRYcjFgB4mIRJoV1x37AOZbGLKpwHmRJFJ0Cmh9g84O27MiUIeefKYNncvJdSFhIF50Ma8NuTxFe0hpBOhbiJBHkgw5SZC07wLVvuKwj3d4hF4HsGYXwrNEdaPxJRQ47N+4oZHRY4wMM/b01ccyQhLQe8e8hyLOc8bWw5DtwmTeYYlQuAorMrVxw5E3cHcjLAY9AYa0srzFsgzM5nKZbiy5ioSIk/HV56ZAZ57ylQ2NouwtG+Dc2c8i3NPyLNrmVgxKDNlpX0b5MioPruGPH94UnEVlaSEatddIu23xflD5BnSTMUiqoNiLsozdFxYnCFFngM+KS4seA9CGSrYKjU254DxlfYKRVSXsdJxscWUrM5yI8/jn6U6+1OZzwmDDkLL8/iwPa4fBUq3ZLkjUUB/NJPYlXF0dTHgJfSFyH/ao/xec2CLDFnXxcAdlPuWWOcm+ei/63t8oHuLZW0TdLm9TME8h3i97W+MvpbHtj4NtsbQRWL2g7g/99Ix8PLZy0NsawyBC+6dVbqoaYo3aNZ1osC1vi4SM8WV+cQPhRq1vsAl9y4S+eLiG/xHJGLpt6i5963ver+Dg4P7IWvV3HPTiCni8GzOXdSyr1c3EV378lv/nR029BItU83al/iy4mddMk3wjmHt+qXoGrRXXXx/BxNu7Rq0LhybVPFp/xe/fGlQRxheC/qs894hdAPo/LsNakHD63mf3+S0BocvshvV83Z1wUz2raEFYDM1q8mOr6ufiWfeKfzOhYZ19R10pnMmETKIf5LxbLyxTg7+fotTzCZBl5xvfL+FC/c0fDuFvaEiHFIbQv8JPhSzNIJPbBuyFvfMuLgraIvN+Gh7V5CD+55Su77FDu929z05WOccDtBLWNre2eXg3jUBbcH29679A3fn/QP3H/79d1j+A/eQ/gN3yd7rfcB2tagsK1TezcXxP8Le6ez7k3sbi+h7uf+Bu9XvDNEesAahv72fsShtu2g9wvsxN7ZGpjbhvUwaltfGNyH0V/cwFisvdmlD6D+jkwtq63rVpytCP1l3u5gqpQPACf3BsMvBKIc1CzA3IOz0tnVLV7QtoR953fTUwGtQFbURoT86dGFT2aEiqgYkTGfG+NY2VcS1ZsHWhP7+y1EuAyH+Vbt8dkvC1OCw243GgDUwMa0J/WQob9NVhRw2KUvcntD3F7NbdFW+prewXRP6g6V03VUDuaw9yQMJ04ljwl0yBuGk0RQBJEyt6tEZYxAfm1pQJKHvj49O+mogj8bNXUshCNN2nAi0zeFi0r79MmEI0/G4nAHTtkU4W7Ydf1ehCH2/F+0kR0AKLndR/esxKOEIUyX9OQvaQYqAzfst5veyoISpPjZr3rglBefrTfXdrPWEJkz10Z/LsHZTiiCU8z4az3dCmGq0eH2JmfUKS6T/9uV1gbItqtwQZhpFy8MsDrmxNUXAw3h2WEZu6DK5I8zUS6ZPk50XSsl4HGQSQpz+G3MmZejtJk/TBGc3dXJLeFEv+YhW/c1k+37WdrLpr6IPx2gX3YSwU/0SPr5+CR9fv4SPr1/Cx9cv4ePrf7mVuRc9H+sdAAAAAElFTkSuQmCC"
            size={28}
            round={true}
          />
          <div className="home_sideNavbarTopOptionTitle">mongodb</div>
        </div>
        {/* chanal 4 */}
        <div className="home_sideNavbarTopOption">
          <Avatar
            className="cursor-pointer"
            src="data:image/png;base64,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"
            size={28}
            round={true}
          />
          <div className="home_sideNavbarTopOptionTitle">Express</div>
        </div>








      </div>
    </div>
  );
}

export default SideNavbar;
