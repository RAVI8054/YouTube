import "./HomePage.css";
import Avatar from "react-avatar";
import { v4 as uuidv4 } from "uuid";
import {Link} from "react-router-dom"
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

function HomePage({ sideNavbar }) {
  const [data,setData]=useState([])
    useEffect(() => {
    axios.get('http://localhost:8000/video/allvideos').then(res=>{
      console.log(res.data.videos);
      setData(res.data.videos)
    })
 },[])

  //options filter Array for body contect catgory
  const options = [
    "Music",
    "Gaming",
    "News",
    "Education",
    "Science & Technology",
    "Entertainment",
    "Sports",
    "Comedy",
    "How-to & Style",
    "People & Blogs",
    "Travel & Events",
    "Film & Animation",
    "Autos & Vehicles",
    "Pets & Animals",
    "Nonprofits & Activism",
    "Shows",
    "Shorts",
    "Live",
    "Documentary",
  ];


  return (
    <div className={sideNavbar ? "homepage" : "fullHomePage"}>
      {/* catgory filter div */}
      <div className="homePage_options">
        {options.map((item) => {
          return (
            <div className="homePage_option" key={uuidv4()}>
              {item}
            </div>
          );
        })}
      </div>
      {/* ------------------------------------- */}
      {/* 666666       main page div for video */}
      <div className={sideNavbar ? "home_mainPage":"home_mainPageWithoutLink"}>

{/* video=1 */}

{
  data?.map((item,key)=>{
    return(
      <Link to={`/watch/${item._id}`} key={uuidv4()} className="youtube_Video">
          {/* for video display */}
          <div className="youtube_thumbnailBox">
            <img
              className="youtube_thumbnailPic"
            src={item.thumbnail}
              alt="Thumbnail"
            />
          </div>
          {/* for video description */}
          <div className="youtubeTitleBox">
            <div className="youtubeTitleBoxProfile">
            {/* channel  user profile image */}
              <Avatar
                className="cursor-pointer youtube_thumbnail_profile"
              src={item?.user?.profilePic}
                size={32}
                round={true}
              />
            </div>
{/* classes for video descriptipons */}
            <div className="youtubeTitleBox_Title">
            <div className="youtube_videoTitle">{item?.title}</div>
           <div className="youtube_channleName">{item?.user?.channelName}</div>
           <div className="youtubeVideo_views">50k views</div>
            </div>
          </div>
        </Link>
    )
  })
}
        
      </div>
    </div>
  );
}

export default HomePage;
