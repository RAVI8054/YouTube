import "./HomePage.css";
import Avatar from "react-avatar";
import { v4 as uuidv4 } from "uuid";

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
        <div className="youtube_Video">
          {/* for video display */}
          <div className="youtube_thumbnailBox">
            <img
              className="youtube_thumbnailPic"
              src="https://i.ytimg.com/an_webp/myKnOjy77lQ/mqdefault_6s.webp?du=3000&sqp=CPSnksQG&rs=AOn4CLDKbhmsgGZF5u3NGfC_e-iJucp2Qw"
              alt="Thumbnail"
            />
          </div>
          {/* for video description */}
          <div className="youtubeTitleBox">
            <div className="youtubeTitleBoxProfile">
              <Avatar
                className="cursor-pointer youtube_thumbnail_profile"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSah5Lpw2ViqO-S21pxcPbAe4aBOS2xcLQVEg&s"
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
        </div>
{/* video=2 */}
        <div className="youtube_Video">
          {/* for video display */}
          <div className="youtube_thumbnailBox">
            <img
              className="youtube_thumbnailPic"
              src="https://i.ytimg.com/an_webp/myKnOjy77lQ/mqdefault_6s.webp?du=3000&sqp=CPSnksQG&rs=AOn4CLDKbhmsgGZF5u3NGfC_e-iJucp2Qw"
              alt="Thumbnail"
            />
          </div>
          {/* for video description */}
          <div className="youtubeTitleBox">
            <div className="youtubeTitleBoxProfile">
              <Avatar
                className="cursor-pointer youtube_thumbnail_profile"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSah5Lpw2ViqO-S21pxcPbAe4aBOS2xcLQVEg&s"
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
        </div>
{/* video=3 */}
        <div className="youtube_Video">
          {/* for video display */}
          <div className="youtube_thumbnailBox">
            <img
              className="youtube_thumbnailPic"
              src="https://i.ytimg.com/an_webp/myKnOjy77lQ/mqdefault_6s.webp?du=3000&sqp=CPSnksQG&rs=AOn4CLDKbhmsgGZF5u3NGfC_e-iJucp2Qw"
              alt="Thumbnail"
            />
          </div>
          {/* for video description */}
          <div className="youtubeTitleBox">
            <div className="youtubeTitleBoxProfile">
              <Avatar
                className="cursor-pointer youtube_thumbnail_profile"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSah5Lpw2ViqO-S21pxcPbAe4aBOS2xcLQVEg&s"
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
        </div>
 {/* video=4 */}
        <div className="youtube_Video">
          {/* for video display */}
          <div className="youtube_thumbnailBox">
            <img
              className="youtube_thumbnailPic"
              src="https://i.ytimg.com/an_webp/myKnOjy77lQ/mqdefault_6s.webp?du=3000&sqp=CPSnksQG&rs=AOn4CLDKbhmsgGZF5u3NGfC_e-iJucp2Qw"
              alt="Thumbnail"
            />
          </div>
          {/* for video description */}
          <div className="youtubeTitleBox">
            <div className="youtubeTitleBoxProfile">
              <Avatar
                className="cursor-pointer youtube_thumbnail_profile"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSah5Lpw2ViqO-S21pxcPbAe4aBOS2xcLQVEg&s"
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
        </div>
{/* video=5 */}
        <div className="youtube_Video">
          {/* for video display */}
          <div className="youtube_thumbnailBox">
            <img
              className="youtube_thumbnailPic"
              src="https://i.ytimg.com/an_webp/myKnOjy77lQ/mqdefault_6s.webp?du=3000&sqp=CPSnksQG&rs=AOn4CLDKbhmsgGZF5u3NGfC_e-iJucp2Qw"
              alt="Thumbnail"
            />
          </div>
          {/* for video description */}
          <div className="youtubeTitleBox">
            <div className="youtubeTitleBoxProfile">
              <Avatar
                className="cursor-pointer youtube_thumbnail_profile"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSah5Lpw2ViqO-S21pxcPbAe4aBOS2xcLQVEg&s"
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
        </div>
{/* video=6 */}
        <div className="youtube_Video">
          {/* for video display */}
          <div className="youtube_thumbnailBox">
            <img
              className="youtube_thumbnailPic"
              src="https://i.ytimg.com/an_webp/myKnOjy77lQ/mqdefault_6s.webp?du=3000&sqp=CPSnksQG&rs=AOn4CLDKbhmsgGZF5u3NGfC_e-iJucp2Qw"
              alt="Thumbnail"
            />
          </div>
          {/* for video description */}
          <div className="youtubeTitleBox">
            <div className="youtubeTitleBoxProfile">
              <Avatar
                className="cursor-pointer youtube_thumbnail_profile"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSah5Lpw2ViqO-S21pxcPbAe4aBOS2xcLQVEg&s"
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
        </div>

      </div>
    </div>
  );
}

export default HomePage;
