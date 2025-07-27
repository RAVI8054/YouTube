import SideNavbar from "../../Componets/SideNavbar/SideNavbar";
import { FaCaretSquareRight } from "react-icons/fa";
import "./Profile.css";

function Profile({ sideNavbar }) {
  return (
    <div className="profile">
      {/* import common sidenavbar */}
      <SideNavbar sideNavbar={sideNavbar} />
      {/* div1 for  profile logo and description*/}
      <div className="profile_page">

        <div className="profile_top_section">
        {/* image section for user profile */}
          <div className="profile_top_section_profile">
            <img
              src="https://images.unsplash.com/photo-1753114767610-75bc913c8423?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
              className="profile_top_section_img"
            />
          </div>
     {/* about user deatils page  */}
                  <div className="profile_top_section_About">
                      <div className="profile_top_section_About_Name">
                        codingHunger
                      </div>
                      <div className="profile_top_section_info">
                        @user  .4 videos
                      </div>
                      <div className="profile_top_section_info">
                        About Section of Channel
                      </div>

                  </div>


        </div>

     <div className="profile_videos">
     {/* main heading  of chanal description  */}
                  <div className="profile_videos_title"> Videos &nbsp; <FaCaretSquareRight /></div>
                  <div className="profileVideos">

                  {/* ----div for perticular video--- */}
                      <div className="profileVideo_block">
                      {/* -----video section video thambnail--- */}
                          <div className="profileVideo_block_thumbnail">
                              <img src="https://i.ytimg.com/vi/D86VdlVDG_w/hqdefault.jpg?sqp=-oaymwExCOADEI4CSFryq4qpAyMIARUAAIhCGAHwAQH4Af4JgALQBYoCDAgAEAEYciBdKDwwDw==&rs=AOn4CLBAH_afNVvykHqPfvtYR2Rq-zOHMA" alt="" className="profileVideo_block_thumbnail_img" />
                          </div>
                          <div className="profileVideo_block_detail">
                              <div className="profileVideo_block_detail_name">Video Title</div>

                          </div>

                      </div>
                  </div>


              </div>





      </div>
    </div>
  );
}

export default Profile;
