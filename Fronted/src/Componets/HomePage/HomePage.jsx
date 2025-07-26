import "./HomePage.css";
import Avatar from "react-avatar";
import { v4 as uuidv4 } from "uuid";
import {Link} from "react-router-dom"

function HomePage({ sideNavbar }) {
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
        <Link to={"/watch/1"} className="youtube_Video">
          {/* for video display */}
          <div className="youtube_thumbnailBox">
            <img
              className="youtube_thumbnailPic"
              src="https://i.ytimg.com/vi/D86VdlVDG_w/hqdefault.jpg?sqp=-oaymwExCOADEI4CSFryq4qpAyMIARUAAIhCGAHwAQH4Af4JgALQBYoCDAgAEAEYciBdKDwwDw==&rs=AOn4CLBAH_afNVvykHqPfvtYR2Rq-zOHMA"
              alt="Thumbnail"
            />
          </div>
          {/* for video description */}
          <div className="youtubeTitleBox">
            <div className="youtubeTitleBoxProfile">
              <Avatar
                className="cursor-pointer youtube_thumbnail_profile"
                src="https://encrypted-tbnLpw2ViqO-S21pxcPbAe4aBOS2xcLQVEg&s"
                size={32}
                round={true}
              />
            </div>
{/* classes for video descriptipons */}
            <div className="youtubeTitleBox_Title">
            <div className="youtube_videoTitle">User1</div>
           <div className="youtube_channleName">@2user</div>
           <div className="youtubeVideo_views">views</div>
            </div>
          </div>
        </Link>
{/* video=2 */}
        <Link to={"/watch/1"} className="youtube_Video">
          {/* for video display */}
          <div className="youtube_thumbnailBox">
            <img
              className="youtube_thumbnailPic"
              src="https://i.ytimg.com/vi/D86VdlVDG_w/hqdefault.jpg?sqp=-oaymwExCOADEI4CSFryq4qpAyMIARUAAIhCGAHwAQH4Af4JgALQBYoCDAgAEAEYciBdKDwwDw==&rs=AOn4CLBAH_afNVvykHqPfvtYR2Rq-zOHMA"
              alt="Thumbnail"
            />
          </div>
          {/* for video description */}
          <div className="youtubeTitleBox">
            <div className="youtubeTitleBoxProfile">
              <Avatar
                className="cursor-pointer youtube_thumbnail_profile"
                src="https://encrypted-tbnLpw2ViqO-S21pxcPbAe4aBOS2xcLQVEg&s"
                size={32}
                round={true}
              />
            </div>
            {/* classes for video descriptipons */}
            <div className="youtubeTitleBox_Title">
              <div className="youtube_videoTitle">User1</div>
              <div className="youtube_channleName">@2user</div>
              <div className="youtubeVideo_views">views</div>
            </div>
          </div>
        </Link>
{/* video=3 */}
        <Link to={"/watch/1"} className="youtube_Video">
          {/* for video display */}
          <div className="youtube_thumbnailBox">
            <img
              className="youtube_thumbnailPic"
              src="https://i.ytimg.com/vi/D86VdlVDG_w/hqdefault.jpg?sqp=-oaymwExCOADEI4CSFryq4qpAyMIARUAAIhCGAHwAQH4Af4JgALQBYoCDAgAEAEYciBdKDwwDw==&rs=AOn4CLBAH_afNVvykHqPfvtYR2Rq-zOHMA"
              alt="Thumbnail"
            />
          </div>
          {/* for video description */}
          <div className="youtubeTitleBox">
            <div className="youtubeTitleBoxProfile">
              <Avatar
                className="cursor-pointer youtube_thumbnail_profile"
                src="https://encrypted-tbnLpw2ViqO-S21pxcPbAe4aBOS2xcLQVEg&s"
                size={32}
                round={true}
              />
            </div>
            {/* classes for video descriptipons */}
            <div className="youtubeTitleBox_Title">
              <div className="youtube_videoTitle">User1</div>
              <div className="youtube_channleName">@2user</div>
              <div className="youtubeVideo_views">views</div>
            </div>
          </div>
        </Link>
 {/* video=4 */}
        <Link to={"/watch/1"} className="youtube_Video">
          {/* for video display */}
          <div className="youtube_thumbnailBox">
            <img
              className="youtube_thumbnailPic"
              src="https://i.ytimg.com/vi/D86VdlVDG_w/hqdefault.jpg?sqp=-oaymwExCOADEI4CSFryq4qpAyMIARUAAIhCGAHwAQH4Af4JgALQBYoCDAgAEAEYciBdKDwwDw==&rs=AOn4CLBAH_afNVvykHqPfvtYR2Rq-zOHMA"
              alt="Thumbnail"
            />
          </div>
          {/* for video description */}
          <div className="youtubeTitleBox">
            <div className="youtubeTitleBoxProfile">
              <Avatar
                className="cursor-pointer youtube_thumbnail_profile"
                src="https://encrypted-tbnLpw2ViqO-S21pxcPbAe4aBOS2xcLQVEg&s"
                size={32}
                round={true}
              />
            </div>
            {/* classes for video descriptipons */}
            <div className="youtubeTitleBox_Title">
              <div className="youtube_videoTitle">User1</div>
              <div className="youtube_channleName">@2user</div>
              <div className="youtubeVideo_views">views</div>
            </div>
          </div>
        </Link>
{/* video=5 */}
        <Link to={"/watch/1"} className="youtube_Video">
          {/* for video display */}
          <div className="youtube_thumbnailBox">
            <img
              className="youtube_thumbnailPic"
              src="https://i.ytimg.com/vi/D86VdlVDG_w/hqdefault.jpg?sqp=-oaymwExCOADEI4CSFryq4qpAyMIARUAAIhCGAHwAQH4Af4JgALQBYoCDAgAEAEYciBdKDwwDw==&rs=AOn4CLBAH_afNVvykHqPfvtYR2Rq-zOHMA"
              alt="Thumbnail"
            />
          </div>
          {/* for video description */}
          <div className="youtubeTitleBox">
            <div className="youtubeTitleBoxProfile">
              <Avatar
                className="cursor-pointer youtube_thumbnail_profile"
                src="https://encrypted-tbnLpw2ViqO-S21pxcPbAe4aBOS2xcLQVEg&s"
                size={32}
                round={true}
              />
            </div>
            {/* classes for video descriptipons */}
            <div className="youtubeTitleBox_Title">
              <div className="youtube_videoTitle">User1</div>
              <div className="youtube_channleName">@2user</div>
              <div className="youtubeVideo_views">views</div>
            </div>
          </div>
        </Link>
{/* video=6 */}
        <Link to={"/watch/1"} className="youtube_Video">
          {/* for video display */}
          <div className="youtube_thumbnailBox">
            <img
              className="youtube_thumbnailPic"
              src="https://i.ytimg.com/vi/D86VdlVDG_w/hqdefault.jpg?sqp=-oaymwExCOADEI4CSFryq4qpAyMIARUAAIhCGAHwAQH4Af4JgALQBYoCDAgAEAEYciBdKDwwDw==&rs=AOn4CLBAH_afNVvykHqPfvtYR2Rq-zOHMA"
              alt="Thumbnail"
            />
          </div>
          {/* for video description */}
          <div className="youtubeTitleBox">
            <div className="youtubeTitleBoxProfile">
              <Avatar
                className="cursor-pointer youtube_thumbnail_profile"
                src="https://encrypted-tbnLpw2ViqO-S21pxcPbAe4aBOS2xcLQVEg&s"
                size={32}
                round={true}
              />
            </div>
            {/* classes for video descriptipons */}
            <div className="youtubeTitleBox_Title">
              <div className="youtube_videoTitle">User1</div>
              <div className="youtube_channleName">@2user</div>
              <div className="youtubeVideo_views">views</div>
            </div>
          </div>
        </Link>
        {/* video 7 */}
        <Link to={"/watch/1"} className="youtube_Video">
          {/* for video display */}
          <div className="youtube_thumbnailBox">
            <img
              className="youtube_thumbnailPic"
              src="https://i.ytimg.com/vi/D86VdlVDG_w/hqdefault.jpg?sqp=-oaymwExCOADEI4CSFryq4qpAyMIARUAAIhCGAHwAQH4Af4JgALQBYoCDAgAEAEYciBdKDwwDw==&rs=AOn4CLBAH_afNVvykHqPfvtYR2Rq-zOHMA"
              alt="Thumbnail"
            />
          </div>
          {/* for video description */}
          <div className="youtubeTitleBox">
            <div className="youtubeTitleBoxProfile">
              <Avatar
                className="cursor-pointer youtube_thumbnail_profile"
                src="https://encrypted-tbnLpw2ViqO-S21pxcPbAe4aBOS2xcLQVEg&s"
                size={32}
                round={true}
              />
            </div>
            {/* classes for video descriptipons */}
            <div className="youtubeTitleBox_Title">
              <div className="youtube_videoTitle">User1</div>
              <div className="youtube_channleName">@2user</div>
              <div className="youtubeVideo_views">views</div>
            </div>
          </div>
        </Link>
        {/* video 8 */}
        <Link to={"/watch/1"} className="youtube_Video">
          {/* for video display */}
          <div className="youtube_thumbnailBox">
            <img
              className="youtube_thumbnailPic"
              src="https://i.ytimg.com/vi/D86VdlVDG_w/hqdefault.jpg?sqp=-oaymwExCOADEI4CSFryq4qpAyMIARUAAIhCGAHwAQH4Af4JgALQBYoCDAgAEAEYciBdKDwwDw==&rs=AOn4CLBAH_afNVvykHqPfvtYR2Rq-zOHMA"
              alt="Thumbnail"
            />
          </div>
          {/* for video description */}
          <div className="youtubeTitleBox">
            <div className="youtubeTitleBoxProfile">
              <Avatar
                className="cursor-pointer youtube_thumbnail_profile"
                src="https://encrypted-tbnLpw2ViqO-S21pxcPbAe4aBOS2xcLQVEg&s"
                size={32}
                round={true}
              />
            </div>
            {/* classes for video descriptipons */}
            <div className="youtubeTitleBox_Title">
              <div className="youtube_videoTitle">User1</div>
              <div className="youtube_channleName">@2user</div>
              <div className="youtubeVideo_views">views</div>
            </div>
          </div>
        </Link>

      </div>
    </div>
  );
}

export default HomePage;
