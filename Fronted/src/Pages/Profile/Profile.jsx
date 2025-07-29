import SideNavbar from "../../Componets/SideNavbar/SideNavbar";
import { FaCaretSquareRight } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import "./Profile.css";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { v4 as uuidv4 } from 'uuid';

function Profile({ sideNavbar }) {
  const [data, setData] = useState([]);

  // for state handle of user
  const [user, setUser] = useState(null);
  const { id } = useParams();
  // function for get profile deatils
  async function fetchProfileData() {
    await axios
      .get(` http://localhost:8000/video/${id}/Channel`)
      .then((Response) => {
        // console.log(Response);
        setData(Response.data.video);
        setUser(Response.data.video[0]?.user);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  useEffect(() => {
    fetchProfileData();
  }, []);

  return (
    <div className="profile">
      {/* import common sidenavbar */}
      <SideNavbar sideNavbar={sideNavbar} />
      {/* div1 for  profile logo and description*/}
      <div className={sideNavbar ? "profile_page" : "profile_page_inactive"}>
        <div className="profile_top_section">
          {/* image section for user profile */}
          <div className="profile_top_section_profile">
            <img
              src={user?.profilePic}
              alt=""
              className="profile_top_section_img"
            />
          </div>
          {/* about user deatils page  */}
          <div className="profile_top_section_About">
            <div className="profile_top_section_About_Name">
              {user?.channelName}
            </div>
            <div className="profile_top_section_info">{user?.userName} {data.length} videos</div>
            <div className="profile_top_section_info">
             {user?.about}
            </div>
          </div>
        </div>

        <div className="profile_videos">
          {/* main heading  of chanal description  */}
          <div className="profile_videos_title">
            {" "}
            Videos &nbsp; <FaCaretSquareRight />
          </div>
          <div className="profileVideos">
            {/* ----div for perticular video--- */}
            {/* ------video 1-------- */}

            {
              data?.map((item,key)=>{
                return(
                  <Link to={`/watch/${item._id}`}  key={uuidv4()} className="profileVideo_block">
              {/* -----video section video thambnail--- */}
              <div className="profileVideo_block_thumbnail">
                <img
                        src={item?.thumbnail}
                  alt=""
                  className="profileVideo_block_thumbnail_img"
                />
              </div>
              <div className="profileVideo_block_detail">
                <div className="profileVideo_block_detail_name">
                        {item?.title}
                </div>
                <div className="profileVideo_block_detail_about">
                  Created {item?.createdAt.slice(0,10)}
                </div>
              </div>
            </Link>
                )
              })
            }
           
           
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
